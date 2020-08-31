import React, { useState } from 'react'
import api from '../../services/api'

export default function Users({ history }) {
	const [username, setUsername] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	async function handleSubmit(event) {
		event.preventDefault()

		try {
			if (username && name && password) {
				await api.post('/users', {
					username,
					name,
					password
				})

				history.push('/')
			} else {
				alert('Preencha os campos!')
			}
		} catch ({ response }) {
			if (response.status === 400) {
				alert('Erro!')
			}
		}
	}

	return (
		<>
			<p>Cadastrar</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="Username" />
				<input
					type="text"
					id="username"
					placeholder="Digite Seu Username"
					value={username}
					onChange={event => setUsername(event.target.value)}
				/>
				<label htmlFor="Name" />
				<input
					type="text"
					id="name"
					placeholder="Digite seu Nome"
					value={name}
					onChange={event => setName(event.target.value)}
				/>

				<label htmlFor="Password" />
				<input
					type="password"
					id="password"
					placeholder="Digite sua Senha"
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>
				<button className="botao" type="submit">
					Cadastrar
				</button>
			</form>
		</>
	)
}
