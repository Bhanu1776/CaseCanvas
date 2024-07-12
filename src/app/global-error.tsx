'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2 className="text-black">Something went wrong!</h2>
        <button onClick={() => reset()} className="text-rose-500">
          Try again
        </button>
      </body>
    </html>
  );
}
