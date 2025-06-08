# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development servers (frontend and backend in parallel)
- `npm run dev:frontend` - Start Next.js development server only
- `npm run dev:backend` - Start Convex development server only
- `npm run predev` - Setup Convex dev environment and open dashboard
- `npm run build` - Build Next.js application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Architecture

This is a full-stack application built with:

### Frontend Stack
- **Next.js 15** with App Router (`app/` directory structure)
- **React 19** with TypeScript
- **Tailwind CSS** for styling with custom configuration
- **Radix UI** components via shadcn/ui component library
- **Theme System** with dark/light mode support via next-themes

### Backend Stack
- **Convex** as the backend-as-a-service (database, server functions, real-time)
- **Clerk** for authentication and user management
- Real-time data synchronization between frontend and backend

### Key Architectural Patterns

**Authentication Flow:**
- Clerk handles user authentication on the frontend
- `ConvexClientProvider` integrates Convex with Clerk authentication
- Middleware in `middleware.ts` protects routes, redirecting unauthenticated users to `/signin`
- Public routes: `/signin(.*)`, `/signup(.*)`

**Component Structure:**
- App layout includes sidebar navigation (`AppSidebar`) with collapsible state
- Theme toggle and sidebar trigger in the header
- All components use shadcn/ui design system

**Convex Integration:**
- Follow Convex function guidelines from `.cursor/rules/convex_rules.mdc`
- Use new function syntax with explicit validators for args and returns
- Separate public functions (`query`, `mutation`, `action`) from internal ones (`internalQuery`, `internalMutation`, `internalAction`)
- Schema definition in `convex/schema.ts` (currently empty but ready for extension)

**File Organization:**
- UI components in `components/ui/` following shadcn/ui conventions
- Application-specific components in `components/`
- Utility functions in `lib/utils.ts`
- Custom hooks in `hooks/`

## Important Notes

- Always use absolute imports with `@/` prefix (configured in tsconfig.json)
- Follow Convex best practices from the cursor rules, especially around function definitions and validators
- Maintain TypeScript strict mode compliance
- Use the established theming system for new components
- Preserve the existing authentication setup when making changes