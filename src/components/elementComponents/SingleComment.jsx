import React from 'react';
import '../../Frontpage.css'
import VotesCounter from './VotesCounter';

const SingleComment = ({
    author,
    body,
    comment_id,
    created_at,
    votes
}) => {
    return (
        <section className="SingleArticle__comment">
            <p>Written by {author} at {created_at}</p>
            <p>{body}</p>
            <VotesCounter
                type={"comments"}
                votes={votes}
                id={comment_id} />
        </section>
    );
};

export default SingleComment;