"use client"; // required for error components

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>❌ Failed to load posts</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
