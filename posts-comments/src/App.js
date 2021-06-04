import React from 'react'
import Post from './Post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faFireAlt} size='1x'/>

function App() {
  return (
    <>
    <h1>Breaking news {icon}</h1>
    <div className='background'>
      <Post />
    </div>
    </>
  );
}

export default App;
