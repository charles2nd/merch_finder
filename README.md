# Merch Finder & Customizer

AI-powered merchandise discovery and customization platform for show attendees. Find official and fan-made merchandise, then customize it with personal text, inside jokes, dates, and locations.

## Features

- **Smart Merch Discovery**: Find official and fan-made merchandise for any show or event
- **AI-Powered Customization**: Add personal touches with text, inside jokes, dates, and locations
- **Responsive Design**: Optimized for mobile and desktop experiences
- **Real-time Search**: Fast, intelligent search across multiple merchandise sources
- **Accessibility First**: WCAG 2.1 AA compliant interface

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Responsive, mobile-first CSS
- **Testing**: Jest (unit tests) + Playwright (E2E tests)
- **Deployment**: Vercel
- **Code Quality**: ESLint + Prettier

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd merch_finder

# Install dependencies
npm install

# Start development server
npm run dev
```

### Testing

```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run all tests
npm run test:all
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## Testing Strategy

This project follows strict Test-Driven Development (TDD):

- **80% minimum code coverage** required
- Tests written **before** implementation
- Unit tests for all components and utilities
- Integration tests for API routes
- E2E tests for critical user journeys
- Never delete working tests

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── lib/                 # Utility functions and configurations
├── types/               # TypeScript type definitions
└── __tests__/           # Test files
```

## Contributing

1. Write failing tests first (TDD)
2. Implement feature to pass tests
3. Ensure 80%+ code coverage
4. Run linting and type checking
5. Create pull request

## Code Coverage

[![Coverage Status](https://codecov.io/gh/username/merch_finder/branch/main/graph/badge.svg)](https://codecov.io/gh/username/merch_finder)

Coverage reports are automatically generated and synced with Codecov on every commit.

## License

MIT License - see [LICENSE](LICENSE) file for details.