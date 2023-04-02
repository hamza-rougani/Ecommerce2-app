import React from 'react'
import Header from '../../../views/header'
import Introduction from './Introduction'
import SlideImage from './SlideIm'
function landingPage() {
  return (
    <div className='landing'>
      <Introduction/>
      <SlideImage/>
    </div>
  )
}

export default landingPage