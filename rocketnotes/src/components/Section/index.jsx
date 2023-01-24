import { Container } from './style';

export function Section({ title, children }){
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
}