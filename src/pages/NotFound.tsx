import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-50 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-600 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-primary-700 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="inline-block rounded bg-primary-600 px-4 py-2 text-white hover:bg-primary-700 transition">
          Go Home
        </Link>
      </div>
    </div>
  );
}
