import React from 'react';
import {TypeAnimation} from "react-type-animation";
import {TextAnimation, ImageAnimation, SideTextAnimation} from "./Animation";

const Introduction = () => {

    return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <SideTextAnimation delay={0}>
      <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
      <TypeAnimation
              sequence={["Hello, my name is David, and i am designed to be your very own CS100 Virtual Teaching Assistant!",]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
        </h1>
      </SideTextAnimation>
      <ImageAnimation delay={0} source="/Images/Hello.png" />
    </div>

      <TextAnimation delay={6}>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
        I will be guiding you through the interface and explain how to use the chat functionalities effectively. 
      </p>
      </TextAnimation>
      <br/>
      <TextAnimation delay={8.5}>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
        If you want to get straight to chatting, use the navbar (now visible) to go to "Chat."
      </p>
      </TextAnimation>
      </>
    )

}

export default Introduction;