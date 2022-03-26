import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { ImageFinder, Modal, Searchbar } from './components';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    image: null,
  };

  handleSubmitForm = searchQuery => {
    this.setState({ searchQuery });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  getImageUrl = e => {
    const image = e.target.dataset.source;
    this.setState({ image });
    this.toggleModal();
  };

  render() {
    const { searchQuery, showModal, image } = this.state;

    return (
      <div className="container">
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageFinder searchQuery={searchQuery} getImageUrl={this.getImageUrl} />

        {showModal && (
          <Modal
            imageURL={image}
            onClose={this.toggleModal}
            alt={searchQuery}
          />
        )}

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}
