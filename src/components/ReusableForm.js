import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='firstName'
          placeholder='First Name' />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name' />
        <input
          type='text'
          name='email'
          placeholder='Email' />
        <input
          type='text'
          name='phone'
          placeholder='Phone' />
        <input
          type='text'
          name='message'
          placeholder='Message' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;