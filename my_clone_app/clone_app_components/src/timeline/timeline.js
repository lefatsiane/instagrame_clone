import React from "react";
import "./timeline.css";
import Suggestions from "./suggestions";
import Posts from "./posts/post";

export default function Timeline() {
  return (
    <div className="Timeline">
      <div className="timelineLeft">
        <div className="timelinePosts">
          <Posts userName="this is in the timeline file"  /> 
        </div>
      </div>

      <div className="timelineSuggestions">
        <Suggestions /> {/*  use "Suggestions" component   */}
      </div>
    </div>
  );
}


