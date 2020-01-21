import { Typography } from "antd";
import * as React from "react";
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import "./homepage.scss";

import { Store } from "./store/store";

const { Title } = Typography;
const { useState } = React;

const HomePage: React.FC = () => {
  const [isSwiped, setSwiped] = useState(false);

  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    if(down === false ) {
      if(mx <= -135) {
        console.log("Swiped Left")
        setSwiped(true);
      } 
      if(mx >= 135) {
        console.log("Swiped Right");
        setSwiped(true);
      }
    }
    set({ x: down ? mx : 0, y: down ? my : 0 })
  })

  console.log(isSwiped);
  return (
    <article>
      <Store>
        <Title>Home</Title>
        <div className="centered-container">
        { !isSwiped && 
        <animated.div {...bind()} style={{ x, y }} >
          <div className="card-container">
              Hello, do you like coffee?
          </div>
        </animated.div>
        }
        </div>
      </Store>
    </article>
  );
};
export { HomePage };
