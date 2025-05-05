📖 "Holy Broccoli" - Recipe Book App


A full-stack web application for managing a personal recipe book. Users can browse recipes by category, view details, and leave feedback for each recipe.

📌 Project Overview

This application allows users to:

	•	Browse recipes categorized into Salads, Soups, Main Dishes, Desserts, and Drinks
	•	View detailed information about each recipe, including ingredients, instructions, and images
	•	Leave feedback (reviewer name, rating, and comment) for individual recipes
	•	Search recipes by title
	•	Smoothly navigate the app with clean routing and dynamic page rendering

🚀 Tech Stack


Frontend

	•	React with TypeScript
	•	React Router DOM for routing
	•	Axios for API requests
	•	Bootstrap & Custom CSS for UI styling

Backend

	•	Express with TypeScript
	•	Prisma ORM
	•	PostgreSQL database
	•	CORS & Morgan middlewares

Other

	•	Vite for frontend dev server
	•	dotenv for environment configuration

🗂️ Project Structure


recipe/


├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── index.css
│   └── vite.config.ts
│


├── server/
│   ├── src/
│   │   ├── db.ts
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── config.ts
│   │   ├── error-handling.ts
│   │   ├── generated/
│   │   ├── routes/
│   │   │   ├── recipe.routes.ts
│   │   │   ├── feedback.routes.ts
│   │   │   └── index.routes.ts
│   │   └── prisma/
│   │       └── schema.prisma
│   └── package.json
│


└── README.md

📖 Main Features

	•	📑 Browse Recipes: Categorized recipe listing with images and titles
	•	🔍 Search Recipes: Real-time filtering by recipe title
	•	📖 Recipe Details Page: See ingredients, preparation instructions, and existing feedback
	•	📝 Feedback System: Add, edit, and delete feedback for recipes
	•	📱 Responsive Design: Mobile and desktop-friendly layout
	•	📜 Error Handling: Custom 404 and error routes on both frontend and backend

📚 Future Improvements

	•	User authentication (registration, login)
	•	Image uploads via Cloudinary or local storage
	•	Pagination for large recipe collections
	•	Ratings summary (average score display)
