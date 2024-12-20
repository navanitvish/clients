import React from 'react';
import {
  Download, PlayCircle, Phone,
} from 'lucide-react';
import AppInstallationSteps from './ApiInstalltion';
import image1 from '../assets/WhatsApp Image 2024-11-11 at 15.09.43_19d63217.jpg';

const WonByBidGuide = () => {
  const downloadSteps = [
    {
      title: "Direct Download",
      description: "Click on the DOWNLOAD NOW button to start downloading Won by Bid app",
      icon: <Download className="w-6 h-6 text-purple-600" />,
    },
    // {
    //   title: "Play Store",
    //   description: "Search 'Won by Bid' on Google Play Store",
    //   icon: <PlayCircle className="w-6 h-6 text-blue-600" />,
    // },
  ];
  const handleDownloadAppClick = () => {
    window.open("https://www.transferx.in/trnsfr.YSloVo", "_blank");
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Header Image */}
      <div className="relative">
        <img src={image1} alt="Download Guide" className="w-full h-[350px] object-cover rounded-b-xl shadow-md" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
          <h1 className="text-4xl text-white font-bold p-6">How to Download the WonByBid App</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="mb-6 text-lg leading-relaxed">
          A Quick Reference Guide to Download the WonByBid App on your device.
        </p>

        <div className="space-y-6">
          {/* Download Options */}
          <div className="bg-white shadow rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold">For Android Users</h3>
            <p>
              You can download WonByBid from the button below.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 p-4">
            <button
              onClick={handleDownloadAppClick}
              className="group flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Download App
              {/* <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" /> */}
            </button>
          </div>
          {/* <AppInstallationSteps /> */}

          {/* Download Steps */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Download Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {downloadSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Guide */}
          <div className="bg-white shadow rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Detailed Guide to Download & Install WonByBid App</h3>
            <p>Once you initiate the APK download, you may see a warning message. This is standard for third-party downloads; rest assured that the WonByBid app is safe and virus-free.</p>
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      
    </div>
    </div>
  );
};

export default WonByBidGuide;
