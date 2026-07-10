import { type ReactNode } from "react";

interface CardProp {
  children: ReactNode;
}
// Card.tsx - can help create structural layouts without forcing a specific data scheme on there inner contents
export function Card({ children }: CardProp) {
  return (
    <div
      className="card-container"
      style={{ border: "1px solid black", padding: "20px" }}
    >
      <h2>Card Title</h2>
      {/* This renders everything passed inside the tags */}
      <div className="card-content">{children}</div>
    </div>
  );
}
//less use nowadays mostly replaced by hooks
