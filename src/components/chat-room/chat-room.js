import { Col, Row } from 'react-bootstrap'
import MessageContainer from '../MessageContainer'
import SendMessageForm from '../SendMessage'

const ChatRoom = ({ messages, sendMessage }) => {
	console.log(typeof sendMessage)

	return (
		<div>
			<Row className="px-5 my-5">
				<Col sm={10}>
					<h2>ChatRoom</h2>
				</Col>
				<Col></Col>
			</Row>
			<Row className="px-5 my-5">
				<Col sm={12}>
					<MessageContainer messages={messages} />
				</Col>
				<Col sm={12}>
					<SendMessageForm sendMessage={sendMessage} />
				</Col>
			</Row>
		</div>
	)
}

export default ChatRoom
