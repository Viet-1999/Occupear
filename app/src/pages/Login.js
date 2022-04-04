import { useState } from 'react'
import '../Login.css'
function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:9000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div class = "container">
			<h1>Login</h1>
			<form onSubmit={loginUser}>
			<label for="email"><b>Email</b></label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Enter Email"
				/>
				<br />
				<label for="psw"><b>Password</b></label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Enter Password"
				/>
				<br />
				<input type="submit" class = "loginbutton" value="Login" />
				<div class="register">
    				<p>Don't Have an Account? Register Here</p>  
					<p><a href="/register">Register</a></p>
  				</div>
			</form>
		</div>
	)
}

export default Login
