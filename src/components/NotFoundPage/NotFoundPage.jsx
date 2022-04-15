import { Container, Message } from 'components';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <Container>
      <Message size="75pt" children="RUSSIAN WARSHIP GO FUCK YOURSELF" />
      <div className={styles.icon} />
    </Container>
  );
}
