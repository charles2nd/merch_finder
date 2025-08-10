# Merch Finder & Customizer - Development Rules

## Core Concept
AI-powered merchandise discovery and customization platform for show attendees. Finds official and fan-made merchandise and enables AI-driven customization with personal text, inside jokes, dates, and locations.

## Mandatory TDD Requirements
- Write failing tests BEFORE implementing any feature
- Minimum 80% code coverage for all modules
- Never delete working tests - only refactor or extend them
- Use Jest for unit tests, Playwright for E2E tests
- Run tests in CI/CD pipeline before any deployment
- Every component, utility, and API route must have corresponding tests
- Integration tests for all database operations
- Test error scenarios and edge cases explicitly

## Code Quality Standards
- Never use emojies
- Clean, readable code only
- Never hallucinate - stay focused on core merchandise concept
- TypeScript strict mode throughout
- ESLint and Prettier enforcement
- Self-documenting code with clear variable names
- Functions max 20 lines
- Proper error boundaries and handling

## Architecture Rules
- Next.js 14+ with App Router
- Deploy exclusively on Vercel
- React Server Components where appropriate
- Mobile-first responsive design
- Clean UX & UI design patterns
- Progressive enhancement principles

## Sub-Agent Usage
- Use specialized sub-agents for complex tasks
- Leverage test-automator for comprehensive test suites
- Use typescript-pro for advanced typing patterns
- Employ frontend-developer for React components
- Utilize performance-engineer for optimization tasks

## Ultra-Thinking Approach
- Break down complex features into small, testable units
- Always think through edge cases before implementation
- Consider performance implications of every decision
- Plan component architecture before coding
- Validate approach against TDD principles

## Solution Evolution
- Never break existing functionality when adding features
- Update tests when refactoring code
- Maintain backward compatibility
- Document breaking changes clearly
- Iterative improvement over complete rewrites

## Testing Priorities
1. Core merch search functionality tests
2. AI customization feature tests
3. User interface component tests
4. API integration tests
5. Performance and accessibility tests
6. Error handling and edge case tests