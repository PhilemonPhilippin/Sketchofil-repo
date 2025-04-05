# Sketchofil

## User Story: Daily Sketch Website

### Overview

The Daily Sketch Website is designed for users who love to draw and share their art during their learning journey. It provides daily sketch ideas, allows users to upload their sketches and to comment other people's sketches.

### Features:

- **Daily Sketch Idea**: Every day, a random sketch idea is displayed on the website for users to draw.
- **User Authentication**: Users need to log in to interact with the website and access features like uploading sketches.
- **Sketch Upload**: Users can upload photos of their sketches along with descriptions or stories behind them.
- **Sketch Attributes**: Sketches can be:
  - Open to Comments or Closed to Comments.
  - Publicly Visible or Private.
- **Home Page**: Displays all public sketches, organized by day, in an infinite scroll layout.
- **Comments**: Users can comment on sketches, but only if the sketch is marked as "Open to Comments."

---

## Technical Components

### 1. **Frontend: Angular**

- Single-page application (SPA) for seamless user experience.
- Displays daily sketch ideas, uploaded sketches, and comments.
- Tailwind CSS for modern and responsive styling.
- Angular Material for designing UI components quickly.

### 2. **Backend: ASP.NET API**

- Handles requests and responses between the frontend and server.
- Uses authentication and authorization, data persistence, and business logic.

### 3. **Database: Local Development Solution**

- Use a **local PostgreSQL database** during development to store user information, sketches, comments, and daily sketch ideas.
- Switch to **Azure Database for PostgreSQL** near the end of the project, during deployment.

### 4. **Image Storage: Local Development Solution**

- Use **local file storage** (e.g., saving uploaded images directly to the server's file system) during development.
- Transition to **Azure Blob Storage** for image storage near the end of the project.

### 5. **Daily Random Sketch Generator**

- Rotates sketch ideas daily using server-side scheduling logic.

### 6. **Infinite Scroll and Pagination**

- Loads public sketches dynamically with paginated API responses.

### 7. **User Authentication: ASP.NET Identity**

- Provides secure login functionality and manages user accounts.

### 8. **Validation: FluentValidation**

- Ensures user inputs, such as sketch descriptions, are validated on the server side.

### 9. **Logging: Serilog**

- Logs application events for monitoring and debugging.

### 10. **Communication: RESTful API (HTTP)**

- Ensures efficient and secure data transfer between the Angular frontend and ASP.NET backend.

### 11. **Deployment: Azure**

- Hosts the application and manages its scalability and security.
