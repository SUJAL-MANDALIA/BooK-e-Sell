import React, { useState } from 'react'
import './myStyles.css'

function LoginForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event) =>{
        alert(`Username : ${username} Email : ${email} Password : ${password}`)
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className='inputTags'>Username : </label>
                <input type="text" value={username} onChange={handleUsername} /><br />
                <label className='inputTags'>Email : </label>
                <input type="email" value={email} onChange={handleEmail} /><br />
                <label className='inputTags'>Password : </label>
                <input type="password" value={password} onChange={handlePassword} />
                <div>
                <button type='submit'>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
