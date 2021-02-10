import { Link } from '@reach/router';
import React, { Component } from 'react';
import FullArticle from '../elementComponents/FullArticle';
import LoadingScreen from '../elementComponents/LoadingScreen';
import * as api from '../api'

class SingleArticlePage extends Component {

    state = {
        article: {},
        article_id: this.props.article_id,
        isLoading: true,
        user: 'name',
        liked: {'jessjelly': false},
        disliked: {'jessjelly': false}
    }

    componentDidMount () {
        api.fetchOneArticle(this.props.article_id)
            .then((article) => {
                this.setState(() => {
                    return {article: article, isLoading: false, user: this.props.user}
                })
            })
    }

    render () {
        const { article } = this.state;
        return (
            <>{
                this.state.isLoading ? <LoadingScreen />
                    :
                    <>
                        <Link to="/nc-news-st">
                            <h4>Home</h4>
                        </Link>
                        <p>Article: {article.title}</p>
                        <FullArticle article={article} handleLike={this.handleLike} handleDislike={this.handleDislike} handleNoComments={this.handleNoComments}/>
                    </>
            }
            </>
        );
    }

    handleLike = (article_id) => {
        const { liked, disliked, user } = this.state;
        let votes = 1;
        if (disliked[user][article_id]) votes = 2;
        if (!liked[user][article_id]) {
        api.voteOnArticle(article_id, votes)
            .then(({ data: { article } }) => {
                this.setState((current) => {
                    return {
                        ...current.liked,
                        liked: {
                            ...current.liked[user],
                            [user]: {
                                [article_id]: true
                            }
                        },
                        ...current.disliked,
                        disliked: {
                            ...current.liked[user],
                            [user]: { [article_id]: false }
                        },
                        article: {
                            ...current.article,
                            votes: article.votes
                        }
                    };
                });
            });
        };
    }

    handleNoComments = (article_id) => {
        const { liked, disliked, user } = this.state;
        let votes = 0;
        if (liked[user][article_id]) votes = -1;
        if (disliked[user][article_id]) votes = 1;
        api.voteOnArticle(article_id, votes)
            .then(({ data: { article } }) => {
                this.setState((current) => {
                    return {
                        ...current.liked,
                        liked: {
                            ...current.liked[user],
                            [user]: {
                                [article_id]: false
                            }
                        },
                        ...current.disliked,
                        disliked: {
                            ...current.liked[user],
                            [user]: {
                                [article_id]: false
                            }
                        },
                        article: {
                            ...current.article,
                            votes: article.votes
                        }
                    };
                });
        })
    }

    handleDislike = (article_id) => {
        const { liked, disliked, user } = this.state;
        let votes = -1;
        if (liked[user][article_id]) votes = -2;
        if (!disliked[user][article_id]){
        api.voteOnArticle(article_id, votes)
            .then(({ data: { article } }) => {
                this.setState((current) => {
                    return {
                        ...current.liked,
                        liked: {
                            ...current.liked[user],
                            [user]: {
                                [article_id]: false
                            }
                        },
                        ...current.disliked,
                        disliked: {
                            ...current.liked[user],
                            [user]: {
                                [article_id]: true
                            }
                        },
                        article: {
                            ...current.article,
                            votes: article.votes
                        }
                    };
                });
            });
        };
    }
}

export default SingleArticlePage;