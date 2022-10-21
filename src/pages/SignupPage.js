import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const SignupPage = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('')

    const history = useHistory()
    
    const onSignupClicked = async () => {

    }

    return (
        <div className="content-container">
            <h1>Sign up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input value={emailValue} onChange={e => setEmailValue(e.target.value)} type="text" placeholder="someone@gmail.com" />
            <input value={passwordValue} onChange={e => setPasswordValue(e.target.value)} type="password" placeholder="password" />
            <input value={confirmPasswordValue} onChange={e => setConfirmPasswordValue(e.target.value)} type="password" placeholder="password" />
            <hr/>
            <button disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue} onClick={onSignupClicked}>Sign uo</button>
            <button onClick={() => history.push('/login')}>Already have an account? Login</button>
        </div>
    )
}