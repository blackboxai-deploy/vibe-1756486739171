// Composants d'icônes personnalisées pour WestRide Bénin
import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// Icône de voiture
export const CarIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M5 12H3v4a1 1 0 0 0 1 1h1V12Zm0 0h14m0 0h2v4a1 1 0 0 1-1 1h-1V12Zm-6 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Icône de moto
export const MotoIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 8l-2 4h4l-2-4ZM8 12h8M10 8h4" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle cx="5" cy="15" r="1" fill={color} />
    <circle cx="19" cy="15" r="1" fill={color} />
  </svg>
);

// Icône de téléphone
export const PhoneIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Icône de cadenas (mot de passe)
export const LockIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <rect 
      x="3" 
      y="11" 
      width="18" 
      height="11" 
      rx="2" 
      ry="2" 
      stroke={color} 
      strokeWidth="2"
    />
    <circle cx="12" cy="16" r="1" fill={color} />
    <path 
      d="M7 11V7a5 5 0 0 1 10 0v4" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Icône de recherche
export const SearchIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <circle 
      cx="11" 
      cy="11" 
      r="8" 
      stroke={color} 
      strokeWidth="2"
    />
    <path 
      d="M21 21l-4.35-4.35" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Icône d'étoile pour les notes
export const StarIcon: React.FC<IconProps & { filled?: boolean }> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '',
  filled = false 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={filled ? color : 'none'} 
    className={className}
  >
    <path 
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Icône d'emplacement
export const LocationIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" 
      stroke={color} 
      strokeWidth="2"
    />
    <circle 
      cx="12" 
      cy="10" 
      r="3" 
      stroke={color} 
      strokeWidth="2"
    />
  </svg>
);

// Icône d'horloge
export const ClockIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <circle 
      cx="12" 
      cy="12" 
      r="10" 
      stroke={color} 
      strokeWidth="2"
    />
    <path 
      d="M12 6v6l4 2" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Icône de casque
export const HelmetIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M12 2C8.5 2 5.5 4.5 5.5 8v6c0 1.5.5 3 1.5 4h10c1-1 1.5-2.5 1.5-4V8c0-3.5-3-6-6.5-6Z" 
      stroke={color} 
      strokeWidth="2"
    />
    <path 
      d="M18 14h2v2a2 2 0 0 1-2 2h-1" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M6 14H4v2a2 2 0 0 0 2 2h1" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
);

// Icône d'utilisateur
export const UserIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle 
      cx="12" 
      cy="7" 
      r="4" 
      stroke={color} 
      strokeWidth="2"
    />
  </svg>
);

// Icône de flèche droite
export const ChevronRightIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M9 18l6-6-6-6" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Icône de paramètres
export const SettingsIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path 
      d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle 
      cx="12" 
      cy="12" 
      r="3" 
      stroke={color} 
      strokeWidth="2"
    />
  </svg>
);