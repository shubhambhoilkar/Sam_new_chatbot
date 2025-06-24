# Sam_new_chatbot
Updated version. capable to hear and generate voice and text during chat.

🚀 Sam Chatbot (STT-TTS) with FastAPI Backend & React Frontend

# *\*🚀Sam Chatbot (STT-TTS) with FastAPI Backend & React Frontend\**

A speech-to-text (STT) and text-to-speech (TTS) powered chatbot using:

* *\*Speech Recognition\**\*
* *\*Text to Speech (TTS)\**\*
* *\*FastAPI backend\**\*
* *\*React.js frontend\**\*

---

# *\*Project Structure\**

```text
🔹 backend
│   🔹 main.py         # FastAPI backend
│   🔹 requirements.txt
│   └── ...
🔹 frontend
│   🔹 src
│   🔹 public
│   └── ...
🔹 README.md
```

---

# *\*Getting Started\**

## *\*Prerequisites\**

* Python 3.12
* react.js (LTS recommended)
* `pip` (Python package installer)

---

# *\*Backend Setup (FastAPI)\**

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the FastAPI server:

   ```bash
   uvicorn main:app --host 0.0.0.0 --port 9900 --reload
   ```

4. *(Optional)* Use `ngrok` to expose your local server:

   ```bash
   ngrok http 9900
   ```

   > *\*Ngrok will provide a public HTTPS URL you can use in the frontend.\**

---

# *\*Frontend Setup (React)\**

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install React dependencies:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm start
   ```

4. Update API endpoint in your React project to:

   ```javascript
   // Example API endpoint
   const API_URL = "http://localhost:9900"; // Or use the ngrok URL if tunneling
   ```

---

# *\*Deployment Options\**

* *\*Quick Demo:\**\* Use `ngrok` or `localtunnel` to share your local server.
* *\*Cloud Deployment:\**\* Deploy backend to Render, Railway, or any cloud provider for a permanent public URL.
* *\*Frontend Hosting:\**\* Deploy React app on Vercel, Netlify, or GitHub Pages.

---

# *\*Tech Stack\**

* Backend: *\*FastAPI, Python\**
* Frontend: *\*React.js\**
* Speech Processing: *\*SpeechRecognition, pyttsx3\**
* Tunneling: *\*Ngrok (optional)\**

---

# *\*Notes\**

* SSL certificate files can be generated for production or you can use HTTP for local development.
* For demo purposes, HTTPS can be handled by `ngrok` automatically.

---

# *\*Features\**

* Real-time speech-to-text
* Text-to-speech responses
* REST API backend with FastAPI
* Secure HTTPS tunneling with Ngrok
* Modular frontend-backend structure

---

# *\*Contributions\**

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

# *\*Contact\**

For any queries or collaboration:

* *\*Developer:\**\* Sam
* *\*Email:\**\* *\shubhambhoilkar@gmail.com*

---
