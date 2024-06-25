import React from 'react';

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function Chip({ category, bgcolor, textcolor }) {
  const backgroundColor = hexToRgba(bgcolor, 0.15); // Setting opacity to 0.15
  return (
    <div
      className="w-auto h-auto p-2 rounded-full"
      style={{ backgroundColor }}
    >
      <p className='text-sm font-semibold' style={{ color: textcolor }}>{category}</p>
    </div>
  );
}

export default Chip;
