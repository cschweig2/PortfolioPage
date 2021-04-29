import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function ContactForm(props) {
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleSendingMessageToEmail}
        buttonText='Contact Chelsea' />
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