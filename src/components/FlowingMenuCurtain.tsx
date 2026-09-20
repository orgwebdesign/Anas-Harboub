import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './FlowingMenuCurtain.css';
import natuliqueImg from '../assets/images/image.png';

interface MenuItem {
  no: string;
  name: string;
  count: string;
  still: string;
  href: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    no: '01',
    name: 'Natulique Swiss',
    count: 'Design on figma',
    still: natuliqueImg,
    href: '#order',
  },
  {
    no: '02',
    name: 'Object',
    count: '14 plates',
    still: 'https://motionprompts.dev/c/flowing-menu-curtain/object.jpg',
    href: '#order',
  },
  {
    no: '03',
    name: 'Landscape',
    count: '24 plates',
    still: 'https://motionprompts.dev/c/flowing-menu-curtain/landscape.jpg',
    href: '#order',
  },
  {
    no: '04',
    name: 'Interior',
    count: '12 plates',
    still: 'https://motionprompts.dev/c/flowing-menu-curtain/interior.jpg',
    href: '#order',
  },
  {
    no: '05',
    name: 'Archive',
    count: '30 plates',
    still: 'https://motionprompts.dev/c/flowing-menu-curtain/archive.jpg',
    href: '#order',
  },
];

interface FlowingMenuOptions {
  speed?: number;
  itemSelector?: string;
  panelSelector?: string;
  stripSelector?: string;
  partSelector?: string;
}

// Engine implementation with data-attribute selectors & React 19 safety
function initFlowingMenu(root: HTMLElement, options: FlowingMenuOptions = {}) {
  const speed = options.speed ?? 18;
  const itemSel = options.itemSelector ?? '[data-flow-item]';
  const panelSel = options.panelSelector ?? '[data-flow-panel]';
  const stripSel = options.stripSelector ?? '[data-flow-strip]';
  const partSel = options.partSelector ?? '[data-flow-part]';

  const teardowns: (() => void)[] = [];

  // No hover, no work: bail out when not a fine pointer desktop
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const items = Array.from(root.querySelectorAll<HTMLElement>(itemSel));

  const dist2 = (x: number, y: number, x2: number, y2: number) =>
    (x - x2) * (x - x2) + (y - y2) * (y - y2);

  const closestEdge = (x: number, y: number, width: number, height: number): 'top' | 'bottom' =>
    dist2(x, y, width / 2, 0) < dist2(x, y, width / 2, height) ? 'top' : 'bottom';

  items.forEach((item) => {
    const panel = item.querySelector<HTMLElement>(panelSel);
    const strip = item.querySelector<HTMLElement>(stripSel);
    const template = strip?.querySelector<HTMLElement>(partSel);

    if (!panel || !strip || !template) return;

    // GSAP has to be told to own the transform initially
    gsap.set(panel, { y: 0, yPercent: 101 });
    gsap.set(strip, { y: 0, yPercent: 0 });

    let loop: gsap.core.Tween | null = null;
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    const rebuild = () => {
      if (cancelled) return;
      // Measure the authored template part while in DOM
      const partWidth = template.offsetWidth;
      if (!partWidth) return;

      const span = item.offsetWidth || window.innerWidth;
      const wanted = Math.max(4, Math.ceil(span / partWidth) + 2);

      while (strip.children.length > wanted && strip.lastElementChild) {
        strip.lastElementChild.remove();
      }
      while (strip.children.length < wanted) {
        strip.appendChild(template.cloneNode(true));
      }

      loop?.kill();

      if (prefersReducedMotion) {
        gsap.set(strip, { x: 0 });
        return;
      }

      gsap.set(strip, { x: 0 });
      loop = gsap.to(strip, {
        x: -partWidth,
        duration: speed,
        ease: 'none',
        repeat: -1,
      });
    };

    // Initial build
    rebuild();

    // Fonts ready handler with cancelled guard
    document.fonts?.ready.then(() => {
      if (!cancelled) rebuild();
    });

    // Debounced resize handler
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!cancelled) rebuild();
      }, 120);
    };
    window.addEventListener('resize', onResize);

    if (supportsHover) {
      // Mouse Enter
      const onMouseEnter = (e: MouseEvent) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const edge = closestEdge(x, y, rect.width, rect.height);

        gsap.killTweensOf([panel, strip]);

        if (prefersReducedMotion) {
          gsap.timeline({ defaults: { duration: 0.2, ease: 'power1.out' } })
            .set(panel, { yPercent: edge === 'top' ? -101 : 101 }, 0)
            .to(panel, { yPercent: 0 }, 0);
          return;
        }

        // Counter-movement: panel enters from edge, strip from opposite
        gsap.timeline({ defaults: { duration: 0.6, ease: 'expo.out' } })
          .set(panel, { yPercent: edge === 'top' ? -101 : 101 }, 0)
          .set(strip, { yPercent: edge === 'top' ? 101 : -101 }, 0)
          .to([panel, strip], { yPercent: 0 }, 0);
      };

      // Mouse Leave: measure edge again on exit!
      const onMouseLeave = (e: MouseEvent) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const edge = closestEdge(x, y, rect.width, rect.height);

        gsap.killTweensOf([panel, strip]);

        if (prefersReducedMotion) {
          gsap.to(panel, {
            yPercent: edge === 'top' ? -101 : 101,
            duration: 0.2,
            ease: 'power1.out',
          });
          return;
        }

        gsap.timeline({ defaults: { duration: 0.6, ease: 'expo.out' } })
          .to(panel, { yPercent: edge === 'top' ? -101 : 101 }, 0)
          .to(strip, { yPercent: edge === 'top' ? 101 : -101 }, 0);
      };

      item.addEventListener('mouseenter', onMouseEnter);
      item.addEventListener('mouseleave', onMouseLeave);

      teardowns.push(() => {
        item.removeEventListener('mouseenter', onMouseEnter);
        item.removeEventListener('mouseleave', onMouseLeave);
      });
    }

    teardowns.push(() => {
      cancelled = true;
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      loop?.kill();
      gsap.killTweensOf([panel, strip]);
    });
  });

  return {
    destroy: () => {
      teardowns.forEach((fn) => fn());
    },
  };
}

interface FlowingMenuCurtainProps {
  onExploreMore?: () => void;
}

export const FlowingMenuCurtain: React.FC<FlowingMenuCurtainProps> = ({ onExploreMore }) => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const controller = initFlowingMenu(rootRef.current!, {
        speed: 18,
        itemSelector: '[data-flow-item]',
        panelSelector: '[data-flow-panel]',
        stripSelector: '[data-flow-strip]',
        partSelector: '[data-flow-part]',
      });

      return () => controller.destroy();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="flowing-menu" className="flowing-menu-section">
      <div className="flowing-menu-container">
        {/* Header line */}
        <div className="flowing-menu-header">
          <span>Recent work</span>
        </div>

        {/* 5 Rows */}
        <div className="flowing-menu-list">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.no}
              className="flowing-row"
              href={item.href}
              data-flow-item
              onClick={(e) => {
                if (item.href === '#order' && onExploreMore) {
                  e.preventDefault();
                  onExploreMore();
                }
              }}
            >
              <span className="flowing-row-name">{item.name}</span>
              <span className="flowing-row-count">{item.count}</span>

              {/* Inverted curtain panel */}
              <span className="flowing-curtain" data-flow-panel aria-hidden="true">
                <span className="flowing-curtain-strip" data-flow-strip>
                  {/* Authored template part */}
                  <span className="flowing-curtain-part" data-flow-part>
                    <span className="flowing-curtain-word">{item.name}</span>
                    <i
                      className="flowing-curtain-still"
                      style={{ '--still': `url(${item.still})` } as React.CSSProperties}
                    />
                  </span>
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* Footer with CTA */}
        <div className="flowing-menu-footer">
          <button
            type="button"
            className="flowing-menu-cta"
            onClick={onExploreMore}
          >
            More Work
          </button>
        </div>
      </div>
    </section>
  );
};
