# Automated Email Categorization System with n8n, AI, and MongoDB

## Overview

This project implements an **automated email categorization system** leveraging **n8n workflow automation**, **AI-powered classification**, and **MongoDB database storage**. Incoming emails are fetched from Gmail, analyzed by an AI agent (Google Gemini/PaLM), categorized, and saved in MongoDB. A frontend fetches categorized emails via an API for display.

---

## Features

- **Automated Email Polling**: Checks Gmail inbox every minute.
- **AI Email Classification**: Categorizes emails into customer-support, spam, promotional, newsletter, social, personal, important.
- **MongoDB Storage**: Persists categorized emails for easy retrieval.
- **Frontend API**: Fetches and displays emails by category.
- **Scalable & Customizable**: Extend AI prompts, email filters, or UI components.

---

## File Structure
```

├── backend/
│   ├── server.js               # Express backend server
│   ├── routes/
│   │   └── emails.js           # API routes for fetching emails
│   ├── models/
│   │   └── Email.js            # Mongoose schema for emails
│   ├── .env                    # Environment variables for backend
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/         # React components (EmailCard, CategoryTabs, etc.)
│   │   ├── store/              # Zustand store for email state management
│   │   ├── services/           # API calls (fetchEmailsByCategory, fetchAllEmails)
│   │   ├── App.tsx             # Main React app entry
│   ├── .env                    # Environment variables for frontend
│   └── package.json
│
├── n8n/
│   └── email-categorization-workflow.json # n8n workflow JSON for automation
│
├── README.md                   # This documentation file
└── SETUP.md                    # Step-by-step setup guide for n8n and project
```

---

## Backend Setup

1.  **Create a `.env` file in `/backend`** with:
    ```
    MONGO_URI=your_mongoDB_connection_string
    ```

2.  **Install dependencies and start server**:
    ```bash
    cd backend
    npm install
    npm run dev
    ```
    The Express backend exposes APIs to fetch all emails or by category.

---

## Frontend Setup

1.  **Create a `.env` file in `/frontend`** with:
    ```bash
    VITE_BACKEND_URL=http://localhost:5000/api/emails
    ```

2.  **Install dependencies and run development server**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    The frontend uses Zustand for state management, fetches emails from the backend, and displays them filtered by category.

---

## n8n Workflow Setup

1.  Import `email-categorization-workflow.json` into your n8n instance.

2.  **Configure the following credentials inside n8n**:
    - **Gmail OAuth2**: For accessing the Gmail inbox.
    - **Google Gemini (PaLM) API**: For AI classification.
    - **MongoDB**: For storing categorized emails.

3.  Activate the workflow to start automatic email polling, classification, and insertion.

---

## How It Works

1.  **Polling Gmail**: The workflow triggers every minute to fetch new emails.
2.  **AI Classification**: The AI agent analyzes each email’s subject, sender, and body, assigning one category.
3.  **Data Structuring**: Relevant fields and the category are set up for database insertion.
4.  **MongoDB Storage**: Emails are inserted into the `emails` collection.
5.  **Frontend Fetching**: The React frontend fetches categorized emails via the backend API and renders them.

---

## SEO Keywords

- Email automation
- AI email classification
- n8n workflow automation
- MongoDB email storage
- Gmail email polling
- React email dashboard
- Zustand state management
- Google Gemini AI integration
- Node.js Express API
- Scheduled email categorization

---

## Troubleshooting

- Make sure environment variables are correctly set.
- Verify API credentials and scopes.
- Confirm MongoDB connectivity.
- Check n8n workflow executions for errors.
- Ensure the frontend correctly points to the backend API URL.

---

## Contribution

Feel free to open issues or pull requests for improvements, bug fixes, or new features.