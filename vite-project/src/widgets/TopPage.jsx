import React from "react";
import { Bell, BookOpen } from "lucide-react";
import "./TopPage.css";

const TopPage = () => {
  return (
    <div className="top-main-body">
      <div className="top-main-first-container">
        <a href="/">
          <h1 className="web-name">LEARNING</h1>
        </a>
        <div className="top-main-search-container">
          <BookOpen className="top-main-book" />
          <a href="/search">
            <span className="top-main-span">Search Cources</span>
          </a>
        </div>
      </div>
      <div className="top-main-second-container">
        <Bell />
      </div>
    </div>
  );
};

export default TopPage;
