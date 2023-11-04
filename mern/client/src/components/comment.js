import React from "react";
import "./comment.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div>
        <h4>{comment.title}</h4>
      </div>
      <div>
        <h7>{comment.name}, {comment.number}</h7>
      </div>
      <div>
        <h8>{comment.comment}</h8>
      </div>
    </div>
  );
};

export default Comment;
