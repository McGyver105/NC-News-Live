import { Link } from '@reach/router';
import React from 'react';
import '../../App.css'

const ArticleSummary = (props) => {
    const { author, created_at, title, body, comment_count, article_id } = props.article
    let preview = body;
    if (body.length > 70) preview = body.slice(0, 70) + '...';
    return (
        <li className="ArticleSummary__li">
            <p className="ArticleSummary__author">Author: {author}. {`Created: ${created_at.slice(0, 10)} at ${created_at.slice(11, 19)}`}</p>
            <Link to={`/nc-news-st/articles/${article_id}`}>
                <p className="ArticleSummary__title">{title}</p>
            </Link>
            <p className="ArticleSummary__preview">{preview}</p>
            <Link to={`/nc-news-st/articles/${article_id}`} className="ArticleSummary__linkToArticle">
                <p className="LinktoArticle__text">would you like to know more?</p>
            </Link>
           
        </li>
    );
};

export default ArticleSummary;