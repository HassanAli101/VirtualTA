import React from 'react';
import {TextAnimation, ImageAnimation, SideTextAnimation} from "./Animation";


const Explanations = () => {

    return (
        <>

     <section >
      
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <TextAnimation delay={9.5 - 9.5}>
        <h5 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
        The Chat page has 3 main text areas, which are: 
        </h5>
        </TextAnimation>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12">
        <ImageAnimation delay={11 - 9.5} source="/Images/Incorrect.png" />
        <SideTextAnimation delay={11 - 9.5}>
       
        <h6 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl"> 
        1) Query Box
        </h6>
        </SideTextAnimation>
        
       <SideTextAnimation delay={12 - 9.5}>
        <h6 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
          2) VTA responses
          </h6>
         </SideTextAnimation>
         <ImageAnimation delay={12 - 9.5} source="/Images/Incorrect.png" />
  
        <ImageAnimation delay={13 - 9.5} source="/Images/Incorrect.png" />
        <SideTextAnimation delay={13 - 9.5}>
        <h6 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
          3) Feedback Panel
          </h6>
        </SideTextAnimation>
        </div>
       </section>
  
        
        <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
        <TextAnimation delay={15 - 9.5}>
        <h5 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
        Query Box: 
        </h5>
        </TextAnimation>
        </div>
  
        <TextAnimation delay={16 - 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">The Query Box is where you can type in your questions or problems that you need assistance with. Simply enter your query and press the arrow up button to let me know.</p>
          </TextAnimation>
   
        <TextAnimation delay={17 - 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">I have 2 modes mainly, a mode where I tell you the syntax in detail, you can ask this by using the keyword "syntax" in your query. and the second mode is Q/A mode, where I break down your question into multiple steps and at each step, ask you a question of how you would attempt it. if you are correct, I proceed to the next step, if you are incorrect or you dont know, then the feedback panel displays the correct output for your understanding and I will go on to the next step. Note: once this starts, your outputs will be treated like response to the questions being asked only.</p>
          </TextAnimation>
  
        <TextAnimation delay={19 - 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
            Examples of Queries for syntax help include:
          </p>
        </TextAnimation>
  
        <TextAnimation delay={19.5- 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">
            What is the syntax of declaring variables?
          </p>
        </TextAnimation>
  
        <TextAnimation delay={20 - 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">
            Help me with the syntax of functions
          </p>
        </TextAnimation>
  
        <TextAnimation delay={20.5 - 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">
            What is the syntax of pointers in C++?
          </p>
        </TextAnimation>
  
  
        <TextAnimation delay={21.5 - 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
            Examples of Queries for Q/A mode include:
          </p>
        </TextAnimation>
  
        <TextAnimation delay={22.5 - 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">
            Can you help me write code to add 2 numbers in a function?
          </p>
        </TextAnimation>
  
        <TextAnimation delay={22.5- 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">
            How do I solve the problem to return longest word in a string in C++?
          </p>
        </TextAnimation>
  
        <TextAnimation delay={23 - 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-3xl">
            How do I write code to swap values of 2 variables using pass by reference function?
          </p>
        </TextAnimation>
  
        </section>
        
        
  
        
        <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
  
           <TextAnimation delay={24 - 9.5}>
          <h5 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            VTA responses:
          </h5>
        </TextAnimation>
        </div>
  
        <TextAnimation delay={24.5 - 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
            After submitting your query, the conversation with your virtual assistant David will appear here. David will help guide you through the problem-solving process or provide explanations and resources to assist your learning.
          </p>
        </TextAnimation>
  
        <TextAnimation delay={25.5 - 9.5}>
          <h5 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            Feedback Panel:
          </h5>
        </TextAnimation>
  
        <TextAnimation delay={26 - 9.5}>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-4xl">
            When an incorrect input or misunderstanding occurs, the feedback panel will activate. This panel will highlight your error and provide a detailed explanation to help you understand the correct concept or solution. Pay close attention to the feedback to improve your learning experience.
          </p>
        </TextAnimation>
      
        </section>
        
        
        </>
    )
}

export default Explanations;