


import React from 'react'
import Avatar from 'react-avatar'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../redux/actions/contactAction';

const Contact = ({ contact }) => {
    const dispatch=useDispatch();
    const { name, phone, email, id } = contact;
    return (
        <tr>
            <th scope="row"><Avatar name={name} size="30" round={true} /></th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>
                <div>
                    <Link to={`/contacts/edit/${id}`} >
                        <span className='btn btn-primary ml-auto'>Edit</span>
                    </Link>
                    {/* <Link to="/contacts/edit" > */}

                        <span className='btn btn-danger ml-auto' onClick={()=>dispatch(deleteContact(id))}>Delete</span>
                        {/* </Link> */}

                </div>
            </td>
        </tr>
    )
}

export default Contact