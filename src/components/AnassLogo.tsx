import React from 'react';

interface AnassLogoProps {
  className?: string;
  height?: number | string;
}

export const AnassLogo: React.FC<AnassLogoProps> = ({ className = '', height = 40 }) => {
  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      {/* Interlocking Grey A + Orange H Emblem from logo Anas.png (Transparent background) */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-auto transition-transform duration-300 hover:scale-105"
        style={{ height, width: height }}
        role="img"
        aria-label="Anass Harboub AH Emblem"
      >
        {/* Grey 'A' Left Monogram Shape */}
        <path
          d="M 35 428 
             L 122 75 
             L 252 75 
             L 280 215 
             L 202 215 
             L 152 335 
             L 208 335 
             L 146 428 
             Z"
          fill="#A0A5AD"
        />

        {/* Vibrant Orange 'H' Right Monogram Shape */}
        <path
          d="M 290 75 
             L 380 75 
             L 465 428 
             L 375 428 
             L 336 270 
             L 300 270 
             L 330 428 
             L 242 428 
             L 208 285 
             C 215 255, 250 235, 290 235 
             L 332 250 
             L 310 152 
             Z"
          fill="#C4D600"
        />
      </svg>
    </div>
  );
};

export default AnassLogo;
