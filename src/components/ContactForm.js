import React from 'react';
import PropTypes from 'prop-types';

function ContactForm(props) {
  return (
    <>
      <h1 id="component-header-text">Contact Me</h1>
      <div className="card contact-form">
        <div className="card-body">
          <form className="row g-3 needs-validation" novalidate onSubmit={handleSendingMessageToEmail}>
            <div className="col-md-6">
              <input
                type='text'
                name='firstName'
                placeholder='First Name' 
                className='form-control'
                required />
            </div>
            <div className="col-md-6">
              <input
                type='text'
                name='lastName'
                placeholder='Last Name' 
                className='form-control'
                required />
            </div>
            <div className="col-md-6">
              <input
                type='text'
                name='email'
                placeholder='Email' 
                className="form-control"
                required />
            </div>
            <div className="col-md-6">
              <input
                type='text'
                name='phone'
                placeholder='Phone' 
                className="form-control"
                required />
            </div>
            <div className="col-md-12">
              <input
                type='textbox'
                name='message'
                placeholder='Message'
                className='form-control'
                required />
            </div>
            <br />
            <br />
            <div className="col-12">
              <button className='btn btn-info' type='submit'>Contact Me</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );

  function handleSendingMessageToEmail(event) {
    event.PreventDefault();
    props.onSendMessage({
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value
    });
  }
}

ContactForm.propTypes = {
  onSendMessage: PropTypes.func
};

export default ContactForm;