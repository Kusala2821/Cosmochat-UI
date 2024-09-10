# CosmoChat UI

## Overview:
CosmoChat UI is a user-friendly frontend application designed to facilitate seamless interactions between users and an AI chatbot powered by OpenAI's language model. The platform provides an intuitive chat interface where users can naturally ask questions and receive intelligent, real-time responses. To enhance user experience, CosmoChat UI incorporates robust features such as activity tracking, which logs interactions and displays an activity timeline within the session. The application also includes comprehensive session management tools, allowing users to easily start, resume, and end chat sessions while maintaining a consistent flow of conversation. These features collectively ensure that users have a smooth and engaging experience while interacting with the AI chatbot.

## Technologies and Tools used:
* React.js
* Material UI
* Axios
* OpenAI
CosmoChat UI is developed using a modern technology stack to deliver a responsive and efficient user experience. The frontend is built with React.js, a popular JavaScript library for building user interfaces, which allows for the creation of dynamic and interactive components. For styling and design, Material UI is used, providing a rich set of pre-designed components and themes that ensure a consistent and visually appealing user interface. To handle API requests and manage data fetching, Axios is employed, offering a promise-based HTTP client that simplifies the process of communicating with external services. The core of the chatbot's functionality is powered by OpenAI, which provides the advanced language model technology enabling natural language processing and AI-driven responses. These tools and technologies are integrated to create a cohesive and powerful platform that allows users to engage seamlessly with the AI chatbot.

## Project Directory Explianation

The explanation of each part of the directory:

1. data: This folder usually contains data files or databases. It might be used to store local JSON files or other data that the application needs to access.
2. node_modules: This is a standard directory for a Node.js project, which contains all the installed dependencies and packages required by your application.
3. public: The public directory typically holds static files like HTML, images, and icons that are directly served by the server. The index.html file that serves as the entry point for the React app usually resides here.
4. src: The src directory is where the main source code of your application lives. Here’s a breakdown of its subdirectories and files:
a. api
session.js: Likely contains functions for handling API calls related to session management, such as starting, ending, or resuming chat sessions.

b. assets: This folder would typically contain static assets like images, fonts, or other resources that are used throughout the application.

c. components: This directory is where reusable UI components are stored. Each folder within represents a different component in your application.
For example:
ActivityChatHistory: Manages the UI and logic related to displaying chat history.
ChatHistory: Likely similar to ActivityChatHistory but might be specific to other parts of the application.
Navigation: Manages the navigation bar or menu of the application.
RexMessage and UserMessage: Handle the display of messages in the chat interface, distinguishing between messages from the AI (Rex) and the user.
WidthError: Likely handles UI errors related to screen width or responsiveness.
d. constants
images.js: Typically contains paths or references to image assets used throughout the application. Constants files generally store static values or configurations that are reused in multiple places.

e. pages
This directory contains different pages or views of your application:
Activity: Manages the activity page, possibly showing user interactions or analytics.
Chat: This page is likely where the main chat interface resides.
EndedChats: Manages the view or history of chats that have been ended.
Home: Likely the landing page or the main entry point after logging in.

f. styles
This folder typically contains CSS or styling files used across the application:
App.jsx: The main application component that likely includes global styles.
config.js: Configuration settings related to styling, such as theme settings.
Layout.jsx: Manages the overall layout structure of the app.
index.jsx: Probably the entry point for styles or imports other styles.

5. config.js: This file likely contains global configuration settings or environment variables for the application.
6. index.jsx: This is typically the main entry point for a React application. It renders the root component into the DOM.
7. Layout.jsx: This component might manage the layout structure that wraps around different pages or views, providing consistency across the application.
8. .env: This file contains environment variables, like API keys or settings, that are accessed by the application.
9. .gitignore: Specifies files and directories that should be ignored by Git, such as node_modules, env files, etc.

