import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import dogData from './dogs-data.json';
import '../css/styles.css';

const Checkout = () => {
  const { dogId } = useParams();
  const [data] = useState(dogData);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phoneNumber: '',
    city: '',
    postalCode: '',
  });
  const [showReceipt, setShowReceipt] = useState(false);

  const selectedDog = data.find((dog) => dog.id === parseInt(dogId));

  if (!selectedDog) {
    console.error(`Dog with ID ${dogId} not found.`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setShowReceipt(true);
  };

  const handleEdit = () => {
    setFormData({
      name: '',
      address: '',
      email: '',
      phoneNumber: '',
      city: '',
      postalCode: '',
    });
    setShowReceipt(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Adoption Checkout</h2>
      {!showReceipt ? (
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="address" className="form-label">Home Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Enter your home address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="postalCode" className="form-label">Postal Code</label>
              <input
                type="text"
                className="form-control"
                id="postalCode"
                name="postalCode"
                placeholder="Enter your postal code"
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      ) : (
        <div className="mt-4">
          <div className="receipt">
            <h3>Adoption Receipt</h3>
            <div className="receipt-details">
              <div className="receipt-item">
                <strong>Your Name:</strong> {formData.name}
              </div>
              <div className="receipt-item">
                <strong>Email:</strong> {formData.email}
              </div>
              <div className="receipt-item">
                <strong>Address:</strong> {formData.address}
              </div>
              <div className="receipt-item">
                <strong>Phone Number:</strong> {formData.phoneNumber}
              </div>
              <div className="receipt-item">
                <strong>City:</strong> {formData.city}
              </div>
              <div className="receipt-item">
                <strong>Postal Code:</strong> {formData.postalCode}
              </div>
              <div className="receipt-item">
                <strong>Dog ID:</strong> {selectedDog.id}
              </div>
              <div className="receipt-item">
                <strong>Dog Name:</strong> {selectedDog.name}
              </div>
              <div className="receipt-item">
                <i>Thanks for adopting {selectedDog.name}!</i>
              </div>
            </div>
            <div className="receipt-actions">
              <Link to="/dogs" className="btn btn-secondary">
                Back to Dogs
              </Link>
              <button onClick={handleEdit} className="btn btn-info ml-2">
                Edit Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
