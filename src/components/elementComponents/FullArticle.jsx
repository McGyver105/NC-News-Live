import React from 'react';
import '../../Frontpage.css'

const FullArticle = ({ article, handleLike, handleDislike, handleNoComments }) => {
    return (
        <>
            <p>Author: {article.author}</p>
            <p>{article.body}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
            <button
                onClick={() => {
                handleLike(article.article_id)
            }}>
                <img
                    src="https://www.flaticon.com/svg/vstatic/svg/25/25297.svg?token=exp=1612889456~hmac=7552dab4e95159ce74f976be131e8813"
                    alt="thumbs up"
                    className="FullArticle__Thumb" />
            </button>
            <button
                onClick={() => {
                    handleNoComments(article.article_id);
                }}>
                <img
                    src="https://lh3.googleusercontent.com/gRvRUve9VoQLyKG5BICowvMGAHTsmsr8D66IXyQDPK05NE2p1wUDPwzOH64KDnDaPRM8=s180"
                    alt="no comment"
                    className="FullArticle__Thumb" />
            </button>
            <button
                onClick={() => {
                handleDislike(article.article_id)
                }}>
                <img
                    src="https://cdn0.iconfinder.com/data/icons/communication-183/80/thumbs-down-512.png"
                    alt="thumbs down"
                    className="FullArticle__Thumb" />
            </button>
        </>
    );
};

export default FullArticle;