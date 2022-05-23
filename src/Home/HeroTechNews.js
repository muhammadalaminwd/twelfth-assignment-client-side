import React from "react";
import heroTechNews from '../../src/images/herotechnews.jpg'
import PrimaryButton from "../Shared/PrimaryButton";

const HeroTechNews = () => {
  return (
    <div class="hero min-h-screen bg-neutral">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={heroTechNews}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Hero Tech News!</h1>
          <p class="py-6">
            Do You know anything about artificial intelligence? Artificial intelligence (AI) is truly a revolutionary feat of computer science, set to become a core component of all modern software over the coming years and decades. This presents a threat but also an opportunity. AI will be deployed to augment both defensive and offensive cyber operations. Additionally, new means of cyber attack will be invented to take advantage of the particular weaknesses of AI technology. Finally, the importance of data will be amplified by AI’s appetite for large amounts of training data, redefining how we must think about data protection. Prudent governance at the global level will be essential to ensure that this era-defining technology will bring about broadly shared safety and prosperity.
          </p>
          <PrimaryButton>Read More</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HeroTechNews;
