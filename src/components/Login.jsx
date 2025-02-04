
import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { firestore } from '../firebase'; // Ensure correct import

function Login() {
  const [userdata, setUserdata] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const usersCollection = collection(firestore, "users");

  const handleLogin = async () => {
    try {
      // Query Firestore to check if email exists
      const q = query(usersCollection, where("email", "==", userdata.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0].data(); // Get first matching user

        // Check password
        if (userDoc.password === userdata.password) {
          alert("Login Successful!");
          navigate('/Home'); // Redirect to home page
        } else {
          alert("Incorrect password. Please try again.");
        }
      } else {
        alert("Email not registered. Please sign up.");
        navigate('/Register'); // Redirect to registration page
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <MDBBtn floating size='md' tag='a' className='me-2'><MDBIcon fab icon='facebook-f' /></MDBBtn>
            <MDBBtn floating size='md' tag='a' className='me-2'><MDBIcon fab icon='twitter' /></MDBBtn>
            <MDBBtn floating size='md' tag='a' className='me-2'><MDBIcon fab icon='linkedin-in' /></MDBBtn>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' type='email' value={userdata.email} onChange={(e) => setUserdata({ ...userdata, email: e.target.value })} size="lg" />
          <MDBInput wrapperClass='mb-4' label='Password' type='password' value={userdata.password} onChange={(e) => setUserdata({ ...userdata, password: e.target.value })} size="lg" />

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={handleLogin}>Login</MDBBtn>
            <Link to={'/Register'}>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <span className="link-danger">Register</span></p>
            </Link>
          </div>
        </MDBCol>
      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2025. All rights reserved.
        </div>
        <div>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}><MDBIcon fab icon='facebook-f' size="md" /></MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}><MDBIcon fab icon='twitter' size="md" /></MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}><MDBIcon fab icon='google' size="md" /></MDBBtn>
          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}><MDBIcon fab icon='linkedin-in' size="md" /></MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Login;
