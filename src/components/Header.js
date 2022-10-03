import React from 'react'
import styled from 'styled-components'
import logo from "../assets/img/logo.png";

export default function Header(){
    
  return(

        <HeaderLayout>
        <LogoLayout src={logo} alt=''/>
        <Titulo>ZapRecall</Titulo>
        </HeaderLayout>
    )

}

const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;


`
const Titulo = styled.h1`
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;


`
const LogoLayout = styled.img`
    width: 52px;

`