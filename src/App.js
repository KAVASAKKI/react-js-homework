import { Routes, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import Phonebook from 'components/Phonebook';
import { WelcomePage } from 'routes/WelcomePage';
import { RegisterPage } from 'routes/RegisterPage';
import { LoginPage } from 'routes/LoginPage';

export default function App() {
  return (
    <>
      <AppBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/contacts" element={<Phonebook />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  );
}
