import React, { useEffect, useRef } from 'react';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';

export interface InteractiveNeuralVortexProps {
  title?: React.ReactNode;
  paragraph?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  badgeText?: string;
  className?: string;
}

const InteractiveNeuralVortex: React.FC<InteractiveNeuralVortexProps> = ({
  title = (
    <>
      Stop Losing High-Ticket Clients to{' '}
      <span className="text-[#C4D600] drop-shadow-[0_0_25px_rgba(196,214,0,0.45)]">
        Mediocre Design.
      </span>
    </>
  ),
  paragraph = 'Your product or service is great, but your visuals should prove it instantly. I partner with ambitious businesses to craft identity systems, packaging, social content, and print materials with zero guesswork, technical perfection, and zero wasted time.',
  primaryCtaText = 'Book a Free Creative Consultation',
  secondaryCtaText = 'Explore Past Work',
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  badgeText = 'BRAND IDENTITY & GRAPHIC SYSTEMS',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointer = useRef({ x: 0, y: 0, tX: 0, tY: 0 }); // Real-time pointer updates
  const animationRef = useRef<number | null>(null);

  // WebGL setup
  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    // Initialize WebGL context
    const gl =
      (canvasEl.getContext('webgl') as WebGLRenderingContext | null) ||
      (canvasEl.getContext('experimental-webgl') as WebGLRenderingContext | null);
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Shader sources
    const vsSource = `
      precision mediump float;
      attribute vec2 a_position;
      varying vec2 vUv;
      void main() {
        vUv = .5 * (a_position + 1.);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform float u_ratio;
      uniform vec2 u_pointer_position;
      uniform float u_scroll_progress;
      
      vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
      }
      
      float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.);
        vec2 res = vec2(0.);
        float scale = 8.;
        for (int j = 0; j < 15; j++) {
          uv = rotate(uv, 1.);
          sine_acc = rotate(sine_acc, 1.);
          vec2 layer = uv * scale + float(j) + sine_acc - t;
          sine_acc += sin(layer) + 2.4 * p;
          res += (.5 + .5 * cos(layer)) / scale;
          scale *= (1.2);
        }
        return res.x + res.y;
      }
      
      void main() {
        vec2 uv = .5 * vUv;
        uv.x *= u_ratio;
        vec2 pointer = vUv - u_pointer_position;
        pointer.x *= u_ratio;
        float p = clamp(length(pointer), 0., 1.);
        p = .5 * pow(1. - p, 2.);
        float t = .001 * u_time;
        vec3 color = vec3(0.);
        float noise = neuro_shape(uv, t, p);
        noise = 1.2 * pow(noise, 3.);
        noise += pow(noise, 10.);
        noise = max(.0, noise - .5);
        noise *= (1. - length(vUv - .5));
        
        // Portfolio Design System Colors: Signature Lime Green (#C4D600) + Cyber Emerald
        vec3 limeGreen = vec3(0.768, 0.839, 0.0);      // #C4D600
        vec3 deepEmerald = vec3(0.08, 0.65, 0.35);    // Cyber Emerald
        vec3 neonHighlight = vec3(0.92, 0.98, 0.20);  // Chartreuse Glow

        color = mix(limeGreen, deepEmerald, 0.35 + 0.22 * sin(2.0 * u_scroll_progress + 1.2));
        color += neonHighlight * (0.22 * sin(2.0 * u_scroll_progress + 1.5));
        color = color * noise;
        gl_FragColor = vec4(color, noise * 0.92);
      }
    `;

    // Shader compilation
    const compileShader = (
      glCtx: WebGLRenderingContext,
      source: string,
      type: number
    ): WebGLShader | null => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error('Shader error:', glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl, vsSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, fsSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    // Program setup
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Geometry
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRatio = gl.getUniformLocation(program, 'u_ratio');
    const uPointerPosition = gl.getUniformLocation(program, 'u_pointer_position');
    const uScrollProgress = gl.getUniformLocation(program, 'u_scroll_progress');

    // Resize handler
    const resizeCanvas = () => {
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvasEl.clientWidth || window.innerWidth;
      const height = canvasEl.clientHeight || window.innerHeight;
      canvasEl.width = width * devicePixelRatio;
      canvasEl.height = height * devicePixelRatio;
      gl.viewport(0, 0, canvasEl.width, canvasEl.height);
      if (uRatio) {
        gl.uniform1f(uRatio, canvasEl.width / canvasEl.height);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const render = () => {
      const currentTime = performance.now();

      // Smooth pointer movement
      pointer.current.x += (pointer.current.tX - pointer.current.x) * 0.15;
      pointer.current.y += (pointer.current.tY - pointer.current.y) * 0.15;

      if (uTime) gl.uniform1f(uTime, currentTime);
      if (uPointerPosition) {
        gl.uniform2f(
          uPointerPosition,
          pointer.current.x / window.innerWidth,
          1 - pointer.current.y / window.innerHeight
        );
      }
      if (uScrollProgress) {
        gl.uniform1f(uScrollProgress, window.pageYOffset / (2 * window.innerHeight));
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      pointer.current.tX = e.clientX;
      pointer.current.tY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        pointer.current.tX = e.touches[0].clientX;
        pointer.current.tY = e.touches[0].clientY;
      }
    };

    window.addEventListener('pointermove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <div
      className={`relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans bg-[#0B0C0E] ${className}`}
    >
      {/* Interactive WebGL Neural Canvas Background */}
      <canvas
        ref={canvasRef}
        id="neuro-vortex"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-85 z-0"
      />

      {/* Ambient Gradient Overlays for Seamless Dark Theme Blend */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E] via-transparent to-[#0B0C0E]/70 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0B0C0E_90%)] pointer-events-none z-0" />

      {/* Hero Section Container */}
      <section className="relative flex flex-col items-center justify-center flex-1 w-full max-w-5xl px-4 sm:px-6 z-10 pt-24 pb-16 sm:py-24 text-center">
        {/* Glow behind main card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-[#C4D600]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        {/* Hero Card Container */}
        <div className="w-full rounded-3xl border border-white/15 bg-[#141519]/80 backdrop-blur-xl p-8 sm:p-12 md:p-16 shadow-[0_20px_70px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-white/25">

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12] mb-6 sm:mb-8 max-w-4xl mx-auto">
            {title}
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-sans leading-relaxed max-w-3xl mx-auto mb-10 sm:mb-12 font-normal">
            {paragraph}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full">
            {/* Primary CTA */}
            <button
              type="button"
              onClick={onPrimaryCtaClick}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#C4D600] text-black font-extrabold text-sm sm:text-base transition-all duration-300 hover:bg-[#d2e500] hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(196,214,0,0.35)] cursor-pointer"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={onSecondaryCtaClick}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-white/20 bg-white/[0.04] text-white hover:text-[#C4D600] hover:border-[#C4D600]/60 hover:bg-white/[0.08] backdrop-blur-md font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
              <Eye className="w-4 h-4 text-[#C4D600] transition-transform duration-300 group-hover:scale-110" />
              <span>{secondaryCtaText}</span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default InteractiveNeuralVortex;
