import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 p-8 max-w-6xl mx-auto rounded-lg ">
      <h1 className="text-4xl font-semibold text-center text-red-600 mb-8">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Introduction</h2>
        <p className="text-lg mb-4">
          At WonByBid, your privacy is our top priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services. By accessing and using our platform, you agree to the collection and use of your information as described in this policy.
        </p>
        <p className="text-lg mb-4">
          We are committed to ensuring that your privacy is protected. If you have any concerns about the way your information is handled, please contact us immediately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Information We Collect</h2>
        <p className="text-lg mb-4">
          We collect various types of information to provide and improve our services. The information we collect includes:
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li>Personal Identification Information: Name, email address, phone number, etc.</li>
          <li>Account Information: User credentials, preferences, and account settings.</li>
          <li>Usage Data: Information on how you interact with our platform (e.g., contests entered, bid activity, etc.).</li>
          <li>Payment Information: If you participate in cash contests, we may collect billing and payment information.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">How We Use Your Information</h2>
        <p className="text-lg mb-4">
          We use the collected information to:
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li>Provide and maintain our services, including processing contest entries and managing accounts.</li>
          <li>Enhance your user experience by personalizing content and recommendations.</li>
          <li>Communicate with you about contests, updates, and other relevant information.</li>
          <li>Improve our platform's performance and develop new features.</li>
          <li>Ensure the security of our platform by detecting and preventing fraudulent or unauthorized activities.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Data Sharing and Disclosure</h2>
        <p className="text-lg mb-4">
          We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li>With service providers and business partners who assist us in operating the platform and delivering our services.</li>
          <li>To comply with legal obligations or to protect our rights, property, and safety, or the rights of our users.</li>
          <li>In the event of a business transfer, such as a merger, acquisition, or sale of assets, where your information may be part of the transaction.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Cookies and Tracking Technologies</h2>
        <p className="text-lg mb-4">
          We use cookies and similar tracking technologies to track user activity on our platform and store certain information. These technologies help us improve our platform's functionality and provide a better user experience.
        </p>
        <p className="text-lg mb-4">
          You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Data Security</h2>
        <p className="text-lg mb-4">
          We take the security of your personal information seriously. We implement reasonable technical and organizational measures to protect your information from unauthorized access, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
        </p>
        <p className="text-lg mb-4">
          While we strive to protect your data, we cannot guarantee its absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Your Rights</h2>
        <p className="text-lg mb-4">
          Depending on your location, you may have certain rights regarding your personal information, including the right to:
        </p>
        <ul className="list-disc pl-6 text-lg mb-4">
          <li>Access and correct your personal data.</li>
          <li>Request deletion of your personal information.</li>
          <li>Opt out of receiving marketing communications.</li>
          <li>Withdraw your consent for processing your personal data at any time.</li>
        </ul>
        <p className="text-lg mb-4">
          To exercise any of these rights, please contact us at the provided contact details.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Children's Privacy</h2>
        <p className="text-lg mb-4">
          Our platform is not intended for children under the age of 18. We do not knowingly collect or solicit personal information from children. If you are a parent or guardian and believe that we have collected personal information from a child, please contact us immediately, and we will take appropriate steps to delete such information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-lg mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of the policy.
        </p>
        <p className="text-lg mb-4">
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>
      </section>

      <section className="text-center">
        <p className="text-lg">
          If you have any questions or concerns about our Privacy Policy, please feel free to contact us.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
