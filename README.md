This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Complete Authentication
### Using Clerk
#### Why clerk
-  enable email
- Enable password
- Social logins such as google , facebook , twitter and even github
 - Ease in profile management
 - I put clerkProvider in the layout since for now clerk can only be called once
 - Clerk allows us to access client data i.e during onboarding

## Outlook
### Figma
- Taking figma to the next level
### TailwindCSS
- Nice layout
### shadcn/ui
- For more robust designs


## NextJS
### Why nextJs
- Fast performance
- Instantaneous page switching
- Including server side rendering
- Wanting to explore some new outlooks
- Using routes and also prevent them from being included in the paths using route groups i.e wrapping the foldername in ()
- () It is also used for nesting routes
- (auth) will contain all the auth routes
- (root) will contain all the other routes 

## MongoDB
### Why this
- Handling complex schemas 
- Data population that may end up going deep

## zod
### Why this
- Data validation

## uploadthing
### Why this
- To enable file uploads i.e photos and potentially documents

## Webhooks
### why this
- Real time event listening 

## react hook form
### Why this
- Managing forms

#### Changed name of folder from device

 - npm install @clerk/nextjs @uploadthing/react mongoose svix uploadthing

 - react 19 doesn't yet support the above so downgrade to 18
 - npm install react@18 react-dom@18

## (auth)
- This is where the sign-up, sign-in and onboarding will be
- Adding onboarding will be where the users can add additional information about themselves

## components folder
### why outside
- Because nextjs supports file based routing
### shared
- Will contain only shared components

## constants 
- Just a place where I can define lists and other non changing files

### Next navigation
- Using useRouter will enable have to state "use client" since it will be a client side rendered component

## validations
- for zod folder to word

# Backend
## Benefits of using  server side rendering
- SEO benefits
- faster load time