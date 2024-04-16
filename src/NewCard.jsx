import { useState } from 'react'
import './TodoCard.css'


function NewCard({addCard}) {

  const [title, setTitle] = useState('');
  const [color, setColor] = useState('white');
  const [details, setDetails] = useState('');
  const [isChecked, setIsChecked] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addCard({
      title,
      details,
      isChecked,
      color
    });

    setTitle('');
    setDetails('');
  };

return (
    <div className="todoCard">
      <form onSubmit={handleSubmit}>
        <p className="row todoHeader">
          <input className="newInput" type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)} />
        </p>

        <p className="row">
          <textarea className="todoText" value={details} 
              onChange={(e) => setDetails(e.target.value)}  
          ></textarea>
        </p>

        <p className="row todoFooter">
          <button type="submit">Add Card</button>
        </p>
      </form>
    </div>
  );
}

export default NewCard