import React from 'react';
import ArticleListPage from './ArticleListPage';
import ListOfTopics from '../elementComponents/ListOfTopics';
import '../../Frontpage.css';

const HomePage = () => {
    return (
        <>
            <div className="homepage">
                <ArticleListPage />
                <ListOfTopics />
            </div>
        </>
    );
};

export default HomePage;