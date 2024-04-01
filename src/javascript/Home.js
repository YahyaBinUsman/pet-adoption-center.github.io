// Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h2><b>Please note that this is just a layout and design and not functional and you will not get and cannot adopt any types of dogs!.
        </b></h2>
      <div className="home-container">
        <div className="home-content">
          <h2>Welcome to the Pet Adoption Center</h2>
          <p>
            Our mission is to connect loving families with wonderful pets. We believe in finding the perfect match for
            both the pet and the adoptive family. Explore our dog listings, learn more about each furry friend, and
            start your journey to welcoming a new member into your home.
          </p>
        </div>
        <div className="home-image-container">
          <img src="/img/dog main.jpg" alt="Pet Adoption" />
        </div>
      </div>

      {/* Additional content above the line */}
      <div className="abcd">
        <h3>Why Choose Us?</h3>
        <p>
          At Pet Adoption Center, we strive to provide a seamless and joyful adoption experience for both pets and
          adoptive families. Here's why you should choose us:
        </p>
        </div>
        <ul>
          <li>Wide variety of loving pets</li>
          <li>Experienced and caring staff</li>
          <li>Transparent adoption process</li>
          <li>Post-adoption support</li>
        </ul>
      

      <hr className="mt-5 mb-5" />
      
      {/* Dog Cards Section */}
      <div className="dog-cards">
        <h3>Top and Rare Dogs</h3>
        <div className="card-deck">
          {/* Card 1 */}
          <div className="card">
            <img src="/img/golden.jpg" className="card-img-top" alt="Dog 1" style={{ width: '200px', height: 'auto' }} />
            <div className="card-body">
              <h5 className="card-title">Golden Retriever</h5>
              <p className="card-text">Known for their friendly and gentle nature, Golden Retrievers make excellent family pets.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src="/img/siber.jpg" className="card-img-top" alt="Dog 2" style={{ width: '200px', height: 'auto' }} />
            <div className="card-body">
              <h5 className="card-title">Siberian Husky</h5>
              <p className="card-text">With striking looks and a friendly demeanor, Siberian Huskies are perfect for active families.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src="/img/dal.jpg" className="card-img-top" alt="Dog 3" style={{ width: '200px', height: 'auto' }} />
            <div className="card-body">
              <h5 className="card-title">Dalmatian</h5>
              <p className="card-text">Dalmatians are known for their distinctive spots and energetic personality.</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-5 mb-5" />
      
      {/* Bottom section for copyright, contact information, and social media logos */}
      <div className="shot" >
        <p>Copyright© 1995-2023 Pet Adoption center All Rights Reserved.</p>

        {/* Contact Information */}
        <div className="contact-info">
          <p>Email: yahyabinusman7@gmail.com.com</p>
          <p>Phone: +92 302 0499289</p>
        </div>

          {/* Social Media Logos */}
          <div className="d-flex justify-content-center">
          <div className="logo-box">
            <a href="https://github.com/YahyaBinUsman" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github logo"></i>
            </a>
          </div>

          <div className="logo-box">
            <a href="https://www.instagram.com/yahya_bin_usman_445/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram logo"></i>
            </a>
          </div>

          <div className="logo-box">
            <a href="https://www.facebook.com/profile.php?id=100092327559516" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f logo"></i>
            </a>
          </div>

          <div className="logo-box">
            <a href="www.linkedin.com/in/yahya-bin-usman-9a4b39290" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in logo"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
