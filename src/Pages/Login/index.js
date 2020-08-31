import React, { useState } from 'react'
import api from '../../services/api'

export default function Login({ history }) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	async function handleSubmit(event) {
		event.preventDefault()

		try {
			await api.post('/sessions', {
				username,
				password
			})

			history.push('/Consulta')
		} catch ({ response }) {
			if (response.status === 400) {
				alert('Usuário e/ou senha incorretos!')
			}
		}
	}

	async function handleCreate() {
		history.push('/users')
	}

	return (
		<>
			<p>Login</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="Username" />
				<input
					type="text"
					id="username"
					placeholder="Digite Seu Username"
					value={username}
					onChange={event => setUsername(event.target.value)}
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
					Entrar
				</button>
				<button className="botao" type="button" onClick={() => handleCreate()}>
					Cadastrar
				</button>
			</form>
		</>
	)
}
