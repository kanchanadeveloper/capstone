import React, { useState } from 'react';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        date: '',
        time: '',
        guests: '',
        occasion: '',
      });
      const [errors, setErrors] = useState({});
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const validateForm = () => {
        let newErrors = {};
        if (!formData.name) {
            newErrors.name = 'Name is required.';
          } else if (formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters long.';
          }
      
          if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
          }
    
        if (!formData.date) {
          newErrors.date = 'Please enter a date.';
        }
        if (!formData.time) {
          newErrors.time = 'Please enter a time.';
        }
        if (!formData.guests || parseInt(formData.guests, 10) <= 0) {
          newErrors.guests = 'Please enter a valid number of guests (greater than 0).';
        }
        if (!formData.occasion) {
          newErrors.occasion = 'Please select an occasion.';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // true if no errors
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        if (validateForm()) {
          alert(
            `Your reservation has been submitted! \n Details: \n Date: ${formData.date} \n Time: ${formData.time} \n Guests: ${formData.guests} \n Occasion: ${formData.occasion}`
          );
          // Simulate form reset after successful submission
          setFormData({ date: '', time: '', guests: '', occasion: '' });
          setErrors({});
        }
      };
    
      return (
        <div className="row p-4">
            <div className="col-md-6 offset-md-3">
        <form onSubmit={handleSubmit}>
          <h2>Reserving a Table</h2>
          <div className="form-group mb-3"> {/* Added Bootstrap classes */}
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'form-control error-input' : 'form-control'}
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>
          <div className="form-group mb-3"> {/* Added Bootstrap classes */}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'form-control error-input' : 'form-control'}
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>
          
          <div className="form-group mb-3"> {/* Added Bootstrap classes */}
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className={errors.date ? 'form-control error-input' : 'form-control'}
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              className={errors.time ? 'form-control error-input' : 'form-control'}
            />
            {errors.time && <span className="error-message">{errors.time}</span>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="guests">Number of Guests:</label>
            <input
              type="number"
              name="guests"
              id="guests"
              value={formData.guests}
              onChange={handleChange}
              className={errors.guests ? 'form-control error-input' : 'form-control'}
            />
            {errors.guests && <span className="error-message">{errors.guests}</span>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="occasion">Occasion:</label>
            <select
              name="occasion"
              id="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className={errors.occasion ? 'form-control error-input' : 'form-control'}
            >
              <option value="">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              {/* Add more options as needed */}
            </select>
            {errors.occasion && <span className="error-message">{errors.occasion}</span>}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Reservation
          </button>
        </form>
        </div>
        </div>
      );
    };


export default Reservation;