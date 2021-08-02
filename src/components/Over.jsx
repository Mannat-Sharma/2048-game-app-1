import React from "react";
import { motion } from "framer-motion";

import styled from "styled-components";
import img from '../images/2048game.png';

const Section = styled.section`

z-index:-1;
display: flex;
justify-content: center;
align-items: center;
height: 97vh;

`;

const Container = styled(motion.div)`
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
width:97vw;
z-index:1;
background-image: url(./images/2048game.png);
border-radius: 2rem;
height: 80%;
width: 60%;
display: flex;
justify-content: center;
align-items: center;
background: #131313;
flex-direction: column;

h1 {
  color: rgb(7, 161, 250);
  font-size: 4rem;
}
`;

const Buttons = styled.button`
margin-top: 2rem;
margin-left: 2rem;
align-self: center;
padding: 1rem 3rem;
font-size: 2rem;
border: none;
border-radius: 10px;
background: transparent;
outline: none
cursor: pointer;
color: orange;
border: 2px solid orange;`;

const Division = styled.div`
${Buttons}:nth-child(1) {
  top: 30px;
  left: 160px;
}
${Buttons}:nth-child(2) {
  top: 90px;
  left: 10px;
}
`;

function Over({ setDisplay }) {
  const fadeLeft = {
    hidden: { opacity: 0, x: -800 },
    visible: { opacity: 1, x: 0 },
  };
  
  return (
    <div>
    <Section>
      <Container
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h1>Game Over</h1>
        <Division>
          <Buttons
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.93,
              backgroundColor: "#67F6E7",
              border: "none",
              color: "#000",
            }}
            initial={{ opacity: 0 }}
            animate={fadeLeft}
            onClick={() => {
              console.log("hello");
              setDisplay(true);
            }}
          >
            Try Again
          </Buttons>
          <Buttons
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.93,
              backgroundColor: "#67F6E7",
              border: "none",
              color: "#000",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            onClick={() => {
              window.location.href = 'https://twitter.com/intent/tweet?text=Love%20to%20play%20this%20please%20support%20micro%20processing%20minions%20team%20at%20@devsnest_%20https://micro-processing-minions-2048.netlify.app/%20please%20follow%20us%20on%20twitter';
            }}
          >
            Tweet
          </Buttons>
        </Division>
      </Container>
    </Section>
    </div>
  );
}

export default Over;
