# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for Mohammed Faiz Ahmed (also referenced as Mohammed Badruddin Saad), a data engineer. The site features a chatbot called "SAADAI" that uses AWS Lambda and OpenAI's API to answer questions about the portfolio owner's background and work.

## Architecture

### Frontend
- **Main Portfolio Site**: Static HTML/CSS/JavaScript
  - `index.html`: Main landing page with sections for home, services, about, and portfolio work
  - `css/styles.css`: Complete styling including responsive design, navigation, chatbot UI
  - `js/index.js`: Navigation toggle, chatbot functionality, and video autoplay on scroll

### Backend
- **Chatbot Backend** (`main.py`): AWS Lambda function that handles chatbot requests
  - Uses OpenAI API (`text-davinci-002` model) for generating responses
  - Configured as Lambda handler with CORS support
  - API endpoint: `https://djjjwa2ev2.execute-api.us-east-1.amazonaws.com/Prod`
  - Requires `OPENAI_API_KEY` environment variable

### Key Dependencies
- **Frontend**: jQuery, Font Awesome, Google Fonts
- **Backend**: openai, python-dotenv (see `requirements.txt` for full list)
- **Node.js**: Dependencies in `package.json` include @anthropic-ai/claude-agent-sdk, @anthropic-ai/sdk, openai

## Project Structure

```
termproject/
├── index.html                    # Main portfolio page
├── portfolio-item*.html          # Individual portfolio project pages
├── contact-form.html            # Contact form page
├── css/
│   └── styles.css               # Main stylesheet
├── js/
│   └── index.js                 # Frontend JavaScript
├── img/                         # Images and assets
├── main.py                      # AWS Lambda chatbot handler
├── package.json                 # Node.js dependencies
└── requirements.txt             # Python dependencies
```

## Chatbot System

The chatbot "SAADAI" is integrated into the portfolio:

1. **Frontend** (`js/index.js`):
   - Captures user input from `#chatbot-input`
   - Sends POST request to AWS Lambda endpoint
   - Displays responses in `#chatbot-messages`

2. **Backend** (`main.py`):
   - Lambda function receives user input
   - System prompt defines bot as "PortfolioBot" with context about Mohammed's background
   - Returns OpenAI-generated response with CORS headers

## Development Notes

### Environment Setup
- Backend requires `.env` file with `OPENAI_API_KEY`
- Lambda function expects event structure with `body.userInput`

### Chatbot Customization
To modify the chatbot's knowledge or behavior, edit the system prompt in `main.py` at lines 25-31.

### Styling
- Uses CSS custom properties (variables) for theming (see `:root` in `styles.css`)
- Responsive design with breakpoints at 600px and 800px
- Mobile-first navigation with hamburger menu

### Known Issues
Per README.md, there are "Issues faced" with the SAADAI chatbot implementation.

## Additional Projects

The repository contains multiple HTML/CSS learning projects in subdirectories:
- Coffee menu, Nutrition label, Quiz, Survey forms
- Rothko painting, Piano, Skyline (CSS art projects)
- Balance sheet, Magazine (layout projects)
- Various other portfolio pieces

These are standalone educational projects and not integrated into the main portfolio site.
