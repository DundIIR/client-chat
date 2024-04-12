import { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const SendMessageForm = ({ sendMessage }) => {
	const [msg, setMessage] = useState('')

	return (
		<Form
			onSubmit={e => {
				e.preventDefault()
				console.log(typeof sendMessage)
				sendMessage(msg)
				setMessage('')
			}}>
			<InputGroup className="mb-3">
				<InputGroup.Text>Чат</InputGroup.Text>
				<Form.Control onChange={e => setMessage(e.target.value)} value={msg} placeholder="Твое сообщение..." />
				<Button variant="primary" type="submit" disabled={!msg}>
					Отправить
				</Button>
			</InputGroup>
		</Form>
	)
}

export default SendMessageForm
