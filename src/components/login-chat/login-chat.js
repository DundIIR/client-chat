import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

const LoginChat = ({ joinChatRoom }) => {
	const [userName, setUserName] = useState()
	const [chatRoom, setChatRoom] = useState()

	return (
		<Form
			onSubmit={e => {
				e.preventDefault()
				joinChatRoom(userName, chatRoom)
			}}>
			<Row className="px-5 my-5">
				<Col sm={12}>
					<Form.Group>
						<Form.Control placeholder="Ник в чате" onChange={e => setUserName(e.target.value)}></Form.Control>
						<Form.Control placeholder="Название чата" onChange={e => setChatRoom(e.target.value)}></Form.Control>
					</Form.Group>
				</Col>
				<Col sm={12}>
					<hr />
					<Button variant="success" type="submit">
						Войти
					</Button>
				</Col>
			</Row>
		</Form>
	)
}

export default LoginChat
