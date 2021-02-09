import React, { Component } from 'react';
import * as api from '../api';
import ArticleSummary from '../elementComponents/ArticleSummary'
import '../../Frontpage.css'
import DropDownList from '../elementComponents/DropDownList';
import LoadingScreen from '../elementComponents/LoadingScreen';

class ArticleList extends Component {

    state = {
        articles: [],
        isLoading: true,
        sort_by: 'created_at',
        sorting: false,
        filter: this.props.filter,
        filtering: this.props.filtering
    }

    componentDidMount () {
        api.fetchArticles()
            .then((articles) => {
                this.setState(() => {
                    return { "articles": articles, isLoading: false, filter: this.props.topic };
                });
        })
    }

    componentDidUpdate () {
        const { sort_by, filter, sorting, filtering } = this.state;
        if (sorting) {
            api.fetchSortedArticles(sort_by, filter)
                .then((articles) => {
                    this.setState(() => {
                        return { "articles": articles, isLoading: false, sorting: false };
                    });
                })
        }
        if (filtering) {
            api.fetchSortedArticles(sort_by, filter)
                .then((articles) => {
                    this.setState(() => {
                        return { "articles": articles, isLoading: false, filtering: false };
                    });
            })
        }
    }

    render () {
        return (
            <>
                {this.state.isLoading ? <LoadingScreen/>
                    :
                    <>
                        <div className="App__ArticleList">
                            <header className="ArticleList__header">
                                <p className="header__title">List of Articles</p>
                                <DropDownList handleSort={this.handleSort} />
                            </header>
                            {this.state.articles.length === 0 ? <p>No articles found</p> :
                                <ul className="ArticleList__ul">
                                    {this.state.articles.map((article) => {
                                        return <ArticleSummary key={article.article_id} article={article} />;
                                    })}
                                </ul>}
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