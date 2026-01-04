# Personal Finance & Advisor

A modern, responsive web application for tracking personal expenses and receiving basic financial advice. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Dashboard**: Visual overview of expenses, savings, and trends.
- **Expense Management**: Add, edit, delete, and filter expenses. Supports Categories and Sub-categories.
- **Financial Advisor**: Rule-based insights on spending habits.
- **Investment Suggestions**: Mutual fund recommendations based on savings potential and risk appetite.
- **Data Privacy**: All data is stored locally in your browser (IndexedDB).
- **Data Portability**: Export/Import your data to JSON for backup.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn-like primitives
- **Charts**: Recharts
- **Storage**: LocalForage (IndexedDB)
- **Icons**: Lucide React

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for Production**
   ```bash
   npm run build
   ```

## Folder Structure

```
src/
 ├─ components/
 │   ├─ advisor/      # Financial Advisor & Investment components
 │   ├─ dashboard/    # Dashboard widgets & charts
 │   ├─ expenses/     # Forms & Lists for expenses
 │   ├─ layout/       # App shell & Navigation
 │   ├─ settings/     # Backup/Restore
 │   └─ ui/           # Reusable UI atoms (Button, Card, etc.)
 ├─ hooks/            # Custom hooks (useExpenses, usePersistence)
 ├─ utils/            # formatting, calculations
 ├─ types/            # TypeScript interfaces
 └─ data/             # Initial mock data
```

## Disclaimer

The financial advice provided by this application is based on simple logic rules and educational suggestions. It does not constitute professional financial advice.
