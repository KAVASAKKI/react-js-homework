import { useState } from 'react';
import { ImageFinder, Modal, Searchbar } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function getImageUrl(e) {
    const image = e.target.dataset.source;
    setImage(image);
    toggleModal();
  }

  return (
    <div className="container">
      <Searchbar onSubmit={setSearchQuery} />
      <ImageFinder searchQuery={searchQuery} getImageUrl={getImageUrl} />

      {showModal && (
        <Modal imageURL={image} onClose={toggleModal} alt={searchQuery} />
      )}

      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
}
