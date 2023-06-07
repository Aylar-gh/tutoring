import React, { useState } from 'react';

const App: React.FC = () => {
  const [number, setNumber] = useState<number | undefined>(undefined);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumber = parseInt(event.target.value);
    setNumber(inputNumber * 2);
  };

  return (
    <div>
      <input type="number" onChange={handleInputChange} />
      <p>{number !== undefined ? `Double: ${number}` : 'Enter a number'}</p>
    </div>
  );
};

export default App;

