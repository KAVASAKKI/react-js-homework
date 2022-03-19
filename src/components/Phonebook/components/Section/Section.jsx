import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
