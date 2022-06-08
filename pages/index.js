import Head from 'next/head'
import { Button, Input, Heading } from '@mauricioft/components'

export default function Home() {
  return (
		<div>
      <Heading>Cuentame sobre ti</Heading>
      <Input placeholder='Nombre' />
      <Input placeholder='Apellidos' />
      <Input placeholder='Correo electrónico' />
      <Button type='primary'>Completa tu perfil</Button>
      <Button type='tertiary'>Saltar este paso por ahora</Button>
    </div>
  )
}
