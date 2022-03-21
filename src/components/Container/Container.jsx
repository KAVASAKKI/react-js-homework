import PropTypes from 'prop-types';
import { Wrapper } from './Container.styled';

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
