import React from 'react'
import styled from 'styled-components'

const ButtonCont = styled.button`
  background: linear-gradient(0deg, rgba(217, 217, 217, 0.1), rgba(217, 217, 217, 0.1)),
    linear-gradient(97.1deg, rgba(247, 225, 255, 0.38) 11.37%, rgba(218, 115, 255, 0.38) 102.95%);
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 35px;
  padding: 2.7px;
`
const InsideButton = styled.button`
  background: grey;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 35px;
  padding: 12px 60px;

  &:hover {
    background: white;
    color: black;
  }
`
export const GlobalButton = ({ children }) => {
  return (
    <ButtonCont>
      <InsideButton>{children}</InsideButton>
    </ButtonCont>
  )
}
