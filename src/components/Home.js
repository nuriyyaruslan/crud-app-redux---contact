import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function Home() {

    const contacts = useSelector(state => state);
    
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload:id })
        toast.success("Contact deleted sucessfully")
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 my-5 text-end">
                    <Link to="/add" className='btn btn-outline-dark'>
                        Add Contact
                    </Link>
                </div>
                <div className="col-md-10">
                    <h1>Welcome to React Redux Contact App</h1>
                    <table className='table table-hover mt-4'>
                        <thead className='text-white bg-dark text-center'>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact,id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td className='text-end edit-btns'>
                                            <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary">Edit</Link>
                                            <button type='button' className="btn btn-small btn-danger" onClick={() => deleteContact(contact.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
