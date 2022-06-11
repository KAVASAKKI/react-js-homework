import { Container } from 'components/Container';
import { RegisterForm } from 'components/RegisterForm';
import { Section } from 'components/Section';

export default function RegisterPage() {
  return (
    <Container size={{ width: '380px' }}>
      <Section color="teal" title="Registration">
        <RegisterForm />
      </Section>
    </Container>
  );
}
