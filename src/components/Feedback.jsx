import React, { useEffect, useState } from "react";
import "./Feedback.css";

const feedbacks = [
  { name: "Rahul Sharma", text: "Amazing learning experience! The training was practical and easy to understand." },
  { name: "Priya Verma", text: "Loved the real-world examples and projects. Great for career growth!" },
  { name: "Amit Singh", text: "Professional trainers and very helpful team. Highly recommended!" },
  { name: "Sneha Patel", text: "Excellent platform to gain industry-level skills quickly." },
  { name: "Ravi Kumar", text: "The placement support was very impressive and genuine." },
  { name: "Neha Gupta", text: "The trainers explained everything clearly with patience and examples." },
  { name: "Vikram Joshi", text: "The UI/UX and flow of the sessions were amazing. Great job!" },
  { name: "Kavya Iyer", text: "Hands-on projects helped me a lot in understanding complex concepts." },
  { name: "Saurabh Jain", text: "It was a great experience. I improved my technical as well as soft skills." },
  { name: "Ananya Das", text: "Wonderful mentors and learning environment. Highly satisfied!" },
];

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
    }, 40);

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
    }, 5000); // Change all cards every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="feedback-section">
      <h2>What Our Students Say</h2>
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
