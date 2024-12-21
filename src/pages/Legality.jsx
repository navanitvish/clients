import React from 'react';

const Legality = () => {
  return (
    <div className="bg-gray-900 text-gray-300 p-8 max-w-6xl mx-auto rounded-lg shadow-lg">
      <h1 className="text-4xl font-semibold text-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-8">Legality</h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">Is Playing WonByBid Legal?</h2>
        <p className="text-lg mb-4 border border-gray-700 bg-gray-800 p-4 rounded">
          Yes, WonByBid is a game of skill, making it completely legal under Indian laws. Games that require skill are distinctly different from games of chance and are allowed across most states.
        </p>
        <p className="text-lg mb-4 border border-gray-700 bg-gray-800 p-4 rounded">
          However, due to state-specific laws, players from certain regions are not allowed to participate in cash contests. The following states have restrictions:
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">Restricted States</h2>
        <ul className="list-disc pl-6 text-lg space-y-4">
          <li>Assam</li>
          <li>Sikkim</li>
          <li>Nagaland</li>
          <li>Odisha</li>
          <li>Telangana</li>
          <li>Andhra Pradesh</li>
        </ul>
        <p className="text-lg mt-4 border border-gray-700 bg-gray-800 p-4 rounded">
          Players from these states can still enjoy Practice Contests, which are free of charge and do not involve real money or prizes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">Why Is It Legal?</h2>
        <p className="text-lg mb-4 border border-gray-700 bg-gray-800 p-4 rounded">
          WonByBid operates on the basis of skill-based gaming. Under Indian law, skill-based games are permissible, unlike games of chance, which are typically regulated or banned in certain jurisdictions.
        </p>
        <p className="text-lg mb-4 border border-gray-700 bg-gray-800 p-4 rounded">
          We ensure full compliance with applicable laws, providing a safe and legal platform for players to enjoy competitive gameplay.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4">Your Responsibility</h2>
        <p className="text-lg mb-4 border border-gray-700 bg-gray-800 p-4 rounded">
          While we ensure the legality of our platform, it is also your responsibility to ensure that you comply with local laws regarding online gaming and betting in your region.
        </p>
        <p className="text-lg mb-4 border border-gray-700 bg-gray-800 p-4 rounded">
          If you are unsure about the legality of participating in our contests, we recommend consulting legal professionals in your jurisdiction.
        </p>
      </section>

      <section className="text-center">
        <p className="text-lg border border-gray-700 bg-gray-800 p-4 rounded">
          WonByBid is committed to providing a fair, legal, and secure gaming environment for all users. We encourage responsible gaming and compliance with local laws.
        </p>
      </section>
    </div>
  );
};

export default Legality;