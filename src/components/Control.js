// import React from 'react';
// import Resume from './Resume';
// import Blog from './Blog';
// import ContactForm from './ContactForm';
// import Main from './Main';

// class Control extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false,
//       resumeVisibleOnPage: false,
//       blogVisibleOnPage: false,
//       projectsVisibleOnPage: false
//     };
//   }

//   handleSendingMessage = (contactInfoToAdd) => {
//     // send message to my email?
//     this.setState({ formVisibleOnPage: false });
//   }

//   handleClick = () => {
//     if (this.state.resumeVisibleOnPage) {
//       this.setState({
//         resumeVisibleOnPage: false
//       });
//     } else if (this.state.blogVisibleOnPage) {
//       this.setState({
//         blogVisibleOnPage: false
//       });
//     }
//   }

//   handleEditClick = () => {
//     this.setState({ editing: true });
//   }

//   componentDidMount = () => {
//     if (window.location.href === 'http://localhost:3000/contact') {
//       this.setState({ formVisibleOnPage: true })
//     } else if (window.location.href === 'http://localhost:3000/resume') {
//       this.setState({ resumeVisibleOnPage: true })
//     } else if (window.location.href === 'http://localhost:3000/projects') {
//       this.setState({ projectsVisibleOnPage: true })
//     } else {
//       this.setState({ 
//         formVisibleOnPage: false,
//         resumeVisibleOnPage: false,
//         projectsVisibleOnPage: false })
//     }
//   }

//   render() {
//     let currentVisibleState = null;
//     if (this.state.formVisibleOnPage)  {
//       currentVisibleState = <ContactForm onSendMessage={this.handleSendingMessage} />
//     } else if (this.state.blogVisibleOnPage) {
//       currentVisibleState = <Blog />
//     } else if (this.state.resumeVisibleOnPage) {
//       currentVisibleState = <Resume />
//     } else {
//       currentVisibleState = <Main />
//     }
//     return (
//         <>
//           {currentVisibleState}
//         </>
//       );
//   }
// }

// export default Control;