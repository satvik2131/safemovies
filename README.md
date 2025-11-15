# 🎬 Safe Movies App

A tool that helps users check **movie profanity**, **age suitability**, **movie rating insights**, and **timestamps for abusive content**. Built with modern frontend tools and integrated authentication.

---

## 🚀 Tech Stack

* **Bun** – Runtime & package manager (used to run, build, and test the project)

* **Next.js (App Router)** – Full-stack React framework

* **Tailwind CSS** – Styling

* **shadcn/ui** – Reusable components

* **Supabase** – Authentication + Database

* **TanStack Query** – Server state / API fetching

* **Zustand** – Client state management

---

## 📦 Features

### 🔐 Authentication

* OAuth login (Google, GitHub, etc.) via Supabase

### 🎥 Movies Module

* List all movies
* Server-driven search
* Pagination
* Display:

  * Movie grade (A/U/UA)
  * Who should watch it (age/genre suitability)
  * Profanity check
  * **Abusive timestamps list**

### 🎛 State Management

* API data handled by **TanStack Query**
* UI state (search, filters, modals) handled by **Zustand**

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone <repo-url>
cd movie-profiler
```

### 2. Install dependencies (with Bun)

````bash
bun install
```bash
npm install
````

---

## ⚙️ Configure Tailwind + shadcn

Tailwind config is pre-setup with a global theme.
Run:

```bash
npx shadcn-ui init
```

Generate components on demand:

```bash
npx shadcn-ui add button input card
```

---

## 🔗 Supabase Setup

### 1. Create a project on Supabase

### 2. Create `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL="your-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_KEY="your-service-key"
```

### 3. Enable OAuth providers

* Google
* GitHub


## 👤 Author

**Satvik Kushwaha**

---

