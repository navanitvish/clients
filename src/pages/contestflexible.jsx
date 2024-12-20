import React from 'react';

const FlexibleContestsInWonByBid = () => {
  return (
    <div className="bg-white rounded-lg max-w-6xl mx-auto  p-6 space-y-4">
      <h2 className="text-4xl font-bold mb-4 text-red-500">Flexible Contests in WonByBid: How It Works</h2>
      <p className="mb-4">In Flexible Contests on WonByBid, the prize pool is fixed, and the maximum number of participants is predefined. The contest dynamically adapts based on the actual number of participants, ensuring fairness and transparency. This model builds trust and loyalty by maintaining a clear and predictable system.</p>

      <h3 className="text-xl font-bold mb-4 text-red-500">Key Features of Flexible Contests</h3>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong className="text-red-500">Fixed Prize Pool:</strong>
          <ul className="list-disc pl-6">
            <li>The total prize pool is predetermined and does not increase with the number of participants.</li>
            <li>Example: A contest has a prize pool of ₹10,000, regardless of whether 50 or 100 players join.</li>
          </ul>
        </li>
        <li>
          <strong className="text-red-500">Maximum Participant Limit:</strong>
          <ul className="list-disc pl-6">
            <li>Each contest has a cap on the number of participants (e.g., 100 players). The contest adapts dynamically if fewer participants join.</li>
            <li>Example: A contest with a cap of 100 players can still run with only 70 participants, with rankings adjusted accordingly.</li>
          </ul>
        </li>
        <li>
          <strong className="text-red-500">Adjusted Rankings:</strong>
          <ul className="list-disc pl-6">
            <li>The percentage of winners is based on actual participation. If fewer participants join, the number of rewarded ranks is reduced to maintain fair distribution.</li>
            <li>Example:
              <ul className="list-disc pl-6">
                <li>With 100 participants: Top 10% (10 players) win prizes.</li>
                <li>With 50 participants: Top 10% (5 players) win prizes.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong className="text-red-500">Transparent Distribution:</strong>
          <ul className="list-disc pl-6">
            <li>Each rank receives a fixed percentage of the prize pool. The distribution remains consistent, regardless of the number of participants.</li>
          </ul>
        </li>
      </ol>

      <h3 className="text-xl font-bold mb-4 text-red-500">Ranking System in Flexible Contests</h3>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          <strong className="text-red-500">Fixed Prize Distribution:</strong>
          <ul className="list-disc pl-6">
            <li>Each contest has a clear prize allocation based on rank percentages.</li>
            <li>Example (₹10,000 prize pool):
              <ol className="list-decimal pl-6">
                <li>1st Place: 40% (₹4,000)</li>
                <li>2nd Place: 25% (₹2,500)</li>
                <li>3rd Place: 15% (₹1,500)</li>
                <li>4th Place: 10% (₹1,000)</li>
                <li>5th Place: 10% (₹1,000)</li>
              </ol>
            </li>
          </ul>
        </li>
        <li>
          <strong className="text-red-500">Participant-Based Adjustments:</strong>
          <ul className="list-disc pl-6">
            <li>If fewer participants join, fewer ranks are rewarded to maintain prize value.</li>
            <li>Example:
              <ul className="list-disc pl-6">
                <li>For 100 players: Top 5 ranks win prizes.</li>
                <li>For 50 players: Top 3 ranks win prizes.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong className="text-red-500">Tie-Breaking with Prize Sharing:</strong>
          <ul className="list-disc pl-6">
            <li>If participants place identical bids for the same rank, the prize is split equally.</li>
            <li>Example: If two players tie for 1st place (₹4,000), each receives ₹2,000.</li>
          </ul>
        </li>
      </ol>

      <h3 className="text-xl font-bold mb-4 text-red-500">Example of a Flexible Contest</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse border-[1px] border-blue-400">
          <thead>
            <tr className='bg-blue-200'>
              <th className="px-4 py-2 border-b border-blue-400">Contest Details</th>
              <th className="px-4 py-2 border-b border-blue-400">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">Prize Pool</td>
              <td className="px-4 py-2 border-b border-blue-400">₹10,000 (fixed)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">Maximum Participants</td>
              <td className="px-4 py-2 border-b border-blue-400">100</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">Entry Fee</td>
              <td className="px-4 py-2 border-b border-blue-400">₹100</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">Allowed Bids</td>
              <td className="px-4 py-2 border-b border-blue-400">₹1.00 to ₹10.00</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">Winner Percentage</td>
              <td className="px-4 py-2 border-b border-blue-400">Top 10% ranks win prizes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-bold mb-4 text-red-500">Scenarios</h3>
      <h4 className="text-lg font-bold mb-2 text-red-500">Scenario 1: Full Participation (100 Players)</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse border-[1px] border-blue-400">
          <thead>
            <tr className='bg-blue-200'>
              <th className="px-4 py-2 border-b border-blue-400">Rank</th>
              <th className="px-4 py-2 border-b border-blue-400">Prize Distribution</th>
              <th className="px-4 py-2 border-b border-blue-400">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">1st</td>
              <td className="px-4 py-2 border-b border-blue-400">40%</td>
              <td className="px-4 py-2 border-b border-blue-400">₹4,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">2nd</td>
              <td className="px-4 py-2 border-b border-blue-400">25%</td>
              <td className="px-4 py-2 border-b border-blue-400">₹2,500</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">3rd</td>
              <td className="px-4 py-2 border-b border-blue-400">15%</td>
              <td className="px-4 py-2 border-b border-blue-400">₹1,500</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">4th</td>
              <td className="px-4 py-2 border-b border-blue-400">10%</td>
              <td className="px-4 py-2 border-b border-blue-400">₹1,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">5th</td>
              <td className="px-4 py-2 border-b border-blue-400">10%</td>
              <td className="px-4 py-2 border-b border-blue-400">₹1,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">With 100 participants, all top 5 ranks are rewarded. Players compete to place the highest unique bid to claim these ranks.</p>

      <h4 className="text-lg font-bold mb-2 text-red-500">Scenario 2: Partial Participation (50 Players)</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse border-[1px] border-blue-400">
          <thead>
            <tr className='bg-blue-200'>
              <th className="px-4 py-2 border-b border-blue-400">Rank</th>
              <th className="px-4 py-2 border-b border-blue-400">Prize Distribution</th>
              <th className="px-4 py-2 border-b border-blue-400">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">1st</td>
              <td className="px-4 py-2 border-b border-blue-400">50%</td>
              <td className="px-4 py-2 border-b border-blue-400">₹5,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">2nd</td>
              <td className="px-4 py-2 border-b border-blue-400">30%</td>
              <td className="px-4 py-2 border-b border-blue-400">₹3,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-blue-400">3rd</td>
              <td className="px-4 py-2 border-b border-blue-400">20%</td>
              <td className="px-4 py-2 border-b border-blue-400">₹2,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">With 50 participants, the system adjusts, and only the top 3 ranks are rewarded. The fixed prize pool is redistributed to ensure competitive value for fewer players.</p>

      <h3 className="text-xl font-bold mb-4 text-red-500">Why Flexible Contests Build Trust</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong className="text-red-500">Fair Competition:</strong> The rules and prize pool are clear, and the system adjusts transparently based on participation.</li>
        <li><strong className="text-red-500">Transparency:</strong> Participants know the fixed prize pool and rank distribution beforehand, ensuring confidence in the process.</li>
        <li><strong className="text-red-500">Consistency:</strong> The same percentage-based prize distribution applies, maintaining fairness regardless of the number of participants.</li>
        <li><strong className="text-red-500">Encourages Loyalty:</strong> By showing clear and dynamic adjustments, players trust the platform and return for more contests.</li>
      </ul>

      <h3 className="text-xl font-bold mb-4 text-red-500">Tips for Success in Flexible Contests</h3>
      <ol className="list-decimal pl-6 mb-4">
        <li><strong className="text-red-500">Aim for Unique Bids:</strong> Place strategic bids that are less likely to be duplicated.</li>
        <li><strong className="text-red-500">Understand the Adjustments:</strong> Be aware of how ranks are rewarded based on participation to refine your strategy.</li>
        <li><strong className="text-red-500">Monitor the Leaderboard:</strong> Use real-time updates to track your position and adjust bids if needed.</li>
      </ol>

      <p>Flexible Contests in WonByBid feature fixed prize pools with a predefined maximum number of participants. The contest dynamically adjusts rankings and prize distribution based on actual participation, maintaining fairness, transparency, and trust. This adaptive system ensures that every participant has a rewarding experience, fostering loyalty and engagement.</p>
    </div>
  );
};

export default FlexibleContestsInWonByBid;