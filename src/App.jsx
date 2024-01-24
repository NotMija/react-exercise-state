import { useState } from 'react'
import './App.jsx'

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
          <li key={index}>{state}</li>
        ))}
      </ul>

    </div>
  );
}

export default AddButtom;