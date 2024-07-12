import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h2 className="mb-4 text-3xl font-bold text-red-600">Not Found</h2>
      <p className="mb-8 text-gray-600">Could not find requested resource</p>
      <Link href="/">
        <p className="text-red-600 hover:underline">Return Home</p>
      </Link>
    </div>
  );
}
