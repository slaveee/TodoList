import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"

const AuthPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email === "test@test.com" && password === "1234") {
            dispatch(login("fake-jwt-token"))
            navigate("/")
        }

    }


    return <form className="auth-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="email" value={email} onChange={event => {
            setEmail(event.target.value)
        }} />
        <input type="password" placeholder="password" value={password} onChange={(event) => {
            setPassword(event.target.value)
        }} />
        <button type="submit" className="btn">
            Submit
        </button>
    </form>
}

export default AuthPage