import React from "react";
import "../styles/Home.css";
import vector from "../assets/Vector.png";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import vector4 from "../assets/vector4.png";
import mac from "../assets/mac.png";
import board from "../assets/board.png";
import clock from "../assets/clock.png";
import shape from "../assets/Shape.png";

import red from "../assets/red.png";
import blue from "../assets/blue.png";
import green from "../assets/green.png";
import orange from "../assets/orange.png";
import pink from "../assets/pink.png";
import violet from "../assets/violet.png";
import money from "../assets/money.png";

const Home = () => {
  const features = [
    {
      id: 1,
      title: "Real-Time Collaboration",
      description:
        "Work together with colleagues to create lesson plans in real-time. No more waiting for updates!",
      image: money,
      color:"#7EA0E7"
    },
    {
      id: 2,
      title: "Curriculum Mapping",
      description:
        "Easily align your lesson plans with state and national educational standards using our intuitive mapping tools.",
      image: violet,
      color:"#7562E0"
    },
    {
      id: 3,
      title: "Assessment Builder",
      description:
        "Create quizzes and assignments linked directly to your lesson objectives, making assessment a breeze.",
      image: violet,
      color:"#FA865F"
    },
    {
      id: 4,
      title: "Feedback Loop",
      description:
        "Receive constructive feedback from peers on your lesson plans to enhance their effectiveness.",
      image: green,
      color:"#5BC17F"
    },
   
    {
      id: 5,
      title: "Version Control",
      description:
        "Track changes to your lesson plans with version history, ensuring you can always revert if needed.",
      image: red,
      color:"#FF553E"
    },
    {
      id: 6,
      title: "Resource Library",
      description:
        "Access a vast library of teaching resources, including documents, videos, and images, all in one place.",
      image: orange,
      color:"#FF92D7"
    }
  ]
  return (
    <>
      <section id="home">
        <img className="vector4" src={vector4} />

        <img src={vector} className="vector" />
        <img src={clock} className="clock" />

        <div className="content">
          <h1 className="heading-collab">
            A Collaborative Lesson Planner that you Need
          </h1>
          <p className="unite-para">
            Unite with Educators to Collaboratively Design Engaging and<br></br>{" "}
            Impactful Lesson Plans That Inspire Future Generations!
          </p>
          <img className="shape" src={shape} />
          <button className="freetrail-button">Start Free Trial</button>
        </div>
        <img className="mac" src={mac} />
        <img className="vector2" src={vector2} />

        <img className="board" src={board} />
        <img className="vector3" src={vector3} />
        <img className="vector1" src={vector1} />
      </section>

      <div class="stats-container">
        <div>
          <h1>1k+</h1>
          <p>Active User</p>
        </div>
        <div>
          <h1>2k+</h1>
          <p>Download</p>
        </div>
        <div>
          <h1>1k</h1>
          <p>Customer</p>
        </div>
      </div>

      <section id="features">
       <div className="features-container">
       <h1>Some Excellent Features For You</h1>
        <p className="power-feature">
          Powerful features designed to enhance collaboration, streamline
          planning, and simplify <br></br>resource sharing. Elevate your teaching
          experience with ease and efficiency!
        </p>
       </div>

       <div className="feature-contain">
      {features.map((feature) => (
        <div 
          key={feature.id} 
          className="feature-card" 
          style={{ backgroundColor: feature.color }}
        >
          <img src={feature.image} alt={feature.image} />
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-para">{feature.description}</p>
        </div>
      ))}
    </div>

      </section>
    </>
  );
};

export default Home;
