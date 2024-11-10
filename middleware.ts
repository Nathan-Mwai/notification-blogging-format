// // This will be where I configure clerk including authentication and authorization

//2024 version

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes that do not require authentication (sign-in, sign-up, etc.)
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/api/webhook/clerk']);

// Define the middleware logic
export default clerkMiddleware(async (auth, request) => {
  // If the route is not public, protect it with Clerk authentication
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

// Define the route matcher for which the middleware should be applied
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes (e.g., /api, /trpc)
    '/(api|trpc)(.*)',
  ],
};

//2023 version

// import {authMiddleware} from '@clerk/nextjs';

// export default authMiddleware({
//     // /api/webhook/clerk to enable webhook functionality for organization
//   publicRoutes: ['/', '/api/webhook/clerk'],
//   ignoredRoutes: ['/api/webhook/clerk'],
// });

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };