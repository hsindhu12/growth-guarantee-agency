
import React from 'react';

interface MascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  imageUrl?: string;
  type?: 'default' | 'happy' | 'excited' | 'professional';
}

const Mascot = ({ size = 'md', className = '', imageUrl, type = 'default' }: MascotProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  // If imageUrl is provided, use it instead of SVG
  if (imageUrl) {
    return (
      <div className={`${sizeClasses[size]} ${className} relative`}>
        <img 
          src={imageUrl} 
          alt="Mascot" 
          className="w-full h-full object-contain rounded-full"
        />
      </div>
    );
  }

  // Different mascot expressions based on type
  const getMascotColors = () => {
    switch (type) {
      case 'happy':
        return { body: '#10B981', head: '#34D399' };
      case 'excited':
        return { body: '#F59E0B', head: '#FBBF24' };
      case 'professional':
        return { body: '#1F2937', head: '#374151' };
      default:
        return { body: '#3B82F6', head: '#60A5FA' };
    }
  };

  const colors = getMascotColors();

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Body */}
        <ellipse cx="100" cy="130" rx="45" ry="55" fill={colors.body} />
        
        {/* Head */}
        <circle cx="100" cy="70" r="40" fill={colors.head} />
        
        {/* Eyes */}
        <circle cx="88" cy="65" r="6" fill="white" />
        <circle cx="112" cy="65" r="6" fill="white" />
        <circle cx="88" cy="65" r="3" fill="#1F2937" />
        <circle cx="112" cy="65" r="3" fill="#1F2937" />
        
        {/* Eye sparkles */}
        <circle cx="90" cy="63" r="1" fill="white" />
        <circle cx="114" cy="63" r="1" fill="white" />
        
        {/* Smile - different expressions */}
        {type === 'excited' ? (
          <ellipse cx="100" cy="82" rx="8" ry="6" fill="#1F2937" />
        ) : (
          <path d="M 85 80 Q 100 90 115 80" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
        )}
        
        {/* Arms */}
        <ellipse cx="65" cy="120" rx="12" ry="25" fill={colors.body} transform="rotate(-20 65 120)" />
        <ellipse cx="135" cy="120" rx="12" ry="25" fill={colors.body} transform="rotate(20 135 120)" />
        
        {/* Hands */}
        <circle cx="58" cy="140" r="8" fill={colors.head} />
        <circle cx="142" cy="140" r="8" fill={colors.head} />
        
        {/* Legs */}
        <ellipse cx="85" cy="170" rx="10" ry="20" fill={colors.body} />
        <ellipse cx="115" cy="170" rx="10" ry="20" fill={colors.body} />
        
        {/* Feet */}
        <ellipse cx="85" cy="185" rx="12" ry="6" fill="#1F2937" />
        <ellipse cx="115" cy="185" rx="12" ry="6" fill="#1F2937" />
        
        {/* Antenna/Growth symbol */}
        <line x1="100" y1="30" x2="100" y2="20" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="18" r="3" fill="#10B981" />
        <path d="M 95 15 L 100 10 L 105 15" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default Mascot;
