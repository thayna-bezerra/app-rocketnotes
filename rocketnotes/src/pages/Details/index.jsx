import {Container} from './style';
import {Button} from '../../components/Button'

export function Details(){
  return(
    <Container>
      <h1> Hello World!</h1>
      <span> Thayna </span>

      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}