import axios from 'axios'
import React from 'react'

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    };
  };

  onFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  };

  onLastNameChange(event) {
    this.setState({lastName: event.target.value})
  };

  onEmailChange(event) {
    this.setState({email: event.target. value})
  };

  onPhoneChange(event) {
    this.setState({phone: event.target. value})
  };

  onMessageChange(event) {
    this.setState({message: event.target. value})
  };

  submitEmail(e){
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3001/contact',
      data: this.state
    }).then((response) => {
      if (response.status === 'success') {
        alert('message sent!');
        this.resetForm();
      } else {
        alert('message failed!');
      }
    });
  };

  resetForm() {
    this.setState({firstName: '', lastName: '', email: '', phone: '', message: ''});
  };

  render() {
    return (
      <>
        <h1 id="component-header-text">Contact Me</h1>
        <div className="card contact-form">
          <div className="card-body">
            <form className="row g-3 needs-validation" id='contact-form' onSubmit={this.submitEmail.bind(this)} noValidate method='post' action='/contact' encType='multipart/form-data'>
              <div className="col-md-6">
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name' 
                  className='form-control'
                  onChange={this.onFirstNameChange.bind(this)}
                  value={this.state.firstName}
                  required />
              </div>
              <div className="col-md-6">
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name' 
                  className='form-control'
                  onChange={this.onLastNameChange.bind(this)}
                  value={this.state.lastName}
                  required />
              </div>
              <div className="col-md-6">
                <input
                  type='text'
                  name='email'
                  placeholder='Email' 
                  className="form-control"
                  onChange={this.onEmailChange.bind(this)}
                  value={this.state.email}
                  required />
              </div>
              <div className="col-md-6">
                <input
                  type='text'
                  name='phone'
                  placeholder='Phone' 
                  className="form-control"
                  onChange={this.onPhoneChange.bind(this)}
                  value={this.state.phone}
                  required />
              </div>
              <div className="col-md-12">
                <textarea
                  type='text'
                  name='message'
                  placeholder='Message'
                  className='form-control'
                  onChange={this.onMessageChange.bind(this)}
                  value={this.state.message}
                  required />
              </div>
              <div className="col-12">
                <button className='btn btn-info' type='submit'>Contact Me</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };
};

export default ContactForm;