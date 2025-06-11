import React from 'react';

const CorsError = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6">
      <div className="bg-white bg-opacity-10 p-8 shadow-2xl rounded-2xl text-center backdrop-filter backdrop-blur-lg border border-gray-600 max-w-md">
        <h1 className="text-5xl font-extrabold mb-4 text-red-500 animate-pulse">CORS Error</h1>
        <p className="text-lg mb-4">Oops! It looks like CORS is not enabled in your browser.</p>
        <p className="text-md mb-6 opacity-80">To access Bite Rush, please enable CORS.</p>

        <a
          href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
          className="mt-4 px-5 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-transform transform hover:scale-105 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Install CORS Extension 🚀
        </a>

        <p className="text-md mt-6 mb-2 opacity-90">Already installed and enabled?</p>
        <button
          onClick={handleRefresh}
          className="px-5 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105"
        >
          Refresh Page 🔄
        </button>
      </div>
    </div>
  );
};

export default CorsError;
