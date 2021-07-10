import React from 'react'
import Particles from 'react-tsparticles';
import styled from 'styled-components';

function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particles />
      </div>
      <div className="typography">
        <h1>Hi I'm <span>Lorem Ipsum</span></h1>
      </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative; 
    .p-particles-js{
      position: absolute;
      top: 0;
      left: 0;
    }
`;
export default HomePage;
