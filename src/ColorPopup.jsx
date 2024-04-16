import React from 'react';
import { useEffect } from 'react';
import './TodoCard.css'

function ColorPopup({colors, selected, onClose, onSelect, show}) {

  return (
    <div className={show}>
      <div className="grid-container">
      {colors.map(color => (
        <ColorOption  
          key={color}
          color={color} 
          active={color === selected}
          onClick={() => onSelect(color)}  
        />
      ))}
      </div>
    </div>
  );
}

function ColorOption({color, active, onClick}) {
  return (
    <div
      className={active ? 'active color-option' : 'color-option'}
      style={{backgroundColor: color}}
      onClick={onClick}
    />
  );
}

export default ColorPopup