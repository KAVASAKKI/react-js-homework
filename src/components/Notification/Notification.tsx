import { Message } from './Notification.styled';

interface Props {
  message: string;
}

const Notification = ({ message }: Props) => <Message>{message}</Message>;

export default Notification;
