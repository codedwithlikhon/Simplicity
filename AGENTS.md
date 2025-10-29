## Project Overview
This is a Next.js and TypeScript project for the "Simplicity AI Coding Agent" landing page. The main page is `app/page.tsx` and the chatbot is in `components/chatbot.tsx`.

## Application Logic
- **`app/page.tsx`**: This is the main landing page. It's primarily a presentational component that showcases the features of the Simplicity AI Coding Agent. It uses a `useState` hook (`activeDemo`) to toggle the visibility of detailed information for each of the agent's capabilities. The content for these capabilities is hardcoded in the `capabilities` array.
- **`components/chatbot.tsx`**: This component provides a simulated chat interface.
    - The core logic is in the `generateResponse` function, which takes the user's input and returns a predefined response.
    - It uses simple keyword matching (e.g., "bug", "dependency", "migrate") to select the appropriate response from the `predefinedResponses` object.
    - If no keywords are matched, it returns one of three default responses at random.
    - **Note:** This is a front-end simulation. There is no actual AI model connected to this chatbot. The `useChat` hook from `ai/react` is imported but not used.

## Dev environment tips
- Run `npm install` to get dependencies.
- Run `npm run dev` to start the local dev server at http://localhost:3000.
- Create new React components inside the `components/` directory.
- Check the `scripts` section in `package.json` for all available commands.

## Testing instructions
- Run `npm run lint` to check for ESLint and TypeScript errors after changing files.
- This project uses Jest and React Testing Library for tests. Although no tests are set up yet, you are expected to add them for any new code you write.
- Run `npm test` to run the test suite. Please ensure all tests pass before you request a review.
- Add or update tests for the code you change, even if nobody asked.

## PR instructions
- **Title format:** `feat: <description>` for features, `fix: <description>` for fixes.
- Always run `npm run lint` and `npm test` before committing to ensure all checks pass.
- Provide a clear description of the changes in the pull request.
