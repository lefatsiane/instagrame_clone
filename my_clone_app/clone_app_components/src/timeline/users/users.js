import React from "react";

export default function Users(props) {
  return (
    <div className="userDetails">
      {props.userName} 
    </div>
  );
}

// {userName : "the_Artist"} {postImage :"https://preview.redd.it/4pc1aajyhcf81.jpg?width=640&crop=smart&auto=webp&s=c8a9975330208851059679323b8f6ae27a873b10"} {likes: 40} {timeStamp: "12h"}
// {
//   userName: "hey_BIG_HEAD",
//   postImage:
//     "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/megamind-in-front-of-glowing-robots.jpg",
//   likes: 134,
//   timeStamp: "3d",
// },
// {
//   userName : "tHe_cOoL_gUys",
//   postImage: "https://i.redd.it/37k6ez07gc221.jpg",
//   likes: 853,
//   timeStamp: "2h",
// }
