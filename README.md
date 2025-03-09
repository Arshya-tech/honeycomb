# Honeycomb: Financial Literacy and Education Platform

Honeycomb is an interactive platform designed to promote financial literacy and empower users to make informed financial decisions.

## Our mission

_"Making Financial Literacy Engaging, Rewarding & Personalized"_

## Features

- **Personalized Onboarding**: Tailored onboarding process that adapts to individual user goals and financial knowledge level.
- **Gamified Financial Challenges**: Fun, interactive weekly challenges to teach financial concepts while keeping users engaged.
- **Smart Budgeting Tips**: AI-powered analysis of spending patterns with actionable recommendations for better financial decisions.
- **Crypto-based Rewards System**: Users earn crypto tokens or cashback for completing challenges and reaching financial goals.
- **AI-Based Expense Tracker & Budgeting Simulator**: Provides personalized financial insights, helping users manage expenses and set realistic budgeting goals.

## Project Structure

- **app/**: Contains the Next.js application source code including pages, layout, and global styles.
- **lib/**: Includes utility functions and database-related code.
- **components/**: Reusable UI components for authentication, dashboard, and user interface elements.
- **config/**: Configuration files for navigation and site settings.
- **PRD.md**: Product Requirements Document detailing the platform features and roadmap.
- **.env**: Environment configuration file (do not commit sensitive data).

## How to Run the Project

### Prerequisites

- Node.js (v14 or later)
- pnpm (preferred package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd bse-2025
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```env
   TURSO_CONNECTION_URL=your_turso_connection_url
   TURSO_AUTH_TOKEN=your_turso_auth_token
   AUTH_SECRET=your_auth_secret
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables

The project requires the following environment variables to run:

- **TURSO_CONNECTION_URL**: Connection URL for the Turso database.
- **TURSO_AUTH_TOKEN**: Authentication token for accessing the Turso database.
- **AUTH_SECRET**: Secret used for signing authentication tokens.

Ensure these variables are set correctly in your `.env` file before running the project.

## Additional Information

- **Authentication**: The project includes a basic authentication setup. Modify the source in the `auth.ts` and API routes under `app/api/auth` as needed.
- **Database**: The database schema is defined in `lib/db/schema.ts` using the Drizzle ORM with SQLite.
- **Development**: Contributions and feature requests are welcome. Refer to the PRD document (`PRD.md`) for the product roadmap and feature details.

Happy coding!
