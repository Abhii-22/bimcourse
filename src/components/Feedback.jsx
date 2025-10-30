import React, { useEffect, useState } from "react";
import "./Feedback.css";

const feedbacks = [
  { name: "Rahul ", text: "The BIM model provided incredible clarity throughout the project. We could visualize every detail before construction began, which saved us time and money." },
  { name: "Priya prakash", text: "Your team’s coordination using BIM was outstanding. It helped avoid clashes between structural and MEP elements, making the execution seamless." },
  { name: "Amit kumar", text:"We appreciated the transparency and regular updates. The 3D walkthroughs helped our stakeholders understand the design better than traditional drawings." },
  { name: "Sneha Patel", text:"The project was delivered on time and within budget, thanks to the precision of your BIM planning. Truly professional work!"},
  { name: "Ravi Kumar", text:"Your BIM approach helped us make informed decisions early in the design phase. The data-driven insights were a game-changer." },
  { name: "Neha Gowda", text: "We were impressed by how quickly your team responded to feedback and incorporated changes into the model. It made us feel heard and valued."},
  { name: "Vikram Joshi", text:"The clash detection and quantity take-offs were spot on. It reduced site errors and improved procurement efficiency."},
  { name: "Kavya ", text: "Your BIM execution plan was clear and collaborative. It aligned perfectly with our goals and made the process smooth."},
  { name: "Saurabh Jain", text: "The integration of sustainability analysis into the BIM model helped us meet our green building targets. Excellent work!" },
  { name: "Ananya Das", text: "We’ve worked with other firms before, but your BIM capabilities and client engagement stood out. Looking forward to future projects together." },
];

// Typing speed (ms per character) and rotation duration derived from longest text
const TYPING_SPEED = 20; // faster typing so long messages finish
const ROTATION_MS = Math.max(...feedbacks.map(f => f.text.length)) * TYPING_SPEED + 1200; // add pause after complete

const TypewriterCard = ({ text, name }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setShowName(false);
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setShowName(true);
      }
    }, TYPING_SPEED);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <div className="feedback-card">
      <p className="feedback-text">
        “{displayedText}”<span className="cursor"></span>
      </p>
      {showName && <h4 className="feedback-name">- {name}</h4>}
    </div>
  );
};

const Feedback = () => {
  const [indexes, setIndexes] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) => [
        (prev[0] + 3) % feedbacks.length,
        (prev[1] + 3) % feedbacks.length,
        (prev[2] + 3) % feedbacks.length,
      ]);
    }, ROTATION_MS); // Rotate after typing completes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="feedback-section">
      <h2>What Our Clients Say</h2>
      <div className="feedback-row">
        {indexes.map((feedbackIndex, i) => (
          <TypewriterCard
            key={feedbackIndex} // Use a more stable key
            text={feedbacks[feedbackIndex].text}
            name={feedbacks[feedbackIndex].name}
          />
        ))}
      </div>

      <div className="stats-section">
        <h3>🌟 1000+ Happy Learners</h3>
        <p>Building successful careers with real-world training and placements.</p>
      </div>
    </section>
  );
};

export default Feedback;
