import React from "react";
import Section from "../components/Section";

function Home() {
  return (
    <Section title=<h3>Discover Your Next Favourite Find✨ </h3>>
      <div className="home-image-container">
        <img
          src="https://media.istockphoto.com/id/160295074/vector/electronics-shopping.jpg?s=612x612&w=0&k=20&c=tq6irpToij9B620GgKRXDvMmenkYuxAt3LLdMAS8RCo="
          alt="Shop Banner"
        />
        <p className="home-text">Everything You Need, All in One Nest💝</p>
      </div>
    </Section>
  );
}

export default Home;
