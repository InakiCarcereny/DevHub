import type { JSX } from "react";
import { useParams } from "react-router-dom";

export default function TagPage(): JSX.Element {
  const { tag } = useParams<{ tag: string }>();

  return (
    <div>
      <h1 className="text-xl font-semibold">#{tag}</h1>
    </div>
  );
}
