

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen">
            {/* Navbar (Outside Background Image) */}
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand me-2">
                        <h3>MediCo</h3>
                    </a>

                    <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        <div className="d-flex align-items-center">
                            <button data-mdb-ripple-init type="button" className="btn btn-info px-3 me-2" onClick={() => navigate('Login')}>
                                Login
                            </button>
                            <button data-mdb-ripple-init type="button" className="btn btn-primary me-3" onClick={() => navigate('Register')}>
                                Sign up for free
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Background Image Container */}
            <div
                className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Overlay (Optional: for better readability) */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content (Above Background) */}
                <div className="relative z-10 max-w-4xl text-black">
                    <h1 className="text-6xl font-extrabold leading-tight">
                        Welcome to <span className="text-primary">MedEquip Store</span>
                    </h1>
                    <h4 className="mt-4 text-5xl font-extrabold leading-tight  text-black">
                        Your trusted source for high-quality medical equipment.  
                        Get the best products at unbeatable prices, delivered right to your doorstep.
                    </h4>
                  <img src='https://www.medilinesurgicals.com/assets/img/about/about-img1.jpg'></img>
                  
                </div>
            </div>
        </div>
    );
}

export default Landing;

