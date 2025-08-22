# The Next Blog

A fully-featured, server-rendered blog platform built with Next.js 14 and Tailwind CSS. This project demonstrates advanced Next.js concepts like server-side filtering and sorting, dynamic routing, and Client/Server component architecture.

## Features

  - **Server-Side Rendering (SSR):** All pages are rendered on the server for optimal performance and SEO.
  - **Dynamic Routing:** Individual blog post pages are dynamically generated based on a URL slug.
  - **Server-Side Filtering:** Filter articles by a single or multiple categories. All filtering logic is handled on the server by reading URL search parameters.
  - **Server-Side Sorting:** Sort articles by date (latest or oldest). Sorting logic also runs on the server and works in combination with active filters.
  - **Not Found Handling:** A custom "Not Found" page is shown for invalid blog slugs.
  - **Dynamic Recommendations:** The blog details page suggests other relevant articles from the same category. If none exist, it shows the latest articles as a fallback.
  - **Responsive Design:** A clean, mobile-first design that works on all screen sizes, including a mobile-specific navigation bar.

-----

## Tech Stack

  - **Framework:** Next.js 14 (App Router)
  - **Styling:** Tailwind CSS (with `@tailwindcss/typography` plugin)
  - **Language:** JavaScript

-----

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (version 18.17 or later) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

-----

## License

This project is licensed under the MIT License.