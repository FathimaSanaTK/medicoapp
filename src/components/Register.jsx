
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { firestore } from '../firebase';
import { addDoc, collection, getDocs, query, where } from '@firebase/firestore';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Register() {
  
  const [userinfo, setUserinfo] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  
  const usersCollection = collection(firestore, "users");

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      // Query Firestore to check if email already exists
      const q = query(usersCollection, where("email", "==", userinfo.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("This email is already registered. Please log in instead.");
        return;
      }

      // If email is not found, proceed with registration
      await addDoc(usersCollection, userinfo);
      setUserinfo({ username: "", email: "", password: "" });
      alert("Registration successful!");
      navigate('/Login');

    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' 
      style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>

          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' 
            value={userinfo.username} 
            onChange={(e) => setUserinfo({...userinfo, username: e.target.value})} 
          />
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' 
            value={userinfo.email} 
            onChange={(e) => setUserinfo({...userinfo, email: e.target.value})} 
          />
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' 
            value={userinfo.password} 
            onChange={(e) => setUserinfo({...userinfo, password: e.target.value})} 
          />

          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree to all statements in Terms of service' />
          </div>

          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSave}>
            Register
          </MDBBtn>

          <Link to={'/Login'}>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Already have an account? <span className="link-danger">Login</span>
            </p>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
