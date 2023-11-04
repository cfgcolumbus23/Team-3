import { useState } from 'react'
import { useSignup } from "../hooks/useSignup"
const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(username, password)
        await signup(username, password)
        if (signup) {
            window.location.href = '/';
        }
    }
    return (
        <form className = "signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <label>Username:</label>
            <input type = "text" onChange={(e) => setUsername(e.target.value)} value = {username}/>
            <label>Password:</label>
            <input type = "password" onChange={(e) => setPassword(e.target.value)} value = {password}/>
            <button disabled = {isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup
