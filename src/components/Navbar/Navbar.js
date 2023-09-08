"use client"

import './navbar.css'
import styled from 'styled-components'

function Navbar() {
  return (
    <>
      <Container>
        <h2>UniRent</h2>
        <UserContainer>
          <div>Account</div>
          <Circle>
            TV
          </Circle>
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
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Navbar;