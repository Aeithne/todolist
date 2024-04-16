import { useState } from 'react'
import './TodoCard.css'
import ColorPopup from './ColorPopup.jsx'

import { 
  FaTrash, 
  FaPen,
  FaCheck, 
  FaPalette,
  FaStar
} from 'react-icons/fa'

function TodoCard({card, onCheck, onDelete}) {

    const [selectedColor, setSelectedColor] = useState(card.color);
    const [checked, setChecked] = useState(card.isChecked);
    const [showPopup, setShowPopup] = useState(false);
    const [title, setTitle] = useState(card.title);
    const [details, setDetails] = useState(card.details);
    const [isEditing, setEditing] = useState(false)
    
    const COLORS = [
        'white',
        '#e74c3c', // Ruby Red
        '#3498db', // Bright Blue
        '#1abc9c', // Turquoise 
        '#f39c12', // Orange  
        '#9b59b6', // Amethyst
        '#2ecc71', // Emerald
        '#16a085', // Dark Cyan
        '#27ae60', // Jungle Green
        '#2980b9', // Blue Violet
        '#8e44ad', // Purple
        '#d35400', // Carrot Orange
      ]; 

      const handleEvent = (event) => {
        event;

        card.color = selectedColor;
        card.title = title;
        card.details = details;
      }

      const handleCheck = () => {
        card.color = selectedColor;
        card.title = title;
        card.details = details;
        
        onCheck({...card, isChecked: !card.isChecked});
        // Need to update local state
        setChecked(!checked);
      }
  
    return (
      <div className="todoCard" style={{backgroundColor: selectedColor}}>
        
        <p className="row todoHeader button-group">
  
        {isEditing ? (
            <input className="todoInput" type="text"
              value={title}
              onChange={e => handleEvent(setTitle(e.target.value))} 
            />
          ) : (
            <div className="todoInput title text">{title}</div>  
          )}
  
          {checked ?
          <FaStar className="icon right-btn checked" onClick={handleCheck} /> :
          <FaStar className="icon text right-btn" onClick={handleCheck} />
        }
  
        </p>
  
        <p className="row">
        {isEditing ? (

        <textarea className="todoText"
                    value={details}
                    onChange={e => handleEvent(setDetails(e.target.value))}  
                  />
        ) : (
            <div className="todoText text">{details}</div>  
          )}
        </p>
  
        <p className="row todoFooter">
            <div className="button-group">
              <FaPen className="icon text left-btn" onClick={() => setEditing(!isEditing)}/>
              <FaPalette className="icon text left-btn" onClick={() => setShowPopup(!showPopup)}/>

              <FaTrash className="icon text right-btn" onClick={() => onDelete(card.id)}/>  
            </div>
            <ColorPopup
                show={showPopup ? 'popup show' : 'popup'}
                colors={COLORS}
                selected={selectedColor}
                onClose={() => setShowPopup(false)} 
                onSelect={handleEvent(setSelectedColor)}
            />
        </p>
  
      </div>
    );
  }
  
  export default TodoCard