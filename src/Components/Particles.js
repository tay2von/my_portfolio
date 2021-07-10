import Particles from "react-particles-js";
import React from "react";


function Particles() {
  return (
    <>
      <Particles width="100%" height="100vh"
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            }
          }

        }}
      />
    </>
  )
}


export default Particles;


