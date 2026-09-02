import React from "react";
import { ChevronRight } from "lucide-react";
import { PRIORITY_META } from "../data/mock.js";

export default function SurvivorCard({ survivor, selected, onView }) {
  const meta = PRIORITY_META[survivor.priority];
  return (
    <div
      className={`s-card${selected ? " selected" : ""}`}
      style={{ "--edge": meta.color }}
      onClick={() => onView(survivor.id)}
    >
      <div className="s-card-top">
        <span className={`badge ${meta.cls}`}>
          <span className="badge-dot" />
          {meta.label}
        </span>
        <span className="s-card-code">{survivor.id}</span>
      </div>
      <div className="s-card-desc">{survivor.type}</div>
      <div className="s-card-meta">
        Sector {survivor.sector} · {survivor.time}
      </div>
      <button
        className="s-card-btn"
        onClick={(e) => {
          e.stopPropagation();
          onView(survivor.id);
        }}
      >
        View details
        <ChevronRight size={13} />
      </button>
    </div>
  );
}
