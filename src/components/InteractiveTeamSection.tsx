import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(SplitText);
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Colin',
    role: 'Creative Director',
    image: 'https://motionprompts.dev/c/interactive-team-section-javascript/img1.jpeg',
  },
  {
    name: 'Liam',
    role: 'Lead UI Designer',
    image: 'https://motionprompts.dev/c/interactive-team-section-javascript/img2.jpeg',
  },
  {
    name: 'Tabitha',
    role: 'Design System Architect',
    image: 'https://motionprompts.dev/c/interactive-team-section-javascript/img3.jpeg',
  },
  {
    name: 'Tyson',
    role: 'Interaction Designer',
    image: 'https://motionprompts.dev/c/interactive-team-section-javascript/img4.jpeg',
  },
  {
    name: 'Max',
    role: 'Motion Lead',
    image: 'https://motionprompts.dev/c/interactive-team-section-javascript/img5.jpeg',
  },
  {
    name: 'Everest',
    role: 'Brand Strategist',
    image: 'https://motionprompts.dev/c/interactive-team-section-javascript/img6.jpeg',
  },
  {
    name: 'Simon',
    role: 'Visual Designer',
    image: 'https://motionprompts.dev/c/interactive-team-section-javascript/img7.jpeg',
  },
  {
    name: 'Gideon',
    role: '3D & Spatial Designer',
    image: 'https://motionprompts.dev/c/interactive-team-section-javascript/img8.jpeg',
  },
  {
    name: 'Benton',
    role: 'UX Researcher',
    image: 'https://motionprompts.dev/c/interactive-team-section-javascript/img9.jpeg',
  },
];

export const InteractiveTeamSection: React.FC = () => {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let splits: SplitText[] = [];
    const offs: Array<() => void> = [];
    let activeIndex: number | null = null;

    const ctx = gsap.context(() => {
      // 1. Ensure fonts are loaded before SplitText calculation
      const initSplit = () => {
        const headings: HTMLElement[] = gsap.utils.toArray('.name h1', root);
        if (!headings.length) return;

        splits = headings.map((heading) => {
          const split = new (SplitText as any)(heading, { type: 'chars' });
          split.chars.forEach((char: HTMLElement) => {
            char.classList.add('letter');
            gsap.set(char, {
              position: 'relative',
              y: '0%',
              display: 'inline-block',
              willChange: 'transform',
            });
          });
          return split;
        });

        const defaultLetters: HTMLElement[] = gsap.utils.toArray('.name.default .letter', root);
        const memberNames: HTMLElement[] = gsap.utils.toArray('.name:not(.default)', root);
        const imagesContainer: HTMLElement | null = root.querySelector('.profile-images');
        const imgElements: HTMLElement[] = gsap.utils.toArray('.profile-images .img-box', root);

        // Initial state: default title "The Squad" letters shifted +100% inside -100% parent -> net 0 (visible)
        if (defaultLetters.length) {
          gsap.set(defaultLetters, { y: '100%' });
        }

        // 2. Desktop Hover Wiring (window.innerWidth >= 900)
        if (window.innerWidth >= 900) {
          imgElements.forEach((imgEl, index) => {
            const memberEl = memberNames[index];
            const memberLetters: HTMLElement[] = memberEl ? gsap.utils.toArray('.letter', memberEl) : [];

            const onMouseEnter = () => {
              // Expand thumbnail smoothly (70px -> 140px)
              gsap.to(imgEl, {
                width: 140,
                height: 140,
                duration: 0.5,
                ease: 'power4.out',
                overwrite: 'auto',
              });

              // Slide member letters up into view with center-out stagger
              if (memberLetters.length) {
                gsap.to(memberLetters, {
                  y: '-100%',
                  duration: 0.75,
                  ease: 'power4.out',
                  stagger: { each: 0.025, from: 'center' },
                  overwrite: 'auto',
                });
              }
            };

            const onMouseLeave = () => {
              // Shrink thumbnail back (140px -> 70px)
              gsap.to(imgEl, {
                width: 70,
                height: 70,
                duration: 0.5,
                ease: 'power4.out',
                overwrite: 'auto',
              });

              // Slide member letters back down below mask
              if (memberLetters.length) {
                gsap.to(memberLetters, {
                  y: '0%',
                  duration: 0.75,
                  ease: 'power4.out',
                  stagger: { each: 0.025, from: 'center' },
                  overwrite: 'auto',
                });
              }
            };

            imgEl.addEventListener('mouseenter', onMouseEnter);
            imgEl.addEventListener('mouseleave', onMouseLeave);

            offs.push(() => {
              imgEl.removeEventListener('mouseenter', onMouseEnter);
              imgEl.removeEventListener('mouseleave', onMouseLeave);
            });
          });

          // Row-level hover for default title ("The Squad")
          if (imagesContainer && defaultLetters.length) {
            const onContainerEnter = () => {
              // Default title slides up and out of view
              gsap.to(defaultLetters, {
                y: '0%',
                duration: 0.75,
                ease: 'power4.out',
                stagger: { each: 0.025, from: 'center' },
                overwrite: 'auto',
              });
            };

            const onContainerLeave = () => {
              // Default title drops back into view
              gsap.to(defaultLetters, {
                y: '100%',
                duration: 0.75,
                ease: 'power4.out',
                stagger: { each: 0.025, from: 'center' },
                overwrite: 'auto',
              });
            };

            imagesContainer.addEventListener('mouseenter', onContainerEnter);
            imagesContainer.addEventListener('mouseleave', onContainerLeave);

            offs.push(() => {
              imagesContainer.removeEventListener('mouseenter', onContainerEnter);
              imagesContainer.removeEventListener('mouseleave', onContainerLeave);
            });
          }
        } else {
          // 3. Mobile / Touch Tap-Toggle Interaction (< 900px)
          imgElements.forEach((imgEl, index) => {
            const memberEl = memberNames[index];
            const memberLetters: HTMLElement[] = memberEl ? gsap.utils.toArray('.letter', memberEl) : [];

            const onClick = () => {
              if (activeIndex === index) {
                // Deactivate
                gsap.to(imgEl, { width: 60, height: 60, duration: 0.4, ease: 'power3.out' });
                if (memberLetters.length) {
                  gsap.to(memberLetters, { y: '0%', duration: 0.5, ease: 'power3.out' });
                }
                if (defaultLetters.length) {
                  gsap.to(defaultLetters, { y: '100%', duration: 0.5, ease: 'power3.out' });
                }
                activeIndex = null;
              } else {
                // If previous active, shrink it
                if (activeIndex !== null && imgElements[activeIndex]) {
                  const prevEl = imgElements[activeIndex];
                  const prevMember = memberNames[activeIndex];
                  const prevLetters: HTMLElement[] = prevMember ? gsap.utils.toArray('.letter', prevMember) : [];
                  gsap.to(prevEl, { width: 60, height: 60, duration: 0.4, ease: 'power3.out' });
                  if (prevLetters.length) {
                    gsap.to(prevLetters, { y: '0%', duration: 0.5, ease: 'power3.out' });
                  }
                }

                // Hide default
                if (defaultLetters.length) {
                  gsap.to(defaultLetters, { y: '0%', duration: 0.5, ease: 'power3.out' });
                }

                // Expand current
                gsap.to(imgEl, { width: 90, height: 90, duration: 0.4, ease: 'power3.out' });
                if (memberLetters.length) {
                  gsap.to(memberLetters, {
                    y: '-100%',
                    duration: 0.6,
                    ease: 'power3.out',
                    stagger: { each: 0.02, from: 'center' },
                  });
                }
                activeIndex = index;
              }
            };

            imgEl.addEventListener('click', onClick);
            offs.push(() => imgEl.removeEventListener('click', onClick));
          });
        }
      };

      if (document.fonts?.ready) {
        document.fonts.ready.then(initSplit);
      } else {
        initSplit();
      }
    }, root);

    return () => {
      // 1. Remove native event listeners
      offs.forEach((fn) => fn());

      // 2. Kill mid-flight tweens
      const elementsToKill = root.querySelectorAll('.img-box, .name h1, .letter');
      gsap.killTweensOf(elementsToKill);

      // 3. Revert SplitText instances
      splits.forEach((s) => s.revert());

      // 4. Revert GSAP context
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="team-interactive-section relative w-full min-h-[90vh] md:h-[100svh] bg-[#0B0C0E] text-[#F3F4F6] flex flex-col justify-center items-center py-16 md:py-0 overflow-hidden border-t border-b border-white/5 select-none"
    >
      {/* Background Subtle Gradient & Grid Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C4D600]/5 rounded-full blur-[160px]" />
      </div>

      {/* Top Section Tagline / Badge in Portfolio Style */}
      <div className="relative z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest uppercase text-[#C4D600] mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C4D600] animate-pulse" />
        <span>Design Squad & Collaborators</span>
      </div>

      {/* Profile Thumbnails Row */}
      <div className="profile-images relative z-20 flex items-center justify-center max-w-[95%] sm:max-w-none flex-wrap md:flex-nowrap gap-1">
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={member.name}
            className="img-box relative w-[60px] h-[60px] md:w-[70px] md:h-[70px] p-[3px] md:p-[5px] cursor-pointer will-change-[width,height] transition-all duration-200"
            title={`${member.name} — ${member.role}`}
          >
            <div className="w-full h-full rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-lg group hover:border-[#C4D600] hover:shadow-[0_0_20px_rgba(196,214,0,0.45)] transition-colors">
              <img
                src={member.image}
                alt={member.name}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Giant Clip-Masked Headline Area */}
      <div
        className="profile-names relative z-10 w-full h-[6rem] sm:h-[10rem] md:h-[15rem] overflow-hidden mt-6 md:mt-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        {/* Default Title: The Squad (Off-white #F3F4F6) */}
        <div className="name default">
          <h1
            className="absolute inset-x-0 w-full text-center uppercase text-white font-black tracking-[-0.03em] leading-none"
            style={{
              fontFamily: '"Barlow Condensed", "Manrope", sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(4rem, 16vw, 15rem)',
              transform: 'translateY(-100%)',
            }}
          >
            The Squad
          </h1>
        </div>

        {/* 9 Member Names: Giant Staggered Heading in Portfolio Green #C4D600 */}
        {TEAM_MEMBERS.map((member) => (
          <div key={member.name} className="name">
            <h1
              className="absolute inset-x-0 w-full text-center uppercase text-[#C4D600] font-black tracking-[-0.03em] leading-none drop-shadow-[0_0_40px_rgba(196,214,0,0.35)]"
              style={{
                fontFamily: '"Barlow Condensed", "Manrope", sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(4rem, 16vw, 15rem)',
                transform: 'translateY(100%)',
              }}
            >
              {member.name}
            </h1>
          </div>
        ))}
      </div>

      {/* Bottom Sub-hint */}
      <div className="relative z-10 text-center text-xs md:text-sm font-light text-white/50 mt-4 tracking-wide">
        <span className="hidden md:inline">Hover over any portrait to reveal team members</span>
        <span className="inline md:hidden">Tap any portrait to reveal</span>
      </div>
    </section>
  );
};

export default InteractiveTeamSection;
