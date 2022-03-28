import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export default function Section({ color = 'black', title, children }) {
  return (
    <>
      <Title color={color}>{title}</Title>
      {children}
    </>
  );
}

Section.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
