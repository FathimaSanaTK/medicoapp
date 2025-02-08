
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import './card.css';  // Import CSS file

function Card({ details }) {
  return (
    <div className="card-container">
      {details.length > 0 ? (
        details.map((item, index) => (
          <MDBCard key={index} className="mdb-card">
            <MDBCardImage src={item.image_url} position="top" alt="Product Image" />
            <MDBCardBody className="mdb-card-body">
              <MDBCardTitle className="mdb-card-title">{item.name}</MDBCardTitle>
              <MDBCardText className="mdb-card-text">
                {item.rating}★ ({item.reviews})
              </MDBCardText>
              <MDBCardText className="mdb-card-text">
                {item.price} <del>{item.original_price}</del> {item.discount}
              </MDBCardText>
              <MDBBtn href="#" className="mdb-btn">Buy Now</MDBBtn>  <MDBBtn> <i class="fa-solid fa-cart-shopping"></i></MDBBtn>
            </MDBCardBody>
          </MDBCard>
        ))
      ) : (
        <p>No details to display</p>
      )}
    </div>
  );
}

export default Card;
