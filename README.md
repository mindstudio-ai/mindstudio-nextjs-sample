# MindStudio Comment Moderation Demo

A Next.js application demonstrating real-time comment moderation using MindStudio's AI workers. This demo shows how to integrate content moderation into a web application using Server Components.

## Features

- Real-time comment moderation
- Server-side AI processing
- Visual feedback for moderation status
- TypeScript integration
- Error handling

## Prerequisites

- Node.js 18 or newer
- MindStudio account and API key
- A content moderation worker (remix from [our template](https://app.mindstudio.ai/ais/34ce86d3-7563-4871-84d0-a9c7a05dd90d/remix))
- Basic familiarity with Next.js

## Setup

1. Clone and install:

```bash
git clone https://github.com/mindstudio/comment-moderator-demo
cd comment-moderator-demo
npm install
```

2. Get your API key from [MindStudio Developer Settings](https://app.mindstudio.ai/workspace/settings/developer?page=api-keys)

3. Configure environment:

```bash
cp .env.example .env
```

Add your MindStudio API key to `.env.local`:

```
MINDSTUDIO_KEY=your-api-key
```

4. Initialize MindStudio:

```bash
npx mindstudio sync
```

5. Start the development server:

```bash
npm run dev
```

## How It Works

The application uses Next.js Server Actions to process comments through MindStudio's AI moderation. Here's the flow:

1. User submits a comment through [`CommentForm`](./app/components/CommentForm.tsx)
2. The submission is handled by a dedicated server action in [`actions.ts`](./app/actions.ts)
3. Server processes the submission using MindStudio's worker
4. Results are displayed in real-time with visual status indicators:
   - 🟢 Approved content
   - 🔴 Rejected content

## Project Structure

```
app/
├── actions.ts            # Server-side actions for comment handling
├── components/
│   ├── CommentForm.tsx   # Comment submission form
│   └── CommentList.tsx   # Comments display with moderation status
├── page.tsx              # Main page component
└── layout.tsx            # Root layout
```

## Learn More

- [MindStudio Documentation](https://docs.mindstudio.ai)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT
