import React, { useState, ChangeEvent } from 'react';

const App: React.FC = () => {
  const [number, setNumber] = useState<number | undefined>(undefined);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputNumber = parseInt(event.target.value);
    setNumber(inputNumber * 2 || undefined);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div>
        <input type="number" onChange={handleInputChange} />
        <p>{number !== undefined ? `Double: ${number}` : 'Enter a number'}</p>
      </div>
    </div>
  );
};

export default App;



  

