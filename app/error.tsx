"use client";

import Image from "next/image";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="overflow-hidden">
        <div className="h-screen flex items-center flex-col gap-2">
          <Image
            src={"@/components/images/not found.png"}
            alt="Page Not found"
          />
          <h1>{`Oops! Something went wrong :(`}</h1>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
}
