import React from 'react';
import '../App.css'

const ArticleSummary = (props) => {
    const { author, created_at, title, body, comment_count, topic } = props.article
    let preview = body;
    if (body.length > 70) preview = body.slice(0, 70) + '...';
    return (
        <li className="ArticleSummary__li">
            <p className="ArticleSummary__author">Author: {author}</p>
            <p className="ArticleSummary__created_at">{`created on ${created_at.slice(0, 10)} at ${created_at.slice(11, 19)}`}</p>
            <p className="title">{title}</p>
            <p className="ArticleSummary__preview">{preview}</p>
            <p className="ArticleSummary__linkToArticle">Click to view article</p>
            <p className="ArticleSummary__comment_count">{comment_count}</p>
        </li>
    );  
};

export default ArticleSummary;