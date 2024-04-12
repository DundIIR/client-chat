import { Row, Col, Container } from 'react-bootstrap'
import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import LoginChat from './components/login-chat/login-chat'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import ChatRoom from './components/chat-room/chat-room'

function App() {
	const [connection, setConnection] = useState()
	const [messages, setMessages] = useState([])

	const joinChatRoom = async (userName, chatRoom) => {
		try {
			const connectionData = {
				userName: userName,
				chatName: chatRoom,
			}

			const connection = new HubConnectionBuilder()
				.withUrl('http://localhost:5062/chat')
				.configureLogging(LogLevel.Information)
				.build()

			connection.on('JoinLogChatRoom', (userName, chatRoom) => {
				setMessages(messages => [...messages, { userName: userName, message: chatRoom }])
				console.log('message-server: ', chatRoom)
			})

			connection.on('ReceiveServerMessage', (userName, message) => {
				setMessages(messages => [...messages, { userName, message }])
				console.log(messages)
			})

			await connection.start()
			console.log(userName, chatRoom)
			await connection.invoke('JoinLogChatRoom', connectionData)

			setConnection(connection)
		} catch (e) {
			console.log(e)
		}
	}

	const sendMessage = async message => {
		try {
			await connection.invoke('SendMessage', message)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div>
			<main>
				<Container>
					<Row className="px-5 my-5">
						<Col sm="12">
							<h1 className="font-weight-light">Привет, ты там где нужно</h1>
						</Col>
					</Row>
					{!connection ? (
						<LoginChat joinChatRoom={joinChatRoom}></LoginChat>
					) : (
						<ChatRoom messages={messages} sendMessage={sendMessage}></ChatRoom>
					)}
				</Container>
			</main>
		</div>
	)
}

export default App
