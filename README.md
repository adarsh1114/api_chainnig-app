# api_chaining app he goal of this project was to create a responsive web app that lets users chain API calls together. 
Here’s a brief breakdown of the approach:

React Components: The app was built using functional components. The main component ApiSequenceBuilder manages the API requests and user inputs.

API Chaining: The application chains two API requests together. First, we fetch user data (e.g., GET /users), then use the fetched userId in a second API call (e.g., POST /posts). The response from the second API call is displayed in real-time.

State Management: The app uses the useState hook for managing the form inputs and API responses.

Tailwind CSS: Tailwind classes were used to build a clean, responsive UI with dark mode by default. The layout includes three main sections:

Sidebar: For adding API sequences.
Request section: For entering input parameters like title and body.
Response section: Displays the API response dynamically.
Design and Responsiveness: The interface is designed to be responsive and visually appealing, utilizing modern design principles and dark mode for better UX.
