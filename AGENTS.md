# AGENTS.md

## Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production  
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- No test framework configured

## Code Style Guidelines

### Imports
- Use `import type` for type-only imports
- Group imports: external libraries first, then internal modules
- Use `@/*` path alias for internal imports

### Formatting & Types
- TypeScript strict mode enabled
- Use React functional components with TypeScript
- Prefer `const` over `let`
- Use `Readonly<>` for immutable props

### Naming Conventions
- PascalCase for components
- camelCase for variables and functions
- kebab-case for file names (except components)

### Error Handling
- ESLint with Next.js core web vitals config
- No specific error handling patterns observed

### Styling
- Tailwind CSS v4 with dark mode support
- Use `dark:` prefix for dark mode variants
- Geist font family as default