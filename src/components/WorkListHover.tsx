import React, { useState } from 'react';
import './WorkListHover.css';

interface WorkListHoverProps {
  onViewAllClick?: () => void;
  onSelectProject?: (title: string) => void;
}

interface WorkRow {
  id: string;
  prevId: string;
  title: string;
  bgClass: string;
  image: string;
  topOffset: string;
  leftOffset: string;
}

const WORK_ITEMS: WorkRow[] = [
  {
    id: 'work-item-1',
    prevId: 'work-prev-1',
    title: 'Aster',
    bgClass: 'bg-color-red', // pale aqua / cyan
    image: 'https://motionprompts.dev/c/media-monks-hover/prev-1.jpg',
    topOffset: '50%',
    leftOffset: '50%',
  },
  {
    id: 'work-item-2',
    prevId: 'work-prev-2',
    title: 'Launching Nova Into The World',
    bgClass: 'bg-color-blue', // pale yellow
    image: 'https://motionprompts.dev/c/media-monks-hover/prev-2.jpg',
    topOffset: '0%',
    leftOffset: '13.25%',
  },
  {
    id: 'work-item-3',
    prevId: 'work-prev-3',
    title: 'Standby x Northwind',
    bgClass: 'bg-color-green', // pale pink / salmon
    image: 'https://motionprompts.dev/c/media-monks-hover/prev-3.jpg',
    topOffset: '-50%',
    leftOffset: '-23.5%',
  },
];

// Arrow icon SVG component for the conveyor swap
const RightArrowIcon: React.FC = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 256 256"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
  </svg>
);

export const WorkListHover: React.FC<WorkListHoverProps> = ({
  onViewAllClick,
  onSelectProject,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Derive panel className
  const panelClassName =
    hoveredIndex !== null
      ? `work-list-panel ${WORK_ITEMS[hoveredIndex].bgClass} hovered`
      : 'work-list-panel';

  // Derive overlay top/left positions
  const overlayStyle = {
    top: hoveredIndex !== null ? WORK_ITEMS[hoveredIndex].topOffset : '0%',
    left: hoveredIndex !== null ? WORK_ITEMS[hoveredIndex].leftOffset : '13.25%',
  };

  // Active card index: row matching card if hovered, otherwise middle card (index 1 / prev-2)
  const activeCardIndex = hoveredIndex !== null ? hoveredIndex : 1;

  return (
    <section id="work-live" className="work-list-container">
      <div className={panelClassName}>
        {/* Tilted Preview Cards Overlay (sitting behind text) */}
        <div className="work-list-overlay" style={overlayStyle}>
          {WORK_ITEMS.map((item, index) => {
            const isActive = index === activeCardIndex;
            return (
              <div
                key={item.prevId}
                id={item.prevId}
                className={`work-list-prev ${isActive ? 'active' : ''}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    // graceful fallback if external asset fails
                    (e.target as HTMLElement).style.opacity = '0.3';
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Intro text */}
        <p className="work-list-intro">Just went live with:</p>

        {/* 3 Work Item Rows */}
        {WORK_ITEMS.map((item, index) => (
          <div
            key={item.id}
            id={item.id}
            className="work-list-item"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => onSelectProject?.(item.title)}
          >
            <div className="work-list-name">
              <h1>{item.title}</h1>
            </div>

            <div className="work-list-icon">
              {/* Conveyor arrow 1: slides in from left */}
              <div className="work-list-icon-holder i-1">
                <RightArrowIcon />
              </div>
              {/* Conveyor arrow 2: exits right */}
              <div className="work-list-icon-holder i-2">
                <RightArrowIcon />
              </div>
            </div>
          </div>
        ))}

        {/* CTA Button */}
        <div className="work-list-cta">
          <button
            type="button"
            className="work-list-btn"
            onClick={onViewAllClick}
          >
            View all work
          </button>
        </div>
      </div>
    </section>
  );
};
