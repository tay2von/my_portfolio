import React from 'react'
import Particles from 'react-particles-js';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particles />
      </div>
      <div className="typography">
        <h1>Welcome, I'm<span>Tayvon Lewis</span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium natus doloremque illo deserunt iste ullam facere magni sunt debitis quis!
        </p>
        <div className="icons">
          <div className="i-facebook">
            <FacebookIcon />
          </div>
          <div className="i-github">
            <GithubIcon />
          </div>

          <div className="i-youtube">
            <YouTubeIcon />
          </div>
        </div>
      </div>
    </HomePageStyled >
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
  .typography{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
export default HomePage;
