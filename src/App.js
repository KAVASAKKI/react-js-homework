import React from 'react';
import Feedback from './bus/Feedback';
import Phonebook from './bus/Phonebook';

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
