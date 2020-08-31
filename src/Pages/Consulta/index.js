import React, { useState, useEffect } from 'react'

export default function Login() {
	const [bruto, setBruto] = useState('')
	const [total, setTotal] = useState('')

	let inss = 0
	let irpf = 0

	if (bruto <= 1693.72) {
		inss = bruto * 0.08
	} else if (bruto >= 1693.73 && bruto <= 2822.9) {
		inss = bruto * 0.09
	} else if (bruto >= 2822.91 && bruto <= 5645.8) {
		inss = bruto * 0.11
	}

	if (bruto >= 1903.99 && bruto <= 2826.65) {
		irpf = (bruto - inss) * 0.075 - 142.8
	} else if (bruto >= 2826.66 && bruto <= 3751.05) {
		irpf = (bruto - inss) * 0.15 - 354.8
	} else if (bruto >= 3751.06 && bruto <= 4664.68) {
		irpf = (bruto - inss) * 0.225 - 636.13
	} else if (bruto >= 4664.68) {
		irpf = (bruto - inss) * 0.275 - 869.36
	}
	try {
		useEffect(() => {
			if (bruto >= 1045) {
				setTotal(bruto - inss - irpf)
			} else {
				setTotal(0)
			}
		}, [bruto, inss, irpf])
	} catch ({ response }) {
		if (response.status === 400) {
			alert('teste')
		}
	}

	return (
		<>
			<p>Consulta Empregado</p>
			<input
				className="input"
				type="number"
				id="bruto"
				placeholder="Digite o salario bruto"
				value={bruto}
				onChange={event => setBruto(event.target.value)}
			/>
			<input
				className="input"
				type="number"
				id="bruto"
				disabled
				value={total}
				onChange={event => setTotal(event.target.value)}
			/>
			<li className="textDanger">OBS: O Salario Bruto Deve Ser Maior Que O Salário Mínimo </li>
		</>
	)
}
