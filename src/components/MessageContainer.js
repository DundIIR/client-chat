import { Table } from 'react-bootstrap'

const MessageContainer = ({ messages }) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Имя пользователя</th>
					<th>Сообщение</th>
				</tr>
			</thead>
			<tbody>
				{messages.map((msg, i) => (
					<tr key={i}>
						<td>{msg.userName}</td>
						<td>{msg.message}</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default MessageContainer
