import * as React from "react";
import { motion } from "framer-motion";

import two from "../images/two.png";
import zero from "../images/0.png";
import eight from "../images/eight.png";
import four from "../images/four.png";

import styled from "styled-components";

const Section = styled.section`
  height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding: 3rem calc{(100vw - 1300px)/2}

  @media screen and (max-width: 768px){
      grid-grid-template-column: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 1rem;

  h1 {
    color: #a2dbfa;
    margin-left: 2rem;
    margin-bottom: 0.5rem;
    font-size: 4rem;
  }

  p {
    // border: 2px solid #fff;
    // border-radius: 20px;
    text-align: left;
    margin: 0.5rem;
    font-size: 1.5rem;
    padding: 2rem 2rem;
  }
`;

const Button = styled(motion.button)`
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
  border: 2px solid #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content-center;
  align-items: center;
  padding 2rem;
  position: relative;


  ${Image}:nth-child(1){
      top:30px;
      left: 160px;
  }
  ${Image}:nth-child(2){
      top:90px;
      left: 10px;
  }
  ${Image}:nth-child(3){
      top:30px;
      right: 40px;
  }
  ${Image}:nth-child(4){
      top:150px;
      right: 180px;
  }
  

`;

const Motion = ({ setDisplay }) => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            2048 Game
          </motion.h1>

          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <b>HOW TO PLAY:</b> Use your arrow keys to move the tiles. When two
            tiles with the same number touch, they merge into one!
          </motion.p>

          <Button
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
              setDisplay(false);
              console.log("hello");
            }}
          >
            Let's Start
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={zero}
            alt="zero"
            whileTap={{ scale: 0.7 }}
            drag={true}
            dragConstraints={{ left: 0, right: -300, top: 350, bottom: 0 }}
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={two}
            alt="two"
            whileTap={{ scale: 0.77 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 300, bottom: 0 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={eight}
            alt="eight"
            whileTap={{ scale: 0.7 }}
            drag={true}
            dragConstraints={{ left: 0, right: -350, top: 0, bottom: 0 }}
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={four}
            alt="four"
            whileTap={{ scale: 0.7 }}
            drag={true}
            dragConstraints={{ left: 0, right: 300, top: -300, bottom: 0 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};
export default Motion;
