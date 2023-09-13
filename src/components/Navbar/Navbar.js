"use client"

import './navbar.css'
import styled from 'styled-components'
import Image from '../../../node_modules/next/image'
import logo from '../../../public/logo.svg'

function Navbar() {

    const toggleActive = () => {
        const hamburgerMenu = document.querySelector('.hamburger-menu')
        hamburgerMenu.classList.toggle('active')
    }

  return (
    <>
      <Container>
        <Image alt='logo' src={logo} width={60} height={60}/>
        <UserContainer>
          <div className='sublet'>Sublet</div>
          <Circle>
            TV
          </Circle>
          <div className='hamburger-menu' onClick={toggleActive}>
            <span></span>
            <span></span>
            <span></span>
            <div className='dropdown'>
            <p>Listings</p>
            <p>Profile</p>
            <p>Settings</p>
            <p>Logout</p>
            </div> 
          </div>
        </UserContainer> 
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  background: white;
  height: 4rem;
  width: 100%;
  display: flex;
  flex-dirextion: row;
  align-items: center;
  padding: 0px 20px;
  justify-content: space-between;
  color: black;
`

const UserContainer = styled.div`
  display: flex;
  flex-dirextion: row;
  align-items: center;
`

const Circle = styled.div`
  background: rgb(200, 200, 200);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Navbar;