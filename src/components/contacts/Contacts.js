import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Contact from './Contact';

const Contacts = () => {
    const history=useHistory();
    const contacts = useSelector(state => state.contact.contacts);

    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Avatar</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => (<Contact contact={contact} key={contact.id} />))
                    }


                </tbody>
            </table>
        </div>
    )
}

export default Contacts