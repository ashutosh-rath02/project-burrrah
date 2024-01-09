import { signOut } from 'firebase/auth'
import Image from 'next/image'
import React, { useContext } from 'react'
import styled from 'styled-components'

import { auth } from '../../firebase/firebase'
import { AuthContext } from '../context/AuthContext'

const StyledNavbar = styled.nav`
  background-color: black;
  overflow: hidden;
  font-family: Arial, sans-serif;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
const LineStyles = styled(Image)`
  position: absolute;
  width: 200%;
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
`
const Line = (props) => (
  <LineStyles
    src="https://res.cloudinary.com/dra96qhox/image/upload/v1704284949/Line_46_l0jm2p.png"
    alt="line"
    width={5}
    height={2}
    left={props.left}
    bottom={props.bottom}
  />
)

const VerticalLineStyles = styled(LineStyles)`
  transform: rotate(90deg);
`
const VerticalLine = (props) => (
  <VerticalLineStyles
    src="https://res.cloudinary.com/dra96qhox/image/upload/v1704284949/Line_46_l0jm2p.png"
    alt="line"
    width={5}
    height={2}
    left={props.left}
    bottom={props.bottom}
  />
)
const Logo = styled(Image)`
  filter: drop-shadow(0 0 2rem #bc00fe);
`
const NavHeading = styled.div`
  background: linear-gradient(180deg, #c464ff -13.76%, rgba(252, 252, 252, 0.33) 128.58%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`
const NavItem = styled.li`
  float: left;
  display: block;
  color: #d9d9d91a;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
  a {
    color: inherit;
    text-decoration: none;
  }
`

const SignOutButton = styled.button`
  width: 150px;
  height: 50px;
  cursor: pointer;
  color: #fff;
  font-size: 17px;
  border-radius: 5rem;
  border: none;
  position: relative;
  background: #100720;
  transition: 0.1s;
  border-radius: 2.23356rem;
  border: 1.848px solid #f7e1ff;

  background: rgba(217, 217, 217, 0.1);

  box-shadow: 0px -3.697px 10.66px 0px rgba(225, 140, 255, 0.35) inset;
  backdrop-filter: blur(7.702038764953613px);
  &:hover {
    background: #f7e1ff;
    color: black;
    font-weight: bold;
  }
`

export const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.error('Sign out error:', error))
  }

  return (
    <StyledNavbar>
      <NavItem>
        <a href="/">
          <Logo
            src="https://res.cloudinary.com/dhnkuonev/image/upload/v1699458313/hnlogo_ei64kd.png"
            alt="HN-logo"
            height={68}
            width={68}
          />
        </a>
      </NavItem>
      <NavItem>
        <NavHeading>HACKNITR 5.0</NavHeading>
      </NavItem>
      {!currentUser && (
        <NavItem>
          <a href="/signup">
            <SignOutButton>
              <Line left="-75px" bottom="-2px"></Line>
              <VerticalLine left="-148px" bottom="40px"></VerticalLine>
              Sign in
              <VerticalLine left="1px" bottom="7px"></VerticalLine>
              <Line left="-75px" bottom="47px"></Line>
            </SignOutButton>
          </a>
        </NavItem>
      )}
      {currentUser && (
        <>
          <NavItem>
            <a href="/myticket">My Ticket</a>
          </NavItem>
          <NavItem>
            <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
          </NavItem>
        </>
      )}
    </StyledNavbar>
  )
}
