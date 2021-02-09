import React, { Component } from 'react';
import * as api from '../api';
import ArticleSummary from '../elementComponents/ArticleSummary'
import '../../Frontpage.css'

class ArticleList extends Component {

    state = {
        articles: [],
        isLoading: true,
        sort_by: '',
        sorting: false
    }

    componentDidMount () {
        api.fetchArticles(this.state.sort_by)
            .then((articles) => {
                this.setState(() => {
                    return { "articles": articles, isLoading: false };
                });
        })
    }

    componentDidUpdate () {
        if (this.state.sorting) {
            api.fetchSortedArticles(this.state.sort_by)
                .then((articles) => {
                    this.setState(() => {
                    return { "articles": articles, isLoading: false, sorting: false };
                })
            })
        }
    }

    render () {
        return (
            <>
                {this.state.isLoading ? <p>Loading...</p> :
                    <>
                        <div className="App__ArticleList">
                            <p>List of Articles</p>
                            <form >
                                <label>Sort by
                                 <select onChange={this.handleSort}>
                                        <option value="all">Recommended</option>
                                        <option value="author">Author</option>
                                        <option value="created_at">Created At</option>
                                        <option value="topic">Topic</option>
                                 </select>
                                </label>
                            </form>
                            <ul className="ArticleList__ul">
                                {this.state.articles.map((article) => {
                                    return <ArticleSummary key={article.article_id} article={article} />;
                                })}
                            </ul>
                        </div>
                    </>
                }
            </>
        );
    }

    handleSort = ({target: {value}}) => {
        this.setState(() => {
            return { sort_by: value, sorting: true };
        });
    }
}

export default ArticleList;