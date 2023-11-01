import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { signIn } from 'next-auth/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'
// import { api } from '@/lib/axios'
// import { AxiosError } from 'axios'
import { ConnectBox, ConnectItem } from './styles'

export default function Register() {
  // async function handleRegister() {

  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos evendos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
