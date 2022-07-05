import { Title } from './Section.styled';

interface Props {
  color?: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ color = 'black', title, children }: Props) => (
  <>
    <Title color={color}>{title}</Title>
    {children}
  </>
);

export default Section;
