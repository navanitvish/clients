import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 p-8 max-w-6xl mx-auto rounded-lg ">
      <h1 className="text-4xl font-semibold text-center text-red-600 mb-8">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">What We Do</h2>
        <p className="text-lg mb-4">
          At WonByBid, we bring you an innovative bidding platform where strategy meets skill. Our contests are designed to deliver quick results and provide a thrilling experience for all participants. Whether you're a seasoned player or a beginner, WonByBid offers something for everyone.
        </p>
        <p className="text-lg mb-4">
          Gone are the days of waiting endlessly for outcomes. With real-time updates and transparent rankings, you can see the action unfold instantly. Compete, strategize, and win—all within minutes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Our Contests</h2>
        <p className="text-lg mb-4">We offer two exciting types of contests to suit different preferences:</p>
        
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <h3 className="text-2xl font-semibold text-red-600">Simple Contests</h3>
            <ul className="list-disc pl-6 text-lg">
              <li>Perfect for beginners or players who prefer straightforward gameplay.</li>
              <li>Participate by placing bids with clear rules and immediate results.</li>
              <li>Focus on placing the highest unique bid to win.</li>
            </ul>
          </li>
          <li>
            <h3 className="text-2xl font-semibold text-red-600">Private Contests</h3>
            <ul className="list-disc pl-6 text-lg">
              <li>Tailored for players who want a personalized experience.</li>
              <li>Create your own contest, set the rules, entry fees, and prize structure.</li>
              <li>Invite friends and family to compete in a fun, custom environment.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Cash Contests</h2>
        <p className="text-lg mb-4">With WonByBid, you can turn your strategies into real rewards through various cash contests:</p>
        <ul className="list-disc pl-6 text-lg space-y-4">
          <li><strong>Fixed Entry Fee Contests:</strong> Fair and competitive contests with predefined entry fees and clear prize pools.</li>
          <li><strong>Private Contests:</strong> Set your own entry fees and prize distribution. Customize and play with your own group for a unique experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Practice Contests</h2>
        <p className="text-lg mb-4">For those new to bidding, start with Practice Contests:</p>
        <ul className="list-disc pl-6 text-lg space-y-4">
          <li><strong>No Entry Fee:</strong> Explore the gameplay for free and learn the basics.</li>
          <li><strong>Quick Learning:</strong> Get fast results, understand the rules, and improve your bidding strategy before moving to cash contests.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Legal Position</h2>
        <h3 className="text-2xl font-semibold text-red-600 mb-4">Is Playing WonByBid Legal?</h3>
        <p className="text-lg mb-4">
          Yes, WonByBid is a game of skill, making it completely legal under Indian laws. Games that require skill are distinctly different from games of chance and are allowed across most states.
        </p>
        <p className="text-lg mb-4">
          However, due to state-specific laws, players from Assam, Sikkim, Nagaland, Odisha, Telangana, and Andhra Pradesh cannot participate in cash contests. Players from these states can still enjoy Practice Contests.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Why Choose WonByBid?</h2>
        <ul className="list-disc pl-6 text-lg space-y-4">
          <li><strong>Quick Results:</strong> Experience the excitement of winning in minutes—no waiting!</li>
          <li><strong>Transparency:</strong> Real-time updates, live rankings, and clear rules ensure fairness.</li>
          <li><strong>Engagement:</strong> Compete in Simple Contests or create Private Contests for a personalized experience.</li>
          <li><strong>Skill-Based Gaming:</strong> Your strategy and decisions drive your success.</li>
          <li><strong>Legal and Safe:</strong> Fully compliant with Indian laws, offering a secure and trustworthy platform.</li>
        </ul>
      </section>

      <section className="text-center">
        <p className="text-lg">For more information, contact us and start your journey with WonByBid today. Whether you're here for quick results or a personalized challenge, we’ve got you covered!</p>
      </section>
    </div>
  );
};

export default AboutUs;
