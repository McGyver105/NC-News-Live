import { Link } from '@reach/router';
import React from 'react';
import ArticleListPage from './ArticleListPage';

const TopicsPage = (props) => {
    console.dir(props)
    return (
        <>
            <Link to="/">
                <h4>Home</h4>
            </Link>
            <p>Topic: {props.topic}
            </p>
            <ArticleListPage topic={props.topic} filtering={true} />
        </>
    );
};

export default TopicsPage;