import { Heading, Avatar, Spacer, Card, Icon } from '@mauricioft/components'

export default function Home() {
  return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
		}}>
			<div style={{ display: 'flex' }}>
				<Avatar
					size='lg'
					src='https://placeimg.com/250/250/people'
				/>
				<Spacer.Vertical size='xs' />
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<Heading size='md'>Buenos d&iacute;as, Cristian</Heading>
					<Heading
						size='sm'
						color='primary'
					>
						¿C&oacute;mo quieres empezar?
					</Heading>
				</div>
			</div>
			<Spacer.Horizontal size='lg' />
			<Card
				size='lg'
				color='secondary'
			>
				Buscar un espacio para trabajar
			</Card>
			<Spacer.Horizontal size='md' />
			<Card
				size='lg'
				color='primary'
			>
				Iniciar una sesi&oacute;n de productividad
			</Card>
			<Spacer.Horizontal size='lg' />
			<Card size='sm'>
				<Icon
					type='angle-down'
					hasBackground
				/>
				<Spacer.Vertical size='xs' />
				<span>Maria ha hecho check-in en Factoria</span>
			</Card>
			<Spacer.Horizontal size='xs' />
			<Card size='sm'>
				<Icon
					type='angle-down'
					hasBackground
				/>
				<Spacer.Vertical size='xs' />
				<span>Maria ha hecho check-in en Factoria</span>
			</Card>
			<Spacer.Horizontal size='xs' />
			<Card size='sm'>
				<Icon
					type='angle-down'
					hasBackground
				/>
				<Spacer.Vertical size='xs' />
				<span>Maria ha hecho check-in en Factoria</span>
			</Card>
		</div>
  )
}
