import React from 'react'

import CustomButton from '../components/CustomButton'

const Home = () => {
  return (
    <div>
        <h1>This is my home page and some info is there</h1>
        <marquee>Home page</marquee>
        <CustomButton cr='red' bgColor='yellow' name='Home button' />
        </div>
  )
}

export default Home