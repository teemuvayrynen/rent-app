"use client"
import styled from 'styled-components'

function Footer() {
    return (
        <Container className="footer-container">
            <Information>
                <h2>UniRent</h2>
                <p>Life is a journey filled with twists, turns, and unexpected moments. Embrace each day with curiosity, find beauty in the ordinary, and cherish the people who make your heart smile. In the end, it&apos;s the memories and connections that truly define our existence.</p>
            </Information>
        </Container>
    )

}

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  bottom: 0px;
  width: 100%;
  height: 18rem;
  background-color: red;
  display: flex; /* Initially hide the container */
  
  &.show {
    display: none; /* Apply display: flex; when the 'show' class is added */
  }
`
const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 32rem;
    margin-top: 3rem;
    gap: 2.5rem;
    color: black;
    font-weight: 300;
`

export default Footer;