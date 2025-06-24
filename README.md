# Sam_new_chatbot
Updated version. capable to hear and generate voice and text during chat.

🚀 Sam Chatbot (STT-TTS) with FastAPI Backend & React Frontend

A speech-to-text (STT) and text-to-speech (TTS) powered chatbot using:

🎤 Speech Recognition

🔡️ Text to Speech (TTS)

⚡ FastAPI backend

⚛️ React.js frontend

📂 Project Structure

🔹 backend
│   🔹 main.py         # FastAPI backend
│   🔹 requirements.txt
│   └── ...
🔹 frontend
│   🔹 src
│   🔹 public
│   └── ...
🔹 README.md

🚀 Getting Started

Prerequisites

Python 3.10+

Node.js (LTS recommended)

pip (Python package installer)

🖥️ Backend Setup (FastAPI)

Navigate to the backend directory:

cd backend

Install the dependencies:

pip install -r requirements.txt

Run the FastAPI server:

uvicorn main:app --host 0.0.0.0 --port 9900 --reload

(Optional) Use ngrok to expose your local server:

ngrok http 9900

💡 Ngrok will provide a public HTTPS URL you can use in the frontend.

⚛️ Frontend Setup (React)

Navigate to the frontend directory:

cd frontend

Install React dependencies:

npm install

Start the React app:

npm start

Update API endpoint in your React project to:

// Example API endpoint
const API_URL = "http://localhost:9900"; // Or use the ngrok URL if tunneling

🌐 Deployment Options

Quick Demo: Use ngrok or localtunnel to share your local server.

Cloud Deployment: Deploy backend to Render, Railway, or any cloud provider for a permanent public URL.

Frontend Hosting: Deploy React app on Vercel, Netlify, or GitHub Pages.

🛠️ Tech Stack

Backend: FastAPI, Python

Frontend: React.js

Speech Processing: SpeechRecognition, pyttsx3

Tunneling: Ngrok (optional)

💜 Notes

SSL certificate files can be generated for production or you can use HTTP for local development.

For demo purposes, HTTPS can be handled by ngrok automatically.

✨ Features

Real-time speech-to-text

Text-to-speech responses

REST API backend with FastAPI

Secure HTTPS tunneling with Ngrok

Modular frontend-backend structure

🤝 Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📧 Contact

For any queries or collaboration:

Developer: Sam

Email: [your email here]
