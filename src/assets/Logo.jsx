import React from 'react';

const Logo = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#1a2236"/>
    <path d="M16 40V28L32 16L48 28V40" stroke="#2ec4b6" strokeWidth="3" strokeLinejoin="round"/>
    <rect x="24" y="36" width="16" height="12" rx="2" fill="#234567"/>
    <text x="32" y="54" textAnchor="middle" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#fff">UHP</text>
  </svg>
);

export default Logo; 
