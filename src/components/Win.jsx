import React from "react";
import { motion } from "framer-motion";

import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97vh;
  background: #fff;
`;

const Container = styled(motion.div)`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 2rem;
  height: 80%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
  flex-direction: column;

  h1 {
    color: #fff;
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
  color: #fff;
  border: 2px solid #fff;`;

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

function Win({ setDisplay }) {
  const fadeLeft = {
    hidden: { opacity: 0, x: -800 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Section>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
      >
        <h1>Yeyy Winner Winner Chicken Dinner</h1>
        <Division>
          <Buttons
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.93,
              backgroundColor: "#67F6E7",
              border: "none",
              color: "#000",
            }}
            onClick={() => {
              console.log("hello");
              setDisplay(true);
            }}
          >
            Play Again
          </Buttons>
        </Division>
      </Container>
    </Section>
  );
}

export default Win;
