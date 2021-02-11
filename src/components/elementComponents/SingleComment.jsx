import React from 'react';
import '../../Frontpage.css'
import VotesCounter from './VotesCounter';

const SingleComment = ({
    author,
    body,
    comment_id,
    created_at,
    votes,
    handleDelete,
    user
}) => {
    return (
        <section className="SingleArticle__comment">
            <p>Written by {author} at {created_at}</p>
            <p>{body}</p>
            <VotesCounter
                type={"comments"}
                votes={votes}
                id={comment_id} />
            { author === user ?
                <button onClick={() => {
                    handleDelete(comment_id);
                }}>remove comment</button>
                : <></>}
        </section>
    );
};

export default SingleComment;