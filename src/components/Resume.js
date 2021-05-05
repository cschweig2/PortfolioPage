import React from 'react';

function Resume() {
  return (
    <>
      <h1 id='component-header-text'>Resume</h1>
      <div className='container'>
        <img src={require('../img/Resume.png')} alt='resume' id='resume-image' />
      </div>
    </>
  );
}

export default Resume;