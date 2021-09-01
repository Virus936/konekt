import React, {useState} from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import device from '../size'
import color from '../color'
import { FiMenu } from 'react-icons/fi';

function Header(){
  const [active, setActive] = useState(false)
  return(
    <Container>
      <Wrapper>
        <div><Link to='/'><Logo src={logo} alt="" /></Link></div>
        {
          <HamburgerMenu onClick={ () => setActive(!active) }>
          <FiMenu />
          </HamburgerMenu>
          }
        <Nav className={active&&'active'} onClick={() => setActive(!active)} active={active}>
          <div><Link to="/about-us">qui sommes-nous ? </Link></div>
          <div><Link to="/expertise">notre expertise</Link></div>
          <div><Link to='/offres'>nos offres</Link></div>
          <div><Link to="/recrutement">vous recrutez</Link></div>
          <div><Link to='/blog'>blog</Link></div>
          <div><Link to="/contact">contact</Link></div>
          <div>connexion</div>
        </Nav>
      </Wrapper>
    </Container>
    )
}

const HamburgerMenu = styled.div`
  display:None;
  justify-content:center;
  align-items:center;
  position:absolute;
  padding:10px;
  right:0;
  cursor:pointer;
  background-color:${color.primary};
  color:white;
  @media ${device.mobile} {
  display:flex;
  }
`
const Nav = styled.nav`
  display:flex;
  flex-direction: row;
  font-size:12px;
  font-weight:700;
  margin-left:auto;

  &>div{
    text-transform: uppercase;
    cursor:pointer;
    &:last-child{
      background-color:${color.primary};
      padding:10px;
      color:white;
    }
    a{
      display:block;
      text-decoration:none;
      padding:10px;
      color:inherit;
    }
  }

  @media ${device.mobile} {
    position:absolute;
    top:100%;
    right:0;
    max-height:0;
    flex-direction:column;
    overflow:hidden;
    transition:.21s linear;
    background:#222222;
    color:white;

    &>div{
      width:19em;
      padding:0;
      &:hover{
        background:#333333;
      }
      &:last-child{
        background-color:inherit;
      }
    }
    &.active{
      max-height:300px;
      transition:.21s linear;

    }
  }
`
const Logo = styled.img`
  cursor:pointer;
  height:30px;
`

const Container = styled.header`
  position:sticky;
  top:0;

  display:flex;
  flex-direction: row;
  justify-content:center;
  height:60px;

  background:white;
`
const Wrapper = styled.div`
  position:relative;
  display:flex;
  flex-direction: row;
  align-items:center;
  width:90%;
  max-width:1400px;

`
export default Header
