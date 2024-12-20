import React from "react";

const WonByBidGuide = () => {
  return (
    <div className="bg-white rounded-lg p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-red-600">
        Guide to Winning WonByBid Contests
      </h1>
      <p className="text-gray-700 mb-6">
        Participating in a WonByBid contest requires strategic bidding. Here's a
        step-by-step walkthrough to increase your chances of winning.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-600">Understand the Goal</h2>
        <p className="text-gray-700">
          The objective is to place the highest unique bid. A unique bid is one
          that no other participant has placed, and the highest unique bid wins
          the contest.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-600">Entering the Contest</h2>
        <ol className="list-decimal pl-6 text-gray-700">
          <li>
            Choose a contest based on the entry fee, bid range, and bid limit.
          </li>
          <li>Pay the entry fee to secure your spot.</li>
          <li>Review the contest rules carefully.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-600">Placing Your Bids</h2>
        <ol className="list-decimal pl-6 text-gray-700">
          <li>Select a bid amount within the allowed range.</li>
          <li>Place your bid and check the feedback on its status.</li>
          <li>Use the feedback to adjust your bidding strategy.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-600">Understanding Bid Feedback</h2>
        <p className="text-gray-700">
          Each bid will be classified as Highest and Unique, Higher but Not
          Unique, Not Highest but Unique, or Neither Highest nor Unique. Use
          this information to improve your bids.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-600">Example Bidding Process</h2>
        <p className="text-gray-700">
          Walk through a sample bidding scenario to see how the feedback affects
          your strategy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-600">Tips for Smart Bidding</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Start with a high bid close to the upper limit.</li>
          <li>Monitor the feedback and adjust your bids accordingly.</li>
          <li>Avoid common numbers and use unique bids.</li>
          <li>Stay engaged and keep an eye on live updates.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-600">When to Stop Bidding</h2>
        <p className="text-gray-700">
          Every contest has a bid limit (e.g., 10 or 20 bids). Use your bids
          wisely to maximize your chances. Stop bidding once:
          <ul className="list-disc pl-6">
            <li>
              You’ve placed a <strong>highest unique</strong> bid.
            </li>
            <li>
              You’ve reached the bid limit.
            </li>
          </ul>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-600">Winning the Contest</h2>
        <p className="text-gray-700">
          The contest winner is declared after the bidding closes:
          <ul className="list-disc pl-6">
            <li>
              The user with the <strong>highest unique bid</strong> wins.
            </li>
            <li>
              If multiple participants have the same highest bid, the bid is not
              considered unique, and the next highest unique bid wins.
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default WonByBidGuide;