10. package-lock.json & package.json
package.json: Lists the project’s dependencies, scripts, and metadata.
package-lock.json: Records the exact versions of installed dependencies, ensuring consistency across different environments.

11. README.md: A markdown file that usually contains documentation or instructions for the project.
12. server.js: This might be a server configuration file, possibly for a backend or for serving the React app. It could handle routing or API calls if your React app has a Node.js server.

# npm start
Purpose: This command is used to start the React application in development mode.
What Happens: When you run npm start, it triggers the start script defined in your package.json file.
This script typically starts a development server (using something like react-scripts) that serves your React application locally.
The application will be accessible via http://localhost:3000 in your web browser.
While the app is running, it will automatically reload the page when you make changes to your source files, allowing for a smooth development experience.

# node ./server.js
Purpose: This command runs the server.js file, which starts a server that handles the backend logic for your application.
What Happens:
The node ./server.js command runs the server.js file using Node.js.
This server script likely sets up an Express.js server or a similar framework, which listens on port 3500.
The server is responsible for handling backend operations, such as managing chat sessions.
It stores chat session data in a file named db.json, located within the data directory. The data is stored in JSON format, which is a common format for storing structured data that can be easily read and manipulated by both the server and frontend.
When you start this server, it will begin listening for incoming HTTP requests on port 3500. This could involve endpoints for starting a new chat session, retrieving chat history, or saving a chat session.

# How They Work Together:
Front-End (React App): When you run npm start, you're working with the frontend of the application, which allows users to interact with the AI chatbot. This React app communicates with the backend server via HTTP requests to perform actions like storing or retrieving chat sessions.
Back-End (Node.js Server): Running node ./server.js starts the server that handles these HTTP requests. The server processes data, stores chat sessions, and serves any necessary backend logic to support the React app.

## Project Setup Instructions:
# Ensure you have Node.js and npm installed:
1.Download and Install Node.js:
Visit the official Node.js website: Node.js.
Download the installer for your operating system (choose the LTS version for stability).
Run the installer and follow the instructions to install Node.js and npm on your machine.

2.Verify Installation:
After installation, open a terminal or command prompt.
Type the following commands to check if Node.js and npm are installed correctly.

node -v
npm -v

# Install Dependencies:
Open a terminal or command prompt in the root directory of your project.
Run the following command to install all required dependencies listed in your package.json file:

npm install

# Add your OpenAI API key:
Obtain an API Key:
    Go to the OpenAI platform: OpenAI API Keys.
    Sign in or create an account, and generate an API key.
Create a .env File:
    In the root directory of your project, create a new file named .env.
    Add your OpenAI API key to this file using the following format:

REACT_APP_OPENAI_API_KEY={YOUR_API_KEY}

Replace {YOUR_API_KEY} with the actual API key you obtained from OpenAI.

# Run Server:
   To start the backend server that stores chat sessions in the data/db.json file, run the following command:
node ./server.js
   This command will start the server on port 3500. The server will handle storing and retrieving chat sessions in JSON format.

# Start React Application:
   In a new terminal or command prompt window (keeping the server running in the background), start the React frontend application by running:
npm start
   This command will launch the React app in development mode. You can access it by navigating to http://localhost:3000 in your web browser.
   The page will automatically reload whenever you make changes to the source files.
   
# Output Screenshots
   Home Page:
   ![Home Page](https://github.com/user-attachments/assets/7bb621c0-b8df-4aad-bc2f-eba9fd66bbea)

   Rex Chat:
   ![Rex Chat](https://github.com/user-attachments/assets/63d87cac-1c0a-4de2-ad23-cacb7d6f1a58)

   Rex chat Response:
   ![Rex Chat Response](https://github.com/user-attachments/assets/f3afa087-541d-48b5-bf62-98ddf6754488)

   Statistics Dashboard:
   ![STatistics Dashboard](https://github.com/user-attachments/assets/d12c2ae3-8e26-4ddf-9f1b-9a54737569f5)




   
   


