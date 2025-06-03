# SociaTrack Frontend

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.3.9-646CFF.svg)](https://vitejs.dev/)

A comprehensive social media analytics platform for analyzing Twitter/X data including sentiment analysis, emotion detection, topic modeling, and social network analysis.

## 🌟 Features

### Core Analytics

- **Project Management** - Create and manage analysis projects with keywords, date ranges, and categories
- **Topic Modeling** - Automatic topic extraction and analysis from social media data
- **Sentiment Analysis** - CNN and CNN-LSTM models for sentiment classification (Positive/Negative)
- **Emotion Analysis** - CNN and CNN-BiLSTM models for emotion detection (Fear, Sad, Love, Joy, Anger, Neutral)
- **Social Network Analysis (SNA)** - Buzzer detection and community analysis with 2D/3D visualization

### AI-Powered Features

- **Intelligent Chatbot** - Context-aware AI assistant for project insights
- **Real-time Analysis** - Live data processing and visualization
- **Interactive Visualizations** - Charts, graphs, and network diagrams

### User Experience

- **Authentication System** - Secure login/register with JWT tokens
- **Offline Mode** - Demo credentials for testing without internet connection
- **Responsive Design** - Modern UI with Tailwind CSS and shadcn/ui components
- **Real-time Updates** - Live data refresh and progress tracking

## 🛠️ Tech Stack

### Frontend Framework

- **React 18** - Modern React with hooks and context
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible React components
- **Lucide React** - Modern icon library
- **Recharts** - Data visualization library

### State Management

- **React Context** - Global state management for auth and analysis
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### Data Visualization

- **React Force Graph** - 2D/3D network visualizations
- **Recharts** - Charts and graphs
- **React Social Media Embed** - Embedded tweets

### HTTP & API

- **Axios** - HTTP client with interceptors
- **js-cookie** - Cookie management
- **JWT Authentication** - Secure token-based auth

## 📋 Prerequisites

- **Node.js** (version 16 or above)
- **pnpm** (recommended) or npm/yarn
- **Modern browser** with ES6+ support

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SociaTrack/SociaTrack-FE.git
cd SociaTrack-FE
```

### 2. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_base_url
VITE_API_KEY=your_api_key
```

### 4. Start Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 🔑 Demo Credentials

For testing without an internet connection, use these demo credentials:

- **Email**: `demo@sociatrack.com`
- **Password**: `demo123`

These credentials enable offline mode with sample data.

## 📂 Project Structure

```
sociatrack-fe/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Icons and images
│   ├── components/        # Reusable React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── analysis/     # Analysis-specific components
│   │   ├── dashboard/    # Dashboard components
│   │   ├── navbar/       # Navigation components
│   │   └── sidebar/      # Sidebar components
│   ├── hooks/            # Custom React hooks
│   │   ├── AuthContext.tsx      # Authentication context
│   │   ├── AnalysisContext.tsx  # Analysis data context
│   │   └── createProject/       # Project creation context
│   ├── layouts/          # Page layouts
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Analyst/      # Analysis dashboard
│   │   ├── CreateTopic/  # Project creation flow
│   │   ├── Dashboard/    # Main dashboard
│   │   ├── Login/        # Authentication pages
│   │   └── Register/
│   ├── routes/           # Routing configuration
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── .env.example          # Environment variables template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎯 Usage Guide

### Creating a New Project

1. **Navigate to Dashboard** - Click on "Dashboard" in the navigation
2. **Create Project** - Click "Create New Project" button
3. **Fill Project Details**:
   - Project title and description
   - Category selection (Politics, Technology, etc.)
4. **Set Keywords** - Define search keywords and language
5. **Configure Date Range** - Set crawling date range
6. **Submit** - Wait for analysis completion

### Analyzing Data

1. **Select Project** - Choose a project from the sidebar dropdown
2. **Explore Sections**:
   - **Overview** - Project summary and basic information
   - **Trend of Tweet** - Topic analysis and tweet visualization
   - **Sentiment Analysis** - Positive/negative sentiment breakdown
   - **Emotion Analysis** - Detailed emotion classification
   - **Social Network Analysis** - Buzzer and community detection
   - **Chatbot** - AI-powered insights and Q&A

### Using the AI Chatbot

1. **Navigate to Chatbot** section
2. **Select Predefined Prompts** or ask custom questions
3. **Get Insights** - Receive AI-generated analysis and follow-up questions
4. **Interactive Conversation** - Continue the conversation for deeper insights

## 📊 Key Features Walkthrough

### Sentiment Analysis

- **Model Selection** - Choose between CNN and CNN-LSTM models
- **Topic Filtering** - Filter results by specific topics
- **Visual Charts** - Pie charts showing sentiment distribution
- **Tweet Examples** - Browse actual tweets with their sentiment scores

### Emotion Analysis

- **Multi-Emotion Detection** - Fear, Sad, Love, Joy, Anger, Neutral
- **Model Comparison** - CNN vs CNN-BiLSTM model performance
- **Interactive Tabs** - Switch between different emotions
- **Detailed Analytics** - Emotion distribution charts and statistics

### Social Network Analysis

- **Buzzer Detection** - Identify influential accounts and content spreaders
- **Community Analysis** - Discover user communities and their interactions
- **3D Visualization** - Interactive 3D network graphs
- **Topic Correlation** - See how topics spread through communities

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build

# Code Quality
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript type checking

# Testing
pnpm test         # Run tests (if configured)
```

## 🌐 API Integration

The frontend integrates with the Sociatrack backend API for:

- **Authentication** - User login/register/token refresh
- **Project Management** - CRUD operations for analysis projects
- **Data Analysis** - Sentiment, emotion, and topic analysis
- **Social Network Analysis** - Community and buzzer detection
- **AI Chatbot** - Natural language processing and responses

## 🔒 Authentication & Security

- **JWT Tokens** - Secure authentication with access/refresh tokens
- **Auto-refresh** - Automatic token renewal
- **Protected Routes** - Route-level authentication guards
- **Secure Storage** - HTTP-only cookies for token storage

## 🎨 UI/UX Features

- **Dark/Light Mode** - Automatic theme detection
- **Responsive Design** - Mobile-first approach
- **Loading States** - Skeleton loaders and progress indicators
- **Error Handling** - User-friendly error messages
- **Toast Notifications** - Success/error feedback
- **Accessibility** - WCAG compliant components

## 🆘 Troubleshooting

### Common Issues

**Build Errors**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
pnpm install
```

**API Connection Issues**

- Check your `.env` file configuration
- Verify API endpoint is accessible
- Try demo credentials for offline testing

**TypeScript Errors**

```bash
# Type check the project
pnpm type-check
```

### Support

For support and questions:

- Create an issue on GitHub
- Check the documentation
- Use demo mode for testing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
