import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Register.css'
function Register() {
	const history = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:9000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			alert('Register Success')
			history('/login')
		}
	}

	return (
		<div class = "container">
			<h1>Register</h1>
			<form onSubmit={registerUser}>
			<label for="username"><b>Username</b></label>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Enter Username"
				/>
				<br />
				<label for="email"><b>Email</b></label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Enter Email"
				/>
				<br />
				<label for="password"><b>Password</b></label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Enter Password"
				/>
				<br />
				<input type="submit" class="registerbutton" value="Register" />

				<div class="signin">
    				<p>Already have an account? <a href="/login">Sign in</a></p>
  				</div>
			</form>
		</div>
	)
}

export default Register
