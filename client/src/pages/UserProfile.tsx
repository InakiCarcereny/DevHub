import type { JSX } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile(): JSX.Element {
  const { handle } = useParams<{ handle: string }>();

  return (
    <div>
      <h1 className="text-xl font-semibold">@{handle}</h1>
    </div>
  );
}
