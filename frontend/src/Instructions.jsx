import React from 'react';

function InstructionsPage() {
  return (
    <div style={{ margin: '20px', marginTop: '25%',  color: '#333', minHeight: '150%', overflow: 'auto', backgroundColor: 'white', padding: '20px'  }}>
      <h1>Welcome to the CS100 Virtual Teaching Assistant Chat!</h1>
      <p>This page will guide you through the interface and explain how to use the chat functionalities effectively.</p>
      
      <section style={{ marginBottom: '20px' }}>
        <h2>Query Box</h2>
        <p>The Query Box is where you can type in your questions or problems that you need assistance with. Simply enter your query and press "Let's Find Out" to submit it.</p>
        <p>We have 2 modes mainly, a mode where david tells you the syntax in detail, you can ask this by using the keyword "syntax" in your querris. and the second mode is Q/A mode, where david breaks down your question into multiple steps and at each step, asks you a question of how you would attempt it. if you are correct, it proceeds, if you are incorrect or dont know, then the feedback panel displays the correct output for your understanding. Note: once this starts, your outputs will be treated like response to the questions being asked only.</p>
      </section>
      
      <section style={{ marginBottom: '20px' }}>
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
