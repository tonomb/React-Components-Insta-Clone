// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  
  const [comments, setComments] = useState(props.comments)
  
  
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        comments.map(comment =>{
         return <Comment key={comment.text} comment={comment}/>
        })
      }
      <CommentInput setNewComment={setComments} comments={comments} />
    </div>
  );
};

export default CommentSection;
