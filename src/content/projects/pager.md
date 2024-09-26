---
title: 'Pager'
description: 'A user-driven social media platform designed for book lovers.'
publishDate: 'Nov 24 2022'
seo:
  image:
    src: '/pager-1.png'
    alt: 'A welcome page in a neubrutalist style saying "Welcome to Pager, The social sharing app for modern readers"'
isFeatured: true
---

Created alongside [Emily Villett](https://github.com/MeowPup) for Lighthouse Labs' full-time web development bootcamp final project.

![Project preview](/pager-1.png)

**Project Overview:**

_Pager_ is a simple, user-driven social media platform designed for readers to collect, review, and curate lists of their favourite books.

## Objectives

1. Pare down the bloated features provided by other major book review sites to offer a clean, focused application.
2. Follow a clear design-guide with an opinionated style to simulate collaboration with a UI/UX team.
3. Allow users to log their own books in a persistent database and curate public lists.

## Features

1. **A Social App for Book Lovers:**

- See reviews from other users, sorted by total likes across the application.
- Who's reading what? Explore a list of popular books from other readers.

![Home screen](/pager-2.png)

2. **Your Shelf, Your Way:**

- Users can populate their shelves with books they've read or want to read.
- Sort by author, title, or year to find your books ASAP.

![Shelf view](/pager-3.png)

3. **Lists for Recommendations and Categorization:**

- Create dynamic lists of books that are visible by others on the application.
- A simplified way to share your favourites with your friends and followers!

![List view](/pager-4.png)

## Technology Stack

- Frontend: React combined with Material UI for snappy, reusable components.
- Backend: Express for routing and quick presentation of data.
- Database: PostgreSQL presented through the partnered [Pager API](https://github.com/curtis-wils0n/pager-api)

## Outcome

_Pager_ was an interesting project to develop, as Emily and I both felt comfortable working in vanilla React and Express but challenged ourselves by implementing Material UI components. We tried to follow "neubrutalism" ([see a good rundown here](https://medium.com/@sepidy/neubrutalism-vs-glassmorphism-your-step-by-step-guide-with-how-tos-b2751425c24b)) and its design principals as closely as possible, and found that using a component library like Material UI was perfect for most of the heavy lifting.

If I were to go back to this project I would work on improving the colour-scheme and make fonts more consistent to the design guide across the application. This was a great challenge to flex our design implementation muscles, but more time could be spent on the design itself.

[Link to Project](https://github.com/curtis-wils0n/pager)