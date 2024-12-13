# MindStudio Next.js Integration Sample

A Next.js application demonstrating how to integrate MindStudio's AI workers into your web applications. This sample uses content moderation as an example use case, showcasing Server Components and real-time processing.

## Features

- Type-safe MindStudio worker integration
- Automatic type generation for AI workers
- Next.js Server Actions integration
- Real-time updates with error handling
- TypeScript support

## Prerequisites

- Node.js 18 or newer
- MindStudio account and API key
- Basic familiarity with Next.js

## Copy the Worker

1. Visit [Content Moderator Worker Sample](https://app.mindstudio.ai/ais/34ce86d3-7563-4871-84d0-a9c7a05dd90d/remix)
2. Click "Make a Copy" to create your own instance of the worker
3. The worker will now be available in your MindStudio workspace for use with this sample

## Setup

1. Clone and install:

```bash
git clone https://github.com/mindstudio-ai/mindstudio-nextjs-sample
cd mindstudio-nextjs-sample
npm install
```

2. Get your API key from [MindStudio Developer Settings](https://app.mindstudio.ai/workspace/settings/developer?page=api-keys)

3. Configure environment:

```bash
cp .env.example .env
```

Add your MindStudio API key to `.env`:

```
MINDSTUDIO_KEY=your-api-key
```

4. Initialize MindStudio:

```bash
npx mindstudio sync
```

This command:

- Connects to MindStudio using your API key
- Fetches available worker configurations
- Generates `.mindstudio.json` containing worker definitions
- Creates TypeScript types in `node_modules/mindstudio/dist/generated`
- Enables type-safe access to your AI workers

5. Start the development server:

```bash
npm run dev
```

## Understanding MindStudio Integration

This sample demonstrates the key aspects of MindStudio integration:

1. **Type Generation**
   - `.mindstudio.json` tracks your worker configurations
   - Generated types provide autocomplete and type safety
   - Run `npx mindstudio sync` after worker changes

2. **Worker Initialization**

   ```typescript
   const mindstudio = new MindStudio(process.env.MINDSTUDIO_KEY);
   ```

3. **Type-Safe Worker Usage**

   ```typescript
   const result = await mindstudio.workers.ContentModerator.verifyComment({
     content: "Your text here"
   });
   ```

4. **Error Handling**

   ```typescript
   try {
     // Worker execution
   } catch (error) {
     if (error instanceof MindStudioError) {
       console.error('Worker failed:', error.message);
     }
   }
   ```

## Project Structure

```
app/
├── actions.ts            # Server-side actions with MindStudio integration
├── components/
│   ├── CommentForm.tsx   # Content submission form
│   └── CommentList.tsx   # Results display
├── page.tsx              # Main page component
└── layout.tsx            # Root layout
```

## How It Works

The sample uses a comment moderation flow to demonstrate MindStudio integration:

1. User submits content through [`CommentForm`](./app/components/CommentForm.tsx)
2. Server action in [`actions.ts`](./app/actions.ts) calls MindStudio worker
3. Worker processes content using AI moderation
4. Results display with visual indicators:
   - 🟢 Approved content
   - 🔴 Rejected content

## Team Usage

1. **Project Owner:**
   - Run `npx mindstudio sync`
   - Commit `.mindstudio.json` to version control

2. **Team Members:**
   - Run `npm install`
   - Types generate automatically via postinstall script

Optional: Add to `package.json`:

```json
{
  "scripts": {
    "postinstall": "npx mindstudio sync"
  }
}
```

## Learn More

- [MindStudio Documentation](https://docs.mindstudio.ai)
- [MindStudio npm package](https://www.npmjs.com/package/mindstudio)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT
