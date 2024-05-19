import React from 'react';
import {motion} from 'framer-motion';
import {TypeAnimation} from "react-type-animation";

function InstructionsPage() {

  const HeroImage = () => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
      >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
          <img
            src="/Images/Hello.png"
            alt="hero image"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </motion.div>
    );
  };
  

  return (
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-12">
       <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
      <TypeAnimation
              sequence={[
                "Hello, i am David, your very own CS100 Virtual Teaching Assistant!",
            ]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
        
        </h1>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
        <img
            src="/Images/Hello.png"
            alt="hero image"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        </motion.div>
      </div>

      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 4.5 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-5xl">
        I will be guiding you through the interface and explain how to use the chat functionalities effectively. <br/>
        If you want to get straight to chatting, use the navbar (now visible) to go to "Chat."
      </p>
      </motion.div>
     
      
      <section>
        <h2>Query Box</h2>
        <p>The Query Box is where you can type in your questions or problems that you need assistance with. Simply enter your query and press "Let's Find Out" to submit it.</p>
        <p>We have 2 modes mainly, a mode where david tells you the syntax in detail, you can ask this by using the keyword "syntax" in your querris. and the second mode is Q/A mode, where david breaks down your question into multiple steps and at each step, asks you a question of how you would attempt it. if you are correct, it proceeds, if you are incorrect or dont know, then the feedback panel displays the correct output for your understanding. Note: once this starts, your outputs will be treated like response to the questions being asked only.</p>
      </section>
      
      <section>
        <h2>Chatbot Interaction</h2>
        <p>After submitting your query, the conversation with your virtual assistant David will appear here. David will help guide you through the problem-solving process or provide explanations and resources to assist your learning.</p>
      </section>
      
      <section>
        <h2>Feedback Panel</h2>
        <p>When an incorrect input or misunderstanding occurs, the feedback panel will activate. This panel will highlight your error and provide a detailed explanation to help you understand the correct concept or solution. Pay close attention to the feedback to improve your learning experience.</p>
      </section>
    </div>
  );
}

export default InstructionsPage;
