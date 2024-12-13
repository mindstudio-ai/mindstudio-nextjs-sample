import { getComments, submitComment } from "./actions";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";

export default async function Home() {
  const comments = await getComments();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          MindStudio Comment Moderator
        </h1>
        <p className="mt-3 text-lg leading-6 text-gray-600">
          A simple demo of AI-powered content moderation
        </p>
      </div>

      <div className="space-y-10">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <CommentForm submitComment={submitComment} />
          </div>
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-base font-semibold leading-6 text-gray-900 mb-4">
              Comments
            </h2>
            <CommentList comments={comments} />
          </div>
        </div>
      </div>
    </div>
  );
}
