import React from 'react'
import PersistentDrawerLeft from '../../components/NavBar/sidebar'
import Counter from '../../components/Counter'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'



const Home = () => {

  console.log(Cookies.get("username"))

  return (
    <>
    <PersistentDrawerLeft/>

    </>
  )
}

export default Home