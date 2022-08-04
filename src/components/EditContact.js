import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function EditContact() {

    const { id } = useParams();
    const contacts = useSelector(state => state)
    const currentContact = contacts.find(contact => contact.id === parseInt(id))
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
       if(currentContact){
        setName(currentContact.name)
        setEmail(currentContact.email)
        setNumber(currentContact.number)
       }
    },[currentContact])

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(
            (contact) => contact.id !== parseInt(id) && contact.email === email && email);
        const checkNumber = contacts.find(
            (contact) => contact.id !== parseInt(id) && contact.number === parseInt(number) && number);
        
        if(!name || !email || !number){
            return toast.warning("Please fill in all fields")
        }
        if(checkEmail){
            return toast.error("This email is already exists")
        }
        if(checkNumber){
            return toast.error("This number is already exists")
        }

        const data = {
            id: parseInt(id),
            name,
            email,
            number
        }
        dispatch({type: 'UPDATE_CONTACT', payload:data})
        toast.success("Student updated successfully")
        navigate('/')
    }
    

    return (
        <div className='container'>
            {
                currentContact ?
                    <div className="row">
                        <h4 className='text-center my-5 display-2'>Edit Contact {id}</h4>
                        <div className="col-md-6 shadow mx-auto p-5">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input type="text" placeholder='Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value) }
                                        className='form-control' />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="email" placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='form-control' />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="number" placeholder='Phone Number'
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                        className='form-control' />
                                </div>
                                <div className="form-group mt-3 d-flex justify-content-between align-items-center">
                                    <input type="submit" className='btn btn-dark' value="Update Student" />
                                    <Link to="/" className='btn btn-danger'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div> : (
                        <h4 className='text-center my-5 display-2'>Student Contact with {id} id not exists</h4>
                    )
            }
        </div>
    )
}

export default EditContact;
