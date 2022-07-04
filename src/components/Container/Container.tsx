import { Wrapper } from './Container.styled';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default Container;
