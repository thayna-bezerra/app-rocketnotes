import { Link } from 'react-router-dom';

import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Form } from "./style";

export function New() {
  return(
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título"/>
          <Textarea placeholder="Observações"/>

          <Section title="Links Úteis">
            <NoteItem value="https://github.com/thayna-bezerra"/>
            <NoteItem isNew placeholder="Novo Link"/>
          </Section>

          <Section title="Marcadors">
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem isNew placeholder="Nova Tag"/>            
            </div>
          </Section>

        <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
}