# Comic News Portal

What if the news looked like it came straight out of a superhero comic?

**Comic News Portal** is a browser-based news reader that reimagines headlines with a bold, comic-style aesthetic. It’s fast, fun, and a little dramatic — exactly how reading the news *should* feel.

If The Daily Bugle had a dev team, this would be their flagship product.

---

## 📰 What It Does

- **Fetches Real-Time News**  
  Pulls top headlines using the [NewsAPI](https://newsapi.org/) — everything from politics to tech to entertainment.

- **Analyzes Sentiment**  
  Uses a built-in machine learning model to gauge the tone of each article (positive, neutral, or negative).

- **Applies Comic Book Filters**  
  Posterized filters and comic-style image effects applied right in your browser. More filters (like edge detection) coming soon!

- **Search & Filter**  
  Easily find articles by keyword or category (business, sports, science, etc.)

- **Discover Related Stories**  
  Click on any article to instantly see similar ones.

- **Fully Responsive**  
  Optimized for mobile, tablets, and desktop — built with modern CSS and component design.

---

## 🛠 Tech Stack

- **React** – component-driven UI
- **TypeScript** – for robust typing and dev experience
- **Tailwind CSS** – rapid, responsive styling
- **Vite** – lightning-fast development environment
- **NewsAPI** – real-time news feed
- **Browser-side ML** – for sentiment detection and basic image filters

---

## 🎨 Comic Vibes

The app gives off strong graphic novel energy:

- Bold, flat colors
- High-contrast posterization on thumbnails
- Panel-like layouts and font styles (hello, Gotham vibes!)
- Fast interactions and instant feedback
- Minimalist UI with dramatic flair

---

## 🚀 How to Run It Locally

1. **Clone the repository**

bash
git clone https://github.com/sid-553/Comic-News-Portal.git
cd Comic-News-Portal
Install dependencies

bash
Copy
Edit
npm install
Set up your API key

Create a .env file in the root:

ini
Copy
Edit
VITE_NEWS_API_KEY=your_api_key_here
Don’t have one? Sign up at newsapi.org for free.

Start the app

bash
Copy
Edit
npm run dev
Then visit http://localhost:5173 in your browser and enjoy the comic-powered news feed!

🌍 Live Demo
Curious? Check it out live here:
https://dapper-pothos-c5b358.netlify.app

📁 Project Structure
less
Copy
Edit
src/
├── components/       // UI components like panels, buttons, article previews
├── utils/            // Sentiment analysis + comic-style image filter
├── App.tsx           // Main app logic
├── main.tsx          // Entry point
├── index.css         // Tailwind setup + custom styles

👨‍💻 About
Built by Siddharth Nandan Lal
GitHub: @sid-553

Whether you're a superhero fan or just tired of boring news layouts, this project brings some much-needed fun to current events. Feel free to fork, star, or contribute!
