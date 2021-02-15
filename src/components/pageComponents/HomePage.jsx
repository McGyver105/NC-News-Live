import React from 'react';
import ArticleListPage from './ArticleListPage';
import ListOfTopics from '../elementComponents/ListOfTopics';
import '../../Frontpage.css';

const HomePage = (props) => {
    return (
        <>
            <div className="homepage">
                <ListOfTopics />
                <ArticleListPage filtering={false}/>
            </div>
        </>
    );
};

export default HomePage;