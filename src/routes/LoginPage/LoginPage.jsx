import { Container } from 'components/Container';
import { LoginForm } from 'components/LoginForm';
import { Section } from 'components/Section';

export default function LoginPage() {
  return (
    <Container size={{ width: '380px' }}>
      <Section color="teal" title="Login in">
        <LoginForm />
      </Section>
    </Container>
  );
}
