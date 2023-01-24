import {Container, Links, Content} from './style';

import {Header} from '../../components/Header'
import {Button} from '../../components/Button'
import {Section} from '../../components/Section'
import {Tag} from '../../components/Tag'
import {ButtonText} from '../../components/ButtonText'

export function Details(){
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate impedit, vitae sapiente sunt vero recusandae quidem porro enim, labore animi dolorum repellat sit nisi error optio deleniti iusto dolore!</p>

          <Section title="Links Úteis"> 
            <Links>
              <li> <a href="https://www.linkedin.com/in/thayna-bezerra-a44a23181/" target="_blank">https://www.linkedin.com/in/thayna-bezerra/</a></li>
              <li> <a href="https://www.linkedin.com/in/thayna-bezerra-a44a23181/" target="_blank">https://www.linkedin.com/in/thayna-bezerra/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}