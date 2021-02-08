import React, { Component } from 'react';
import * as api from './api';
import ArticleSummary from './ArticleSummary'

class ArticleList extends Component {

    state = {
        articles: [],
        isLoading: true
    }

    componentDidMount () {
        api.fetchArticles()
            .then((articles) => {
                this.setState(() => {
                    return { "articles": articles, isLoading: false };
                });
        })
    }

    render () {
        return (
            <>
                {this.state.isLoading ? <p>Loading...</p> : 
                    <>
                        <div className="App__ArticleList">
                        <p>List of Articles</p>
                        <ul className="ArticleList__ul">
                            {this.state.articles.map((article) => {
                                return <ArticleSummary key={article.article_id} article={article}/>
                            })}
                            </ul>
                        </div>
                    </>
                }
            </>
        );
    }
}

export default ArticleList;