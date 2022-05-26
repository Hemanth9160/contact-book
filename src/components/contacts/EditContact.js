import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory} from "react-router-dom"
import {getContact, updateContact } from '../../redux/actions/contactAction';
import { useParams } from 'react-router-dom';
const EditContact = () => {
    let {id}=useParams();
    let history=useHistory();
    
    const dispatch=useDispatch();
    const contact=useSelector((state)=>state.contact.contact);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("")
    useEffect(()=>{
        if(contact !=null){
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
        }
        dispatch(getContact(id));
    },[contact]);
    const onUpdateContact=(e)=>{
        e.preventDefault();
        const update_contact=Object.assign(contact,{
            name:name,
            phone:phone,
            email:email,
        });
        console.log(update_contact);
        dispatch(updateContact(update_contact));
        history.push('/');

    }
  return (
      <div className='container-sm'>
          
      <div className='card border-0 shadow'>
          <div className='card-header'>Edit Contact</div>
          <div className='card-body mt-4'>
              <form onSubmit={(e)=>onUpdateContact(e)}>
                  <div className='form-group mb-3'>
                      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-control ' placeholder='enter your name' required/>
                  </div>
                  <div className='form-group mb-3'>
                      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control ' placeholder='enter your Email' required/>
                  </div>
                  <div className='form-group mb-3'>
                      <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className='form-control ' placeholder='enter your Number' required/>
                  </div>
                  <button type="submit" className="btn btn-warning">Update Contact</button>
              </form>
          </div>
      </div>
      </div>
  )
}

export default EditContact