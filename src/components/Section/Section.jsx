import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ color = 'black', title, children }) => (
  <>
    <Title color={color}>{title}</Title>
    {children}
  </>
);

Section.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
