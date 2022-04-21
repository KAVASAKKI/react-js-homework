import { Container, Message } from 'components';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => (
  <Container>
    <Message size="75pt" children="RUSSIAN WARSHIP GO FUCK YOURSELF" />
    <div className={styles.icon} />
  </Container>
);
