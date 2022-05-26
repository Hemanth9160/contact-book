import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';


const Login = () => {
    const history=useHistory();
    const [loginId,setLoginId]=useState("");
    const [password,setPassword]=useState("");
    

    const login = async (e) => {
        e.preventDefault();
        if(loginId=="vis@gmail.com" && password=="123"){
            history.push('/');
        }
        else{
            alert("Please enter correct details");
        }
      }
    
    
  return (
      <div className='container-sm'>
          
      <div className='card border-0 shadow'>
          <div className='card-header'>Login Page</div>
          <div className='card-body mt-4'>
              <form>
                  
                  <div className='form-group mb-3'>
                      <input type="loginId" value={loginId} onChange={(e)=>setLoginId(e.target.value)} className='form-control ' placeholder='enter your loginId' required/>
                  </div>
                  <div className='form-group mb-3'>
                      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control ' placeholder='enter your Password' required/>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
              </form>
          </div>
      </div>
      </div>
  )
}

export default Login