import React from 'react';
import TextLoop from './TextLoop';

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#0B0C0E] py-1 overflow-hidden relative flex items-center justify-center max-h-28 sm:max-h-32">
      <TextLoop
        text="UI/UX DESIGN ✦ WEB DESIGN ✦ NO-CODE ✦ DESIGN SYSTEMS ✦ WIREFRAMES & PROTOTYPING ✦ AI CREATIVE ✦ PRODUCT DESIGN ✦ DASHBOARD UI"
        shape="wave"
        speed={85}
        direction="forward"
        separator="✦"
        curviness={22}
        fontSize={18}
        fontWeight={800}
        letterSpacing={1.5}
        uppercase
        color="#000000"
        ribbon={true}
        ribbonColor="#FF8A00"
        ribbonWidth={42}
        pauseOnHover
        className="w-full"
      />
    </div>
  );
};



