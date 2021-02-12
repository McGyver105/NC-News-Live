import { Link } from '@reach/router';
import React from 'react';
import ArticleListPage from './ArticleListPage';

const TopicsPage = (props) => {
    return (
        <>
            <Link to="/nc-news-st">
                <h4>Go back</h4>
            </Link>
            <p className="TopicsPage__ChosenPage">Articles about: {props.topic}!
            </p>
            <ArticleListPage topic={props.topic} filtering={true} />
        </>
    );
};

export default TopicsPage;