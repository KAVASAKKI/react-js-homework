import { Feedback, Phonebook } from 'components';

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
