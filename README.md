# Celestial Forge
Overview

Celestial Forge is a web-based interactive platform designed to demonstrate modern front-end and backend integration through a clean, responsive interface and real-time database interaction. The project allows users to submit messages, view reply history, and interact with shared data that is securely stored and retrieved from a backend service.

This project serves both as a functional community-style message board and as a learning-focused full-stack web application. By combining HTML, CSS, JavaScript, and a backend API, Celestial Forge showcases how dynamic, user-driven websites can be built with real-time data handling, validation, and security policies. The platform is designed to be simple to use while remaining scalable for future feature expansion.

Design Process
Target Audience

Celestial Forge is designed for users who want a straightforward, interactive web platform where they can:

Submit messages or replies

View previously posted messages in real time

Interact with shared data stored securely online

The interface is intentionally minimal and intuitive, ensuring that first-time users can understand and use the website without the need for instructions.

User Goals

Users of Celestial Forge want to:

Easily submit a username and message

View existing messages without refreshing the page

Interact with dynamic content retrieved from a database

Access the website across multiple devices and screen sizes

Why This Project Works

Celestial Forge helps users achieve these goals by:

Using clear UI components and a structured layout

Connecting directly to a backend API for data storage and retrieval

Updating page content dynamically using JavaScript

Enforcing data integrity and security using backend validation and Row Level Security

User Stories

As a visitor, I want to enter a username so that my messages are identifiable.

As a user, I want to submit a message so that I can participate in the discussion.

As a user, I want to view previous replies so that I can understand the conversation history.

As a user, I want the site to work on both desktop and mobile devices so that I can use it anywhere.

Wireframes / Mockups

Wireframes were created before development to plan layout, user flow, and interface structure.

Adobe XD wireframes are included in a dedicated folder within the project directory

(Alternatively, an Adobe XD share URL can be provided if required)

Features
Existing Features

Username Input – allows users to identify themselves before posting messages

Message Submission Form – allows users to submit messages to the backend database

Replies History Panel – displays previously submitted messages retrieved via the API

Dynamic Content Updates – updates content without page reloads using JavaScript

Backend Validation & Security – enforces valid data entry through backend rules and policies

Features Left to Implement

User authentication (login and logout)

Message editing and deletion

Pagination or “load more” functionality for long message histories

User profile pages

Real-time updates using database subscriptions

Technologies Used

HTML5
Used to structure the content of the website.

CSS3 / Bootstrap 5
Used for layout, styling, responsiveness, and UI components.

JavaScript (Vanilla JS)
Used to handle user interactions, API requests, and dynamic DOM updates.

Supabase
Used as the backend service for data storage, API access, and Row Level Security (RLS).

Git & GitHub
Used for version control and project management.

Assistive AI

AI tools were used during the development of this project to assist with debugging, learning, and implementing features. The use of AI tools has been documented as required.

ChatGPT

ChatGPT was used to:

Debug JavaScript and API-related issues

Assist with integrating Supabase into frontend JavaScript

Explain and resolve Row Level Security (RLS) errors

Refactor and improve code structure and readability

Screenshots of AI-generated code, explanations, and debugging assistance are included as evidence.

GitHub Copilot

GitHub Copilot was used to:

Assist with writing boilerplate JavaScript and HTML

Suggest function structures and logic during development

Speed up repetitive coding tasks while maintaining developer oversight

All AI-generated code was reviewed, modified, and validated by the developer before use.

Testing
Manual Testing Scenarios
Message Submission Form

Navigate to the main page

Submit the form with empty inputs

Verify that submission fails or an error occurs

Enter a username but no message

Verify that submission is blocked

Enter both a username and message

Verify that the message appears in the replies history

Replies History

Refresh the page and verify that previously submitted messages load correctly

Confirm messages are retrieved from the backend database

Browser & Screen Testing

Tested on Chrome and Microsoft Edge

Tested on desktop and smaller screen sizes using browser developer tools

Layout remains usable and readable across different screen widths

Known Bugs / Issues

Minor styling inconsistencies on certain screen sizes

Error feedback messages could be improved for clearer user guidance

Credits
Content

All written content was created by the developer unless otherwise stated.

Media

No external images were used. Any visuals are self-created or royalty-free.

Acknowledgements

Inspiration came from learning modern full-stack web development concepts

Documentation and tutorials for Supabase and Bootstrap

Guidance and debugging assistance provided by ChatGPT

Development support and code suggestions provided by GitHub Copilot

Repository

GitHub Repository:
https://github.com/Mago2423/CelestialForge