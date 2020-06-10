// You do not need to do anything in this file
import React, {useState} from 'react';
import CommentSection from './CommentSectionContainer';

const CommentInput = props => {

  const { newComment, comments } = props

  const [commentValue, setCommentValue] = useState('')

  const changeHandler = event => {
    // debugger
    setCommentValue(event.target.value)
  }

  const submitHandler = event => {
    // debugger
    event.preventDefault()
    newComment([...comments, {text: commentValue, username:'Me'}])
  }

  return (
    <form className="comment-form" onSubmit={submitHandler}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={changeHandler}
      />
    </form>
  );
};

export default CommentInput;
