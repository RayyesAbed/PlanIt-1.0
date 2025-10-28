# PlanIt Backend

## Overview

PlanIt 1.0's backend infrastructure powers an innovative AI-driven planning platform. This system serves as the backbone for helping users become the heroes of their future, leveraging cutting-edge AI technology to enhance personal and professional development.

## Technologies Used

- **Express.js**: Fast, unopinionated web framework for Node.js
- **MongoDB**: NoSQL database for flexible data storage
- **JWT**: Secure authentication and authorization
- **Google Gemini AI**: Advanced AI model for story and plan generation
- **AWS S3**: Cloud storage for user files and media
- **Mongoose**: Elegant MongoDB object modeling
- **GraphQL**: Efficient API querying (where applicable)

## Project Structure

```
backend/
├── src/
│   ├── aiPrompts/      # AI prompt templates
│   ├── configs/        # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middlewares/    # Custom middlewares
│   ├── resolvers/      # GraphQL resolvers
│   ├── routes/         # API routes
│   ├── schemas/        # Data models
│   ├── services/       # Business logic
│   └── utils/          # Utility functions
```

## Key Features

- Secure user authentication
- AI-powered story generation
- Task management system
- File storage integration
- Email service integration
- Data validation and sanitization
