import React from 'react';
import ArticleListPage from './ArticleListPage';
import ListOfTopics from '../elementComponents/ListOfTopics';
import '../../Frontpage.css';

const HomePage = (props) => {
    return (
        <>
            <div className="homepage">
                <div className="Homepage__ListOfTopicsHolder">
                <ListOfTopics />
                </div>
                <div className="Homepage__ArticleListPageHolder">
                <ArticleListPage filtering={false}/>
                </div>
            </div>
        </>
    );
};

export default HomePage;