import { FiPlus, FiSearch } from 'react-icons/fi';
import {Container, Brand, Menu, Search, Content, NewNote} from './style';

import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header/>

      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="NodeJS"/></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo Título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React', 
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'rocketseat'}
            ]
          }}
          />
        </Section>
      </Content>

      <NewNote>
        <FiPlus/>
        Criar Nota
      </NewNote>

    </Container>
  )
}