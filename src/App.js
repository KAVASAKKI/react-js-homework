import React from 'react';
import Feedback from 'components/Feedback/index.jsx';
import Phonebook from 'components/Phonebook/index.jsx';

export default function App() {
  return (
    <>
      <div className="container">
        <Feedback />
      </div>

      <div className="container">
        <Phonebook />
      </div>
    </>
  );
}
