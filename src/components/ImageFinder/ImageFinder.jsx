import { Component } from 'react';
import { Loader, Button, ImageGallery } from '../../components';
import fetchImages from 'services/images-api';
import propTypes from 'prop-types';
import styles from './ImageFinder.module.css';

export default class ImageFinder extends Component {
  state = {
    page: 1,
    images: null,
    error: null,
    status: 'idle',
  };

  async componentDidUpdate(prevProps) {
    const prevSearch = prevProps.searchQuery.toLowerCase();
    const nextSearch = this.props.searchQuery.toLowerCase();

    if (prevSearch !== nextSearch) {
      this.setState({ status: 'pending', page: 1 });

      const data = await this.fetchData(nextSearch);

      if (!data.length) {
        return this.setState({
          status: 'rejected',
          error: `Not found images with name '${nextSearch}'`,
        });
      }

      this.setState({
        status: 'resolved',
        images: this.getImages(data),
      });
      this.scrollToBottom();
    }
  }

  fetchData = async (url, page = 1) => {
    try {
      return fetchImages(url, page);
    } catch (error) {
      this.setState({ status: 'rejected', error });
    }
  };

  loadMore = async () => {
    const nextSearch = this.props.searchQuery.toLowerCase();

    this.setState({ status: 'pending', page: (this.state.page += 1) });

    const data = await this.fetchData(nextSearch, this.state.page);

    this.setState(prevState => ({
      status: 'resolved',
      images: [...prevState.images, ...this.getImages(data)],
    }));

    this.scrollToBottom();
  };

  getImages = images => {
    return images.map(image => ({
      id: image.id,
      imageURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
    }));
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return (
        <div className={styles.container}>
          <h1>Please enter some bullshit</h1>
        </div>
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return (
        <div className={styles.container}>
          <h1>{error}</h1>
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery getImageUrl={this.props.getImageUrl} images={images} />
          <Button loadMore={this.loadMore} />

          <div
            style={{ float: 'left', clear: 'both' }}
            ref={el => {
              this.messagesEnd = el;
            }}
          ></div>
        </>
      );
    }
  }
}

ImageFinder.propTypes = {
  searchQuery: propTypes.string.isRequired,
  getImageUrl: propTypes.func.isRequired,
};
