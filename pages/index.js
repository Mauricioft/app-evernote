import { useState } from 'react'
import Head from 'next/head'
import { Button, Input, Heading, Spacer } from '@mauricioft/components'

export default function Home() {
	const [formValue, setFormValue] = useState({})

	const onChange = key => event => {
		const value = event.target.value
		setFormValue({
			...formValue,
			[key]: value
		})
	}

  return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
      <Heading>Cuentame sobre ti</Heading>
			<Spacer.Horizontal size='md' />
      <Input
				type="text"
				value={formValue.firstname}
				onChange={onChange('firstname')}
				placeholder='Nombre'
			/>
			<Spacer.Horizontal size='sm' />
      <Input
				value={formValue.lastname}
				onChange={onChange('lastname')}
				placeholder='Apellidos'
			/>
			<Spacer.Horizontal size='sm' />
      <Input
				value={formValue.email}
				onChange={onChange('email')}
				placeholder='Correo electrónico'
			/>
			<Spacer.Horizontal size='lg' />
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Button type='primary'>Completa tu perfil</Button>
				<Spacer.Horizontal size='md' />
				<Button type='tertiary'>Saltar este paso por ahora</Button>
			</div>
    </div>
  )
}
