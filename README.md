# Next.js Template

A modern Next.js template with built-in authentication, database setup, component system, and developer tooling.

## Features

- 🔐 Authentication with NextAuth.js
  - Email/Password and OAuth providers
  - Role-based access control
  - Protected routes
- 🎨 UI Components
  - Tailwind CSS for styling
  - Radix UI primitives
- 🛠️ Developer Experience
  - TypeScript for type safety
  - Husky for Git hooks
  - Commitlint for conventional commits
  - Jest & React Testing Library for testing
  - API documentation with OpenAPI
- 🗄️ Database
  - Drizzle ORM with SQLite
  - Type-safe database queries
  - Built-in migrations

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-template.git
cd nextjs-template
```

2. Install dependencies:

```bash
pnpm install
```

3. Copy the example environment file:

```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:

```env
DATABASE_URL=
GITHUB_ID=
GITHUB_SECRET=
```

5. Initialize the database:

```bash
pnpm db:push
```

### Development

Start the development server:

```bash
pnpm dev
```

Run Storybook:

```bash
pnpm storybook
```

Run tests:

```bash
pnpm test        # Run all tests
pnpm test:watch  # Run tests in watch mode
pnpm test:coverage # Run tests with coverage
```

### Commit Convention

This project uses conventional commits for clear git history and automated versioning. Commit messages should follow this pattern:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:

```bash
git commit -m "feat: add user authentication"
```

## Project Structure

```
.
├── app/                # Next.js app directory
│   ├── (auth)/        # Authentication routes
│   ├── (landing)/     # Landing page routes
│   ├── (main)/        # Main application routes
│   └── api/           # API routes
├── components/         # React components
│   ├── auth/          # Authentication components
│   └── ui/            # UI components
├── lib/               # Utilities and helpers
│   └── db/            # Database configuration
├── public/            # Static assets
└── services/          # External services integration
```

## Testing

- Unit tests are located next to the components they test
- Use React Testing Library for component testing
- Run `pnpm test:coverage` to see coverage report

## Documentation

- Component documentation in Storybook
- API documentation with OpenAPI spec at `/api/openapi.yaml`
- Type documentation through TypeScript

## Contributing

1. Create a new branch from `main`
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
