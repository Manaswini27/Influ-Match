#  InfluMatch – AI-Inspired Influencer-Brand Matching Web App

**InfluMatch** is a full-stack web application that helps brands identify the right influencers by analyzing their content's tone, sentiment, and brand alignment. Built using **React (frontend)** and **Flask (backend)**, the system mimics GenAI-style content evaluation using NLP-inspired heuristics and cosine similarity scoring.

> This web version is adapted from my original **Vertex AI-powered Kaggle project**, converting LLM-driven logic into a deployable, lightweight system for real-time use.

---

## What This Does

Given:
-  An influencer's social media post
-  A brand description or campaign message

It returns:
-  **Brand Fit Score (0–100)**
-  **Tone** (e.g., Friendly, Informative)
- **Sentiment** (Positive, Neutral, Negative)
-  **Similarity Score** (TF-IDF cosine similarity)

---

##  Tech Stack

### Frontend:
- React 18 + TypeScript
- Tailwind CSS
- Recharts (Bar Chart)
- Axios for API calls

### Backend:
- Python + Flask
- Flask-CORS
- scikit-learn (TF-IDF + cosine similarity)
- Simulated AI logic from original Vertex AI output

---

## ⚙ Architecture Overview

```txt
[User Input] → React Form
       ↓
[POST] → Flask API (/match)
       ↓
[Backend Logic]
- Tone, Sentiment Heuristics
- Brand Fit Score
- Cosine Similarity
       ↓
[JSON Response]
       ↓
React: Display Card + Chart


