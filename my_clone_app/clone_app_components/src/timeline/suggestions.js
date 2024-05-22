import React from "react";
import "./suggestions.css";
import { RxAvatar } from "react-icons/rx";

export default function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestionsTitle">Suggestions for you
      <div className="seeAll"  >See All</div>
      </div>




      <div className="suggestionUserNames">
        <div className="suggestionsUserName">
          <div className="userNameDetails" >
            <span className="avatar" > <RxAvatar/> </span>
            <div className="suggestionsInfo" >
              <span className="UserName" >tHe.ligHt</span>
              <span className="relation" >Followed by tHe_cOoL_gUys
</span>
            </div>


          </div>
          <button className="followSuggestionButton" >Follow</button>
        </div>
      </div>{" "}

      
      <div className="suggestionUserNames">
        <div className="suggestionsUserName">
          <div className="userNameDetails" >
            <span className="avatar" > <RxAvatar/> </span>
            <div className="suggestionsInfo" >
              <span className="UserName" >The.DARK</span>
              <span className="relation" >New to Instagram</span>
            </div>


          </div>
          <button className="followSuggestionButton" >Follow</button>
        </div>
      </div>{" "}

      
      <div className="suggestionUserNames">
        <div className="suggestionsUserName">
          <div className="userNameDetails" >
            <span className="avatar" > <RxAvatar/> </span>
            <div className="suggestionsInfo" >
              <span className="UserName" >the_inbetween</span>
              <span className="relation" >New to Instagram</span>
            </div>


          </div>
          <button className="followSuggestionButton" >Follow</button>
        </div>
      </div>{" "}

      
      <div className="suggestionUserNames">
        <div className="suggestionsUserName">
          <div className="userNameDetails" >
            <span className="avatar" > <RxAvatar/> </span>
            <div className="suggestionsInfo" >
              <span className="UserName" >everytHing_else</span>
              <span className="relation" >Follows you</span>
            </div>


          </div>
          <button className="followSuggestionButton" >Follow</button>
        </div>
      </div>{" "}

      
      <div className="suggestionUserNames">
        <div className="suggestionsUserName">
          <div className="userNameDetails" >
            <span className="avatar" > <RxAvatar/> </span>
            <div className="suggestionsInfo" >
              <span className="UserName" >wHat_about.Him</span>
              <span className="relation" >Follows you</span>
            </div>


          </div>
          <button className="followSuggestionButton" >Follow</button>
        </div>
      </div>{" "}
        














































      
    </div>
  );
}
