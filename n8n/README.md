# Setting Up n8n Email Categorization Workflow

This guide will help you import and configure the provided n8n workflow JSON that automates email polling, AI-based categorization, and storage into MongoDB.

---

## Prerequisites

Before you start, ensure you have the following ready:

- An [n8n](https://n8n.io/) instance running (self-hosted or cloud).
- A Gmail account with OAuth2 credentials for API access.
- Access to Google Gemini API (or another compatible AI language model API).
- A MongoDB database connection (Atlas or self-hosted).
- Basic familiarity with n8n workflows and credentials setup.

---

## Step 1: Import the Workflow JSON

1. Open your n8n Editor UI.
2. Click on **Workflows** in the top menu.
3. Select **Import from File**.
4. Upload the provided workflow JSON file (`workflow.json`).
5. The workflow should now appear in your workflow list.

---

## Step 2: Set Up Credentials

### Gmail OAuth2 Credentials

- Go to [Google Cloud Console](https://console.cloud.google.com/).
- Create a new project or use an existing one.
- Enable the Gmail API.
- Create OAuth 2.0 Client IDs credentials (type: Web Application).
- Add your n8n URL to authorized redirect URIs (e.g., `https://your-n8n-domain.com/rest/oauth2-credential/callback`).
- Copy your **Client ID** and **Client Secret**.

In n8n:

- Go to **Credentials**.
- Create new **Gmail OAuth2 API** credential.
- Fill in Client ID, Client Secret, and authorize with your Gmail account.

---

### Google Gemini API Credentials

- Sign up for Google Cloud’s AI services if not done.
- Obtain API key / OAuth credentials for Google Gemini or PaLM API.
- In n8n, go to **Credentials**.
- Create new **Google Palm API** credential.
- Enter your API key or OAuth details.

---

### MongoDB Credentials

- Obtain connection string URI from your MongoDB instance (e.g., MongoDB Atlas).
- In n8n, go to **Credentials**.
- Create new **MongoDB** credential.
- Paste your connection string and configure authentication as needed.

---

## Step 3: Connect Credentials in Workflow

- Open the imported workflow.
- For each node requiring credentials (Gmail Trigger, Google Gemini Chat Model, MongoDB), select the appropriate credential from the dropdown.
- Save the workflow.

---

## Step 4: Activate the Workflow

- Toggle the workflow **Active** switch to enable it.
- The workflow will now poll your Gmail inbox every minute.
- Incoming emails will be sent to the AI agent for categorization.
- Categorized emails will be stored in your MongoDB `emails` collection.

---

## Troubleshooting

- **Emails not showing up in DB?**  
  Check credentials authorization and ensure your MongoDB URI and permissions are correct.

- **AI agent not categorizing?**  
  Verify your Google Gemini API credentials and quota.

- **Workflow errors?**  
  Review the n8n execution logs for detailed error messages.

---

## Additional Notes

- This workflow can be customized to include more email filters or categories.
- Ensure your Gmail API quota and Google Gemini usage limits fit your needs.
- Regularly monitor your MongoDB database size and optimize indexes if necessary.

---

## Summary

This workflow provides an automated pipeline from Gmail inbox polling to AI-powered email categorization and persistent storage, enabling efficient email management solutions.

---

If you have questions or need help setting this up, feel free to open an issue or reach out.

