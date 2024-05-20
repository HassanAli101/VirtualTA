import React from 'react';
import {motion} from 'framer-motion';
import {TypeAnimation} from "react-type-animation";

function InstructionsPage() {
  
  return (
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-12">
       <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
      <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
      <TypeAnimation
              sequence={[
                "Hello, my name is David, and i am designed to be your very own CS100 Virtual Teaching Assistant!",
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
          transition={{ duration: 0.5, delay: 6 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
        I will be guiding you through the interface and explain how to use the chat functionalities effectively. 
      </p>
      </motion.div>
      <br/>
      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 8.5 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
        If you want to get straight to chatting, use the navbar (now visible) to go to "Chat."
      </p>
      </motion.div>


     <section >
    <div className="grid grid-cols-1 sm:grid-cols-12">
     <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 9.5 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
        >
      <h5 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
      The Chat page has 3 main text areas, which are: 
      </h5>
      </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 11 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
        <img
            src="/Images/Incorrect.png"
            alt="hero image"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 11 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
      <h6 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl"> 
      1) Query Box
      </h6>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 12 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-end"
        >
      <h6 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
        2) VTA responses
        </h6>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 12 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
        <img
            src="/Images/Incorrect.png"
            alt="hero image"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        </motion.div>
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 13 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
        <img
            src="/Images/Incorrect.png"
            alt="hero image"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        </motion.div>
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 13 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
      <h6 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
        3) Feedback Panel
        </h6>
      </motion.div>
      </div>
     </section>

      
      <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
     <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 15 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
        >
      <h5 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
      Query Box: 
      </h5>
      </motion.div>
      </div>

      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 16 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">The Query Box is where you can type in your questions or problems that you need assistance with. Simply enter your query and press the arrow up button to let me know.</p>
        </motion.div>
        
        
        
        
        
      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 17 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">I have 2 modes mainly, a mode where I tell you the syntax in detail, you can ask this by using the keyword "syntax" in your query. and the second mode is Q/A mode, where I break down your question into multiple steps and at each step, ask you a question of how you would attempt it. if you are correct, I proceed to the next step, if you are incorrect or you dont know, then the feedback panel displays the correct output for your understanding and I will go on to the next step. Note: once this starts, your outputs will be treated like response to the questions being asked only.</p>
      </motion.div>


      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 19 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">Examples of Queries for syntax help include:</p>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 19.5 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">What is the syntax of declaring variables?</p>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 20 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">Help me with the syntax of functions</p>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 20.5 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">What is the syntax of pointers in c++?</p>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 21.5 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">Examples of Queries for Q/A mode include:</p>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 22 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">Can you help me write code to add 2 numbers in a function?</p>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 22.5 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">How do i solve the problem to return longest word in a string in c++?</p>
      </motion.div>
      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 23 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">How do i write code to swap values of 2 variables using pass by reference function?</p>
      </motion.div>

      
      </section>
      
      

      
      <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
     <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 24 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
        >
      <h5 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
      VTA responses: 
      </h5>
      </motion.div>
      </div>


      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 24.5 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">After submitting your query, the conversation with your virtual assistant David will appear here. David will help guide you through the problem-solving process or provide explanations and resources to assist your learning.</p>
      </motion.div>
      </section>
      
      <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
     <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 25.5 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
        >
      <h5 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
      Feedback Panel: 
      </h5>
      </motion.div>
      </div>
      <motion.div
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 26 }}
          className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">When an incorrect input or misunderstanding occurs, the feedback panel will activate. This panel will highlight your error and provide a detailed explanation to help you understand the correct concept or solution. Pay close attention to the feedback to improve your learning experience.</p>
      </motion.div>
      </section>
    </div>
  );
}

export default InstructionsPage;
