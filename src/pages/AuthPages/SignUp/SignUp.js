import React, { useState, } from 'react'
import './SignUp.scss'
import { signInWithPopup, sendEmailVerification, GoogleAuthProvider} from 'firebase/auth'
import { auth } from '../../../firebase'
import {useHistory} from 'react-router-dom'

const SignUp = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordconfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')
  const googleProvider = new GoogleAuthProvider()

  const redirect = () => {
    history.replace('/')
  }
  const handleGoogleSignUp = async (redirect) => {
        try {
            let res = await signInWithPopup(auth, googleProvider)
            console.log(res)
            if (res) {
                    redirect()
                setError('Verification email has been sent to your email')
                await sendEmailVerification(auth.currentUser)
                }
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }
  console.log(error)
    return (
    <div className='signup'>
        <div className = 'signUp-container'>
            <div className='terms'>
                <div className='sign-li-1'>
                    <h3> Benefits of being a member</h3>
                </div>
                <div className='sign-ul'>
                    <ul>
                        <div className='sign-li'>
                            <li> Find something to watch on your subscribed streaming services</li>
                        </div>
                        <div className='sign-li'>
                            <li>Log the movies and TV shows you have watched</li>
                        </div>
                        <div className='sign-li'>
                            <li>Keep track of your favourite movies and Tv shows and get recommendations from them</li>
                        </div>
                        <div className='sign-li'>
                            <li>Build and maintain a personal watchlist</li>
                        </div>
                        <div className='sign-li'>
                            <li>Build custom mixed lists (Movies and Shows)</li>
                        </div>
                        <div className='sign-li'>
                            <li>Take part in movie and TV discussions</li>
                        </div>
                        <div className='sign-li'>
                            <li>Contribute to, and improve the information in our database</li>
                        </div>
                    </ul>
                </div>
            </div>
            <section className='AuthForms'>
                <h2> Sign up for an account </h2>
                <span> Signing up for an account is free and easy, Fill out the form below to get started.</span>
            <div className='auth1form'>
              <form>
                    <h4>
                        Username
                    </h4>
                    <input type='text' />
                    <h4>
                        Email
                    </h4>
                    <input type='email' value = {email} onChange = {(e) => setEmail(e.target.value)} />
                    <h4>
                        Password (4 characters minimum)
                    </h4>
                    <input type='password' value = {password} onChange = {(e) => setPassword(e.target.value)} />
                    <h4>
                        Confirm Password
                    </h4>
              <input type='password' value={ passwordconfirm} onChange = {(e) => setPasswordConfirm(e.target.value)}/>
              </form>
                </div>
                <p className = 'term-agr'>
                    By clicking the Sign Up button below, I certify that i have read and agreed to the <span> ChillfliX </span> terms of use and privacy policy.
                </p>
                <button className='btn-sign' onClick={() => handleGoogleSignUp(redirect)}>Sign Up</button>
            </section>
        </div>
    </div>
        
    )
}

export default SignUp
