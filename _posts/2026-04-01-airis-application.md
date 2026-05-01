---
layout: post
title: We build AIris!
date: 2026-04-01 01:00:00
description: A complete rundown of our capstone project, AIris.
tags: gamuda google 
featured: false
toc:
    sidebar: right
pretty_table: true
---

Following my [first](https://amoiiir.github.io/blog/2026/gamuda-ai-academy/) post about Gamuda AI Academy, I now wanted to share my capstone project that we presented during the demo day. We delivered **AIris - A camera-first language learning application**, an app designed to help kids struggling with learning and pronouncing words in Bahasa Melayu. It was a **team** project consisting of six people.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/airis_logo.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A simple "non-ai" generated logo for AIris.
</div>

## AIris - A Camera-First Malay Learning Application

The idea is simple: help kids learn to converse in Bahasa Melayu in a fun and engaging way—through the camera lens. Think of it as Pokemon Go, but educational and meaningful.

### Core Feature of AIris

The camera feature allows kids to point at an object, take a picture, and learn its name in Bahasa Melayu. For example, if a kid doesn’t know the word for "cat," they can take a picture, and AIris will recognize the object and teach them how to pronounce it in Bahasa Melayu.

In the background, the image is sent to `Gemini API`, which recognizes the object and generates a response to teach the user.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/camera.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The camera feature User Interface (UI) of AIris.
</div>

### VocabCard - Comprehensive Flashcard System

- After processing the image, the word is displayed in VocabCard.
- VocabCard includes:
  - The word itself.
  - A simple description of the object.
  - Pronunciation guide through Text-to-Speech (TTS).
  - Sample sentences demonstrating usage in English and Bahasa Melayu.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/vocabcard.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    VocabCard User Interface (UI) of AIris.
</div>

Kids can either take another picture or save the word as a **flashcard**. Saved words are stored in the **wordbank**, which they can review later.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/wordbank.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    WordBank User Interface (UI) of AIris.
</div>

### Leitner System - The Flashcard Learning Method

To test kids’ understanding of words, AIris offers three types of quizzes:
 1. **Naming Test** - Name the object in Bahasa Melayu based on the picture.
 2. **Listening Test** - Listen to the pronunciation and type the correct answer.
 3. **Speaking Test** - Pronounce the word, and the app checks if it’s correct.

The mixed test combines all three quiz types. Questions are drawn from the word bank based on their exploration of words.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/flashcards.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    A collection of flashcard quiz User Interface (UI) of AIris.
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/flashcards1.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    In-depth overview of all the different types of flashcard quiz User Interface (UI) of AIris.
</div>

The **Leitner system** is a flashcard-based method for memorization and retention. Flashcards are sorted into categories based on familiarity, and reviewed at increasing intervals. Difficult cards are reviewed more frequently, while easier ones are reviewed less often. This helps focus study time on areas needing improvement.

This system was a **proof of concept** for the capstone project. While we encountered errors implementing the algorithm, we managed to create a simple working version.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/leitner.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Leitner System simple explanation.
</div>

### Leaderboard - Gamified Learning Experience

To keep kids engaged, we implemented a leaderboard. Kids earn points by taking pictures and answering quizzes. They can see their ranking, encouraging them to keep learning new words in Bahasa Melayu.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/leaderboard.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Leaderboard User Interface (UI) of AIris.
</div>

### ChatBot - KSSR-Based Chatbot for Interactive Learning

The chatbot helps kids learn abstract words like "freedom" or "happiness" when they can’t snap images. Kids can ask the chatbot for meanings and pronunciations in Bahasa Melayu. The chatbot generates kid-friendly responses.

We also implemented **Retrieval Augmented Generation (RAG)** concepts tailored to the **Kurrikulum Standard Sekolah Rendah (KSSR)**. This allows the chatbot to retrieve information from the KSSR curriculum and generate responses. Kids can ask questions like:
 - What is "Peribahasa"?
 - What is "Rukun Negara"?
 - Teach me about "penjodoh bilangan".

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/chatbot.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    RAG-based ChatBot User Interface (UI) of AIris.
</div>

### Scavenger Hunt - IRL Word-Finding Game

We also implemented a scavenger hunt game to enhance learning. Kids can go outside, find objects, and take pictures using AIris. For example, during a Raya gathering, they can take a picture of "Baju Kurung," and AIris will recognize the object and teach them about it. This feature is localized to Malaysian culture, helping kids learn about their heritage.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/scavenger.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Scavenger Hunt User Interface (UI) of AIris.
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/scavenger1.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Scavenger Hunt User Interface (UI) of AIris.
</div>

## The Tech Stack We Used

- **Frontend:**
  - [Ionic Framework](https://ionicframework.com/docs) ![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=flat&logo=ionic&logoColor=white)

- **Backend:**
  - [FastAPI](https://fastapi.tiangolo.com/) ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)
  - [Google TTS and STT](https://cloud.google.com/text-to-speech) ![Google TTS and STT](https://img.shields.io/badge/Google%20TTS%20and%20STT-4285F4?style=flat&logo=google&logoColor=white)

- **Database:**
  - [PostgreSQL](https://www.postgresql.org/docs/) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
  - [CloudSQL](https://cloud.google.com/sql/docs) ![CloudSQL](https://img.shields.io/badge/CloudSQL-4285F4?style=flat&logo=google-cloud&logoColor=white)

- **AI Model:**
  - [Gemini Model](https://gemini-model.com/docs) ![Gemini Model](https://img.shields.io/badge/Gemini%20Model-FF6F00?style=flat&logo=ai&logoColor=white)

- **Vector Database:**
  - [MongoDB](https://www.mongodb.com/docs) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)

- **Deployment:**
  - [Google Cloud Platform](https://cloud.google.com/) ![Google Cloud Platform](https://img.shields.io/badge/Google%20Cloud%20Platform-4285F4?style=flat&logo=google-cloud&logoColor=white)
  - [Firebase](https://firebase.google.com/docs) ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=white)
  - [Cloud Run](https://cloud.google.com/run/docs) ![Cloud Run](https://img.shields.io/badge/Cloud%20Run-4285F4?style=flat&logo=google-cloud&logoColor=white)

- **Version Control:**
  - [Git](https://git-scm.com/doc) ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

## Meet the Team

Here are five of my talented friends who made AIris possible. Feel free to connect with them and ask about their experiences with Gamuda AI Academy and full-stack development:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/airis_application/team.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

| Name            | Role               | Professional Profile                                   |
|-----------------|--------------------|-------------------------------------------|
| Tan Ying Xin (Chris)        | Project Leader   | [LinkedIn](https://www.linkedin.com/in/chris-tanyx/) |
| Raina Radzaif       | Financial Strategy Leader       | [LinkedIn](https://www.linkedin.com/in/rradzaif/) |
| Daniel Koshy   | Product Designer        | [LinkedIn](https://www.linkedin.com/in/danielbriankoshy/) |
| Muhammad Ihsan Salahuddin       | Software Tester | [LinkedIn](https://www.linkedin.com/in/ihsan-salahuddin/) |
| Lau Kee Wei   | AI Engineer     | [LinkedIn](https://www.linkedin.com/in/jun-wei-337173250/) |

---

## Conclusion

AIris is a fun and engaging application that helps kids learn Bahasa Melayu interactively. The use of cameras, flashcards, quizzes, leaderboards, and chatbots makes the learning experience enjoyable and effective. We are proud of what we achieved in such a short time and hope AIris positively impacts how kids learn languages in the future.

In the next post, I will share my personal experience during the demo day. Stay tuned!