"use client";

import { useState } from "react";

const TrackCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  return (
    <div
      className="h-screen w-screen relative"
      onMouseMove={e => setCursor({ x: e.clientX, y: e.clientY })}
    >
      <div className="p-4">
        Cursor: {cursor.x}, {cursor.y}
      </div>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${cursor.x}px, ${cursor.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}

export default function Home() {
  return (
    <TrackCursor />
  );
}
