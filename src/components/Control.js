import React from 'react';
import Resume from './Resume';
import Blog from './Blog';
import ContactForm from './ContactForm';
import Main from './Main';

class Control extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      resumeVisibleOnPage: false,
      blogVisibleOnPage: false
    };
  }

  handleSendingMessage = (contactInfoToAdd) => {
    // send message to my email?
    this.setState({ formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.resumeVisibleOnPage) {
      this.setState({
        resumeVisibleOnPage: !prevState.resumeVisibleOnPage
      });
    } else if (this.state.blogVisibleOnPage) {
      this.setState(prevState => ({
        blogVisibleOnPage: !prevState.blogVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage)  {
      currentVisibleState = <ContactForm onSendMessage={this.handleSendingMessage} />
      buttonText='Return to Home';
    } else if (this.state.blogVisibleOnPage) {
      currentVisibleState = <Blog />
      buttonText='Return to Home';
    } else if (this.state.resumeVisibleOnPage) {
      currentVisibleState = <Resume />
      buttonText='Return to Home';
    } else {
      currentVisibleState = <Main />
    }

    return (
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }

}

export default Control;