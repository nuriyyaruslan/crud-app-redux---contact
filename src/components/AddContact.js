import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function AddContact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(contact => contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number);
        
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
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }
        dispatch({type: 'ADD_CONTACT', payload:data})
        toast.success("Student added successfully")
        navigate('/')
    }


    return (
        <div className='container'>
            <div className="row">
                <h4 className='text-center my-5 display-2'>Add Contact</h4>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input type="text" placeholder='Name' value={name}
                            className='form-control' onChange={(e) => setName(e.target.value) } />
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" placeholder='Email' value={email} 
                            className='form-control' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <input type="number" placeholder='Phone Number' value={number}
                            className='form-control' onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <div className="form-group mt-3">
                            <input type="submit"
                            className='btn btn-block btn-dark' value="Add Student" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact;
