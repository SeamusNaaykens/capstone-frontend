import './Login.scss'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <div className='login__container'>
                <h1 className='login__form-heading'>Welcome back!</h1>
                <p className='login__form-directions'>Enter your login details below to continue or if you are new click <Link to={'/addProfile'}>sign up</Link> for an account here</p>
                <form className='login__form'>
                    <div className='login__input-container'>
                        <h2 className='login__input-heading'>Username</h2>
                        <input
                            className='login__input'
                            type='text'
                            label='username'
                            name='username'
                            id='username'
                            placeholder='Enter your username here'>
                        </input>
                    </div>
                    <div className='login__input-container'>
                        <h2 className='login__input-heading'>Email</h2>
                        <input
                            className='login__input'
                            type='text'
                            label='email'
                            name='email'
                            id='email'
                            placeholder='Enter your email here'>
                        </input>
                    </div>
                    <div className='login__input-container'>
                        <h2 className='login__input-heading'>Password</h2>
                        <input
                            className='login__input'
                            type='password'
                            label='password'
                            name='password'
                            id='password'
                            placeholder='Enter your password here'>
                        </input>
                    </div>
                    <div className='login__button-container'>
                        <Link to='/' className='login__button--2'>CANCEL</Link>
                        <button className='login__button--1'>LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login