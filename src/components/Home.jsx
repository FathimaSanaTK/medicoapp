// import React, { useState , useEffect } from 'react';
// import Card from './Card';
// import { firestore } from "../firebase";
// import { collection, getDocs } from '@firebase/firestore';



// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBBtn,
//   MDBCollapse,
// } from 'mdb-react-ui-kit';

// function Home() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(firestore, "items"));
//         const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setData(items);
//       } catch (error) {
//         console.error("Error fetching Firestore data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   console.log(data);

//   return (
//     <>
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

//         <MDBNavbarToggler
//           aria-controls='navbarSupportedContent'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           // onClick={() => setOpenBasic(!openBasic)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar >
//           <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>           
//           </MDBNavbarNav>
//           {/* Added ms-auto class here */}
//           <form className='d-flex input-group w-auto ms-auto'>
//             <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
//             <MDBBtn color='primary'>Search</MDBBtn>
//           </form>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//     <Card details={data} />
//     </>
//   );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import Card from './Card';
import { firestore } from "../firebase";
import { collection, getDocs } from '@firebase/firestore';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBBtn,
  MDBCollapse,
  MDBSpinner
} from 'mdb-react-ui-kit';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [openNav, setOpenNav] = useState(false); // State for Navbar Toggle

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "items"));
        const items = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(items);
      } catch (error) {
        console.error("Error fetching Firestore data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter products based on search query
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Navigation Bar */}
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          {/* <MDBNavbarBrand href='#'>MediCo</MDBNavbarBrand> */}
          <MDBNavbarBrand href='#'>
  <span style={{ color: 'blue' }}>Medi</span>
  <span style={{ color: 'red' }}>Co</span>
</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded={openNav}
            aria-label='Toggle navigation'
            onClick={() => setOpenNav(!openNav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={openNav}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0' />
            {/* Search Bar */}
            <form className='d-flex input-group w-auto ms-auto'>
              <input
                type='search'
                className='form-control'
                placeholder='Search products...'
                aria-label='Search'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      {/* Display Loader While Fetching Data */}
      {loading ? (
        <div className="text-center mt-4">
          <MDBSpinner color="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      ) : (
        <Card details={filteredData} />
      )}
    </>
  );
}

export default Home;
