import React from "react";
import { useNavigate } from "react-router-dom";
import { UserRound, Sparkles } from "lucide-react";
import Wordmark from "./Wordmark.jsx";

export default function DashboardNavbar({ onSimulate }) {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Wordmark onClick={() => navigate("/")} />
      <div className="navbar-center">Dashboard</div>
      <div className="navbar-right">
        <button className="sim-btn" onClick={onSimulate}>
          <Sparkles size={13} />
          Simulate detection
        </button>
        <div className="status-chip">
          <span className="dot green dot-pulse" />
          System active
        </div>
        <div className="avatar">
          <UserRound size={16} />
        </div>
      </div>
    </div>
  );
}
