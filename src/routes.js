import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Pages/Login'
import Users from './Pages/Users'
import Consulta from './Pages/Consulta'

export default function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Login} />
			<Route path="/users" component={Users} />
			<Route path="/consulta" component={Consulta} />
		</BrowserRouter>
	)
}
