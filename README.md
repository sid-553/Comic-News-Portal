**Comic News Portal**

Comic News Portal is a browser-based news app that takes boring headlines and turns them into something way cooler — think comic book layouts and superhero flair. If The Daily Bugle had a dev team, this might be their pet project.

What it does:

1. Fetches the latest headlines using the NewsAPI
2. Analyzes the tone of the news using a built-in machine learning model
3. Applies comic-style image filters right in the browser (posterization, with more effects like edge detection coming soon)
4. Lets you click any article to see more like it
5. Includes search and category filters
6. Fully responsive and mobile-ready
7. Built with React, TypeScript, Tailwind CSS, and Vite

How to run it:

Clone the repo
git clone https://github.com/sid-553/Comic-News-Portal.git
cd Comic-News-Portal

Install the dependencies
npm install

Create a .env file with your NewsAPI key
VITE_NEWS_API_KEY=your_api_key_here

Start the app
npm run dev

Then open your browser to http://localhost:5173 and enjoy the comic experience.

Live demo
(https://dapper-pothos-c5b358.netlify.app)

Project structure
src/
├── components/         // UI pieces like article panels and filters
├── utils/              // sentiment analysis + image comic filter
├── App.tsx             // main logic
├── main.tsx            // entry point
├── index.css           // custom styles and Tailwind setup

About
Created by Siddharth Nandan Lal
GitHub: https://github.com/sid-553
