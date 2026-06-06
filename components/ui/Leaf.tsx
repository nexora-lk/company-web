import React from 'react';

interface LeafProps {
  variant?: 'tr' | 'tl' | 'br' | 'bl';
  className?: string;
  color?: string;
}

const Leaf: React.FC<LeafProps> = ({ variant = 'tr', className = '', color }) => {
  const getPlacementClass = () => {
    switch (variant) {
      case 'tr': return 'leaf-tr';
      case 'tl': return 'leaf-tl';
      case 'br': return 'leaf-br';
      case 'bl': return 'leaf-bl';
      default: return 'leaf-tr';
    }
  };

  return (
    <div className={`leaf-wrap ${getPlacementClass()} ${className}`} aria-hidden="true">
      <svg 
        viewBox="0 0 300 300" 
        xmlns="http://www.w3.org/2000/svg" 
        fill={color || "var(--leaf-color-light)"}
      >
        <path d="M300,0 Q220,60 180,130 Q140,200 160,300 Q200,220 230,150 Q260,80 300,0Z"/>
        <path d="M300,20 Q240,75 205,145 Q170,215 185,300 Q228,215 255,142 Q282,70 300,20Z" opacity=".55"/>
        <path d="M300,50 Q255,95 228,163 Q200,230 210,300 Q250,212 272,138 Q294,65 300,50Z" opacity=".3"/>
        <line x1="300" y1="5" x2="162" y2="298" stroke={color || "var(--leaf-color-light)"} strokeWidth="1.5" opacity=".3"/>
        <line x1="300" y1="35" x2="188" y2="299" stroke={color || "var(--leaf-color-light)"} strokeWidth="1" opacity=".2"/>
      </svg>
    </div>
  );
};

export default Leaf;
