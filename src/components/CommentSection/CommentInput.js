// You do not need to do anything in this file
import React from 'react';
import CommentSection from './CommentSectionContainer';

const CommentInput = props => {

  const { newComment, comments } = props

  // const changeHandler = event => {
  //   newComment([...comments, event.target.value])
  // }


  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        // onChange={changeHandler}
      />
    </form>
  );
};

export default CommentInput;
