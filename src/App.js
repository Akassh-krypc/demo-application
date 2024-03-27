import React, { useState } from 'react';
import './App.css'; // Importing the app.css file for styling
import axios from 'axios'; 

const NFTMintingDapp = () => {
  // State variables to hold input values
  const [nftName, setNFTName] = useState('');
  const [nftDescription, setNFTDescription] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
 
  // Function to handle generating
  const handleGenerate = () => {
    const apiKey = ""; // Your API key
    
    // API endpoint for image generation
    const apiUrl = "https://api.edenai.run/v2/image/generation";

    // Request options
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      data: {
        providers: "openai",
        text: prompt,
        resolution: "512x512",
        fallback_providers: "",
      }
    };

    // Make the API call
    axios.request(apiUrl, requestOptions)
      .then(response => {
        // Log the response
        console.log(response.data);

        // Update the generatedImage state with the URL received from the API
        setGeneratedImage(response.data.url);
      })
      .catch(error => {
        // Log any errors
        console.error(error);
      });
  };

  
  // Function to handle minting
  const handleMint = () => {
    // Implement minting logic here
    console.log('Minting NFT with:', nftName, nftDescription, recipientAddress);
  };
 
  return (
    <div className="container">
            {/* Logo */}
            <div className="logo">
        <img src="https://krypcore.com/static/media/krypcore-logo%201.89de1daa25f3f59d11e07c60ec8f0867.svg" alt="Logo" />
      </div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Your NFT Minting Platform using Gen AI</h1>
          <p>Create and showcase your unique digital art with ease.</p>
          {/* <button>Get Started</button> */}
        </div>
        {/* <div className="hero-illustration">
          <img src="illustration.png" alt="NFT Illustration" />
        </div> */}
      </div>
 
      {/* Left Half: Generated NFT Image */}
      <div className="left-half">
        {generatedImage && (
          <div className="nft-image">
            <img src={generatedImage} alt="Generated NFT" />
          </div>
        )}
      </div>
 
      {/* Right Half: NFT Details and Mint Button */}
      <div className="right-half">
        <div className="nft-details">
          <input
            type="text"
            placeholder="NFT Name"
            value={nftName}
            onChange={(e) => setNFTName(e.target.value)}
          />
          <input
            type="text"
            placeholder="NFT Description"
            value={nftDescription}
            onChange={(e) => setNFTDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Recipient Address"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
          />
          {/* <button onClick={handleMint}>Mint</button> */}
          <button onClick={handleMint}>Mint</button>
        </div>
 
        {/* Prompt Box and Generate Button */}
        <div className="prompt-container">
          <div className="prompt-input">
            <input
              type="text"
              placeholder="Enter Prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <div className="generate-button">
            <button onClick={handleGenerate}>Generate</button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default NFTMintingDapp;
 