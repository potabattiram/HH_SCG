import React from "react";
import "./HomePage.css";
import profile from "./media/profile.jpg";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-text">
        <h2>Beacon of Spiritual Wisdom</h2>
        <p>
          His Holiness Sundara Chaitanya Goswami Maharaj, a senior disciple of
          His Holiness Lokanath Swami Maharaj, is renowned for his motivational
          speaking and captivating storytelling. As the Director of GIVE (Goloka
          Institute for Vedic Education) and RUPANUGA VIDYAPITH, Maharaj has
          touched the hearts of many with his expert delivery of Bhagavat Katha
          and ecstatic kirtans. His dynamic leadership and youth preaching
          programs have garnered immense popularity worldwide, particularly
          among young followers. With a commitment to spreading Krishna
          consciousness, Maharaj utilizes digital platforms to reach a global
          audience, inspiring and empowering individuals to realize their true
          spiritual potential.
        </p>
        <button className="discover-button">
        <p>Discover</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </button>

      </div>
      <img
        src={profile}
        alt="His Holiness Sundara Chaitanya Goswami Maharaj"
        className="homepage-image"
      />
    </div>
  );
};

export default HomePage;
