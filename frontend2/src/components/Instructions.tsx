import React, { useState, useEffect } from 'react';
import Introduction from './Introduction';
import Explanations from './Explanations';

function InstructionsPage() {
  const [showIntroduction, setShowIntroduction] = useState(true);

  useEffect(() => {
    // Set a timer to switch components after 9 seconds
    const timer = setTimeout(() => {
      setShowIntroduction(false);
    }, 11000);

    // Clear the timer if the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showIntroduction ? <Introduction /> : <Explanations />}
    </div>
  );
};

export default InstructionsPage;
