import React from "react";

const WonByBidRankingGuide = () => {
  return (
    <div className="bg-white p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-red-500">
        Ranking System in WonByBid: Detailed Guide
      </h1>
      <p className="text-gray-700 mb-6">
        The Ranking System in WonByBid contests determines winners based on
        unique bids and their values, ensuring fair competition.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-500">How Ranking Works</h2>
        <ol className="list-decimal pl-6 text-gray-700">
          <li>
            <h3 className="font-bold mb-2 text-red-500">Highest Unique Bids First</h3>
            <p>
              The highest bid that is unique (not duplicated by others) ranks
              first. Subsequent unique bids are ranked in descending order.
            </p>
          </li>
          <li>
            <h3 className="font-bold mb-2 text-red-500">Non-Unique Bids</h3>
            <p>
              Bids that are duplicated (i.e., more than one participant places
              the same amount) are not ranked unless unique bids are
              insufficient to fill all ranks.
            </p>
          </li>
          <li>
            <h3 className="font-bold mb-2 text-red-500">Live Ranking Updates</h3>
            <p>
              The system updates rankings in real time, showing the current
              leader and how bids are positioned during the contest.
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-500">Steps in the Ranking Process</h2>
        <ol className="list-decimal pl-6 text-gray-700">
          <li>
            <h3 className="font-bold mb-2 text-red-500">Identify Unique Bids</h3>
            <p>
              The first step is to find bids that occur only once. These bids
              are ranked from highest to lowest.
            </p>
          </li>
          <li>
            <h3 className="font-bold mb-2 text-red-500">
              Handle Duplicated Bids (If Needed)
            </h3>
            <p>
              If there are not enough unique bids to fill all the ranks,
              duplicated bids are considered, ranked by their value.
            </p>
          </li>
          <li>
            <h3 className="font-bold mb-2 text-red-500">Tie-Breaking Rules</h3>
            <p>
              If two or more participants have the same unique bid amount (rare
              but possible due to timing), the prize for the tied rank is
              equally shared among all participants with the same bid amount.
            </p>
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-500">
          Example with 4 Users and 6 Bids
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse border-[1px] border-blue-400">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-blue-200 text-left">User</th>
                <th className="px-4 py-2 bg-blue-200  text-center">Bid Amount</th>
                <th className="px-4 py-2 bg-blue-200 text-center">
                  Occurrences
                </th>
                <th className="px-4 py-2 bg-blue-200 text-left">Feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Ravi</td>
                <td className="px-4 py-2 border-b text-center">₹9.99</td>
                <td className="px-4 py-2 border-b text-center">1</td>
                <td className="px-4 py-2 border-b">Highest and Unique</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Priya</td>
                <td className="px-4 py-2 border-b text-center">₹9.97</td>
                <td className="px-4 py-2 border-b text-center">1</td>
                <td className="px-4 py-2 border-b">Not Highest but Unique</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Neha</td>
                <td className="px-4 py-2 border-b text-center">₹9.96</td>
                <td className="px-4 py-2 border-b text-center">1</td>
                <td className="px-4 py-2 border-b">Not Highest but Unique</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Amit</td>
                <td className="px-4 py-2 border-b text-center">₹9.95</td>
                <td className="px-4 py-2 border-b text-center">2</td>
                <td className="px-4 py-2 border-b">Higher but Not Unique</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Ravi</td>
                <td className="px-4 py-2 border-b text-center">₹9.94</td>
                <td className="px-4 py-2 border-b text-center">1</td>
                <td className="px-4 py-2 border-b">Not Highest but Unique</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Neha</td>
                <td className="px-4 py-2 border-b text-center">₹9.95</td>
                <td className="px-4 py-2 border-b text-center">2</td>
                <td className="px-4 py-2 border-b">Higher but Not Unique</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-500">Ranking and Explanation</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse border-[1px] border-blue-400">
            <thead>
              <tr  className="bg-blue-200">
                <th className="px-4 py-2 bg-blue-200 text-left">Rank</th>
                <th className="px-4 py-2 bg-blue-200 text-left">User</th>
                <th className="px-4 py-2 bg-blue-200 text-center">Bid Amount</th>
                <th className="px-4 py-2 bg-blue-200 text-center">Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">1</td>
                <td className="px-4 py-2 border-b">Ravi</td>
                <td className="px-4 py-2 border-b text-center">₹9.99</td>
                <td className="px-4 py-2 border-b">Highest and Unique</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">2</td>
                <td className="px-4 py-2 border-b">Priya</td>
                <td className="px-4 py-2 border-b text-center">₹9.97</td>
                <td className="px-4 py-2 border-b">
                  Unique but lower than ₹9.99
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">3</td>
                <td className="px-4 py-2 border-b">Neha</td>
                <td className="px-4 py-2 border-b text-center">₹9.96</td>
                <td className="px-4 py-2 border-b">
                  Unique but lower than ₹9.97
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">4</td>
                <td className="px-4 py-2 border-b">Ravi</td>
                <td className="px-4 py-2 border-b text-center">₹9.94</td>
                <td className="px-4 py-2 border-b">
                  Unique but lower than ₹9.96
                </td>
              </tr>
            </tbody>
          </table>

          <div className="space-y-2 p-4">
            <h2 className="text-xl font-bold text-red-500">Step 2: Handle Duplicated Bids (If Needed)</h2>
            <ol className="list-decimal pl-6 text-gray-700">
              <li>
                Bids of ₹9.95 were placed by both Amit and Neha, making them not
                unique.
              </li>
              <li>
                Since there are enough unique bids to fill the ranks, duplicated
                bids are not considered for the top ranks.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-500">Final Ranking</h2>
        <p className="text-gray-700 mb-4">
          The ranking is determined solely by unique bids, as there are enough
          to decide the top positions.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full  border-collapse border-[1px] border-blue-400">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-blue-200 text-left">Final Rank</th>
                <th className="px-4 py-2 bg-blue-200 text-left">User</th>
                <th className="px-4 py-2 bg-blue-200 text-center">Bid Amount</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="px-4 py-2 border-b">1</td>
                <td className="px-4 py-2 border-b">Ravi</td>
                <td className="px-4 py-2 border-b text-center">₹9.99</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">2</td>
                <td className="px-4 py-2 border-b">Priya</td>
                <td className="px-4 py-2 border-b text-center">₹9.97</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">3</td>
                <td className="px-4 py-2 border-b">Neha</td>
                <td className="px-4 py-2 border-b text-center">₹9.96</td>
              </tr>
              <tr >
                <td className="px-4 py-2 border-b">4</td>
                <td className="px-4 py-2 border-b">Ravi</td>
                <td className="px-4 py-2 border-b text-center">₹9.94</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-500">
          Live Updates and Dynamic Leaderboard
        </h2>
        <p className="text-gray-700">
          During the contest, rankings update dynamically, showing the current
          highest unique bid and potential winners.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-500">Important Notes</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Unique Bids Are Key: Only unique bids are ranked unless there aren't
            enough unique bids to fill all ranks.
          </li>
          <li>
            Higher Value Wins: Among unique bids, higher values always rank
            above lower ones.
          </li>
          <li>
            Monitor Feedback: Use live feedback to determine if your bid is
            unique and adjust your bids to improve your rank.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-500">Tips to Rank Higher</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Avoid Common Numbers: Numbers like ₹10.00 or ₹5.00 are more likely
            to be duplicated.
          </li>
          <li>
            Start High and Adjust: Begin with a high bid and refine it based on
            feedback.
          </li>
          <li>
            Monitor Rankings: Keep an eye on the leaderboard and adjust your
            strategy if you drop in rank.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2 text-red-500">Conclusion</h2>
        <p className="text-gray-700">
          The WonByBid ranking system ensures fair play by prioritizing unique
          bids and rewarding the highest strategic players. By understanding how
          bids are ranked and using feedback, participants can improve their
          chances of securing top positions and winning prizes.
        </p>
      </section>
    </div>
  );
};

export default WonByBidRankingGuide;