import { useState } from 'react'
import './App.css'

function AddButtom() {
  const [state, setState] = useState([]);
  const [newState, setNewState] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const postNew = newState.trim();

      if (postNew !== '') {
        setState([...state, postNew]);

        setNewState('');
      }
    }
  };

  const deleteText = (index) => {
    const updatedText = [...state];
    updatedText.splice(index, 1);
    setState(updatedText);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add TO DO"
        value={newState}
        onChange={(e) => setNewState(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {state.map((state, index) => (
          <li key={index}>{state}
          <button className='deleteButton' onClick={() => deleteText(index)}>X</button></li>
        ))}
      </ul>

    </div>
  );
}

export default AddButtom;