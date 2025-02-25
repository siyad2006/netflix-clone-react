import React, { useState ,useEffect,useContext} from "react";
import './login.css'
import logo from '../../assets/netflix_react_assets/assets/logo.png'
import { login, signup } from '../../firebase'
// import { useNavigate } from "react-router-dom";


import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Login = () => {


    
    // const {loginAuth}=useContext(MyContext)
    // console.log('from loginAut',loginAuth)
    // const navigate=useNavigate()
    // useEffect(()=>{
    //     if(loginAuth==true){
    //         console.log('netered to login',loginAuth)
    //         navigate('/')
    //     }else{
    //         console.log('it is nrt loggened ')
    //     }
    // },[])
    

    const [SighnState, setSingnState] = useState('Sign In')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const user_auth=async (event)=>{
        
        console.log('entred to the sighnin component ')
        event.preventDefault();
        if(SighnState=='Sign In'){
            await login(email,password)
        }else{
           await signup(name,email,password) 
        }
    }
    return (
        <div className="login">
            <img src={logo} className="login-logo" alt="logo" />
            {/* <div className="login-form">
                <h1>Sighn in</h1>
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Your email" />
                <input type="password" placeholder="password" />
                <button>
                    Sighn in
                </button>
                <div className="form-help">
                    <div className="remember">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">remenber me </label>
                        <p>need help? </p>
                    </div>
                </div>
            </div> */}
            <div className="login-form">
                <h1>{SighnState}</h1>
                {/* {SighnState==='Sign Up'?<h1>Sign Up</h1>:<h1>Sign In</h1>}  */}
                {SighnState === 'Sign Up' ? <input type="text" placeholder="Your name" onChange={(e)=>setName(e.target.value)} value={name}/> : <></>}
                <form action="">

                    <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} placeholder="Your email" />
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} placeholder="Password" />

                    <button onClick={user_auth} type="submit">{SighnState}</button>

                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <p className="help-text">Need help?</p>
                    </div>

                    {/* New Login & Account Links */}
                    <div className="account-options">
                        {SighnState === 'Sign Up' ? <p>Already have an account? <span style={{ cursor: "pointer" }} onClick={() => setSingnState('Sign In')} >Login</span></p> :
                            <p>New here? <span style={{ cursor: "pointer" }} onClick={() => setSingnState('Sign Up')} >Create an account</span></p>

                        }

                    </div>
                </form>

            </div>

        </div>
    )
}

export default Login