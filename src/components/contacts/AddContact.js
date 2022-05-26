import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/store';
import shortid  from 'shortid';
import { useHistory} from "react-router-dom"
import { addContact } from '../../redux/actions/contactAction';
const AddContact = () => {
    const history=useHistory();
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const createContact= e =>{
        e.preventDefault();
        const new_contact={
            id:shortid.generate(),
            name:name,
            email:email,
            phone:phone,
        }
        dispatch(addContact(new_contact));
        history.push('/');
    }
  return (
      <div className='container-sm'>
          
      <div className='card border-0 shadow'>
          <div className='card-header'>Add Contact</div>
          <div className='card-body mt-4'>
              <form onSubmit={(e)=>createContact(e)}>
                  <div className='form-group mb-3'>
                      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-control ' placeholder='enter your name' required/>
                  </div>
                  <div className='form-group mb-3'>
                      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control ' placeholder='enter your Email' required/>
                  </div>
                  <div className='form-group mb-3'>
                      <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className='form-control ' placeholder='enter your Number' required/>
                  </div>
                  <button type="submit" className="btn btn-primary">Create Contact</button>
              </form>
          </div>
      </div>
      </div>
  )
}

export default AddContact