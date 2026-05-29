🔗 Linko – All Links in One Place
A full-stack web application that allows users to save, categorize, and manage their important web links in one centralized place. Built with a Node.js + Express backend and MongoDB database, with a login system to keep each user's links private and organized.

🚀 Features

🔑 User login and registration system
🌐 Save links with Title, URL, Category, and Description
🗂️ Organize links by category for easy navigation
🗄️ MongoDB database for persistent storage
📱 Fully responsive design across desktop and mobile
🌍 Cross-browser compatible (Chrome & Firefox tested)
⚡ Clean and intuitive interface for fast navigation


🛠️ Tech Stack
LayerTechnologyFrontendHTML5, CSS3 (Flexbox, Grid, Media Queries), JavaScriptBackendNode.js, Express.jsDatabaseMongoDBVersion ControlGit, GitHub

📁 Project Structure
Linko/
│
├── public/
│   ├── index.html       # Main UI
│   ├── style.css        # Styling & responsive layout
│   └── script.js        # Frontend logic
│
├── routes/
│   └── auth.js          # Login/register routes
│   └── links.js         # Link CRUD routes
│
├── models/
│   └── user.js          # MongoDB user model
│   └── link.js          # MongoDB link model
│
├── server.js            # Express server entry point
├── package.json
└── README.md

⚙️ Getting Started
Prerequisites
Make sure you have the following installed:

Node.js
MongoDB (local or Atlas)
Git

Installation

Clone the repository

bash   git clone https://github.com/root2-45/Linko.git
   cd Linko

Install dependencies

bash   npm install

Set up MongoDB

Make sure MongoDB is running locally, or use a MongoDB Atlas connection string.
Update your DB connection string in server.js or a .env file.


Run the application

bash   node server.js

Open in browser

   http://localhost:3000

📌 How It Works

Register or log in to your account
Add a new link by entering:

Title – Name of the link
URL – The web address
Category – Group your links (e.g. Work, Study, Entertainment)
Description – A short note about the link


View and manage all your saved links in one place
Navigate quickly by category


🖥️ Screenshots

Add screenshots of your login page and link dashboard here.


🔮 Future Improvements

Search and filter links by keyword
JWT-based authentication
Deployment on Render or Railway
Edit and delete individual links
Import/export bookmarks


👩‍💻 Author
Rutuja Shivaji Shingote
📧 rutujashingote5@gmail.com
🌐 GitHub
