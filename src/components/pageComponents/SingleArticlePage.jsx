import { Link } from '@reach/router';
import React, { Component } from 'react';
import FullArticle from '../elementComponents/FullArticle';
import LoadingScreen from '../elementComponents/LoadingScreen';
import * as api from '../api'

class SingleArticlePage extends Component {

    state = {
        article_id: this.props.article_id,
        isLoading: true,
        liked: {},
        disliked: {}
    }

    componentDidMount () {
        api.fetchOneArticle(this.props.article_id)
            .then((article) => {
                this.setState(() => {
                    return {article: article, isLoading: false}
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
                        <FullArticle article={article} handleLike={this.handleLike} handleDislike={this.handleDislike}/>
                    </>
            }
            </>
        );
    }

    handleLike = (article_id) => {
        const { liked, disliked } = this.state;
        let votes = 1;
        if (disliked[article_id]) votes = 2;
        if (!liked[article_id]) {
            console.log('yay')
        api.voteUpArticle(article_id, votes)
            .then(({ data: { article } }) => {
                this.setState((current) => {
                    return {
                        ...current.liked,
                        liked: { [article_id]: true },
                        ...current.disliked,
                        disliked: { [article_id]: false },
                        article: { ...current.article, votes: article.votes }
                    };
                });
            });
        };
    }

    handleDislike = (article_id) => {
        const { liked, disliked } = this.state;
        let votes = -1;
        if (liked[article_id]) votes = -2;
        if (!disliked[article_id]){
            console.log('boo')
        api.VoteDownArticle(article_id, votes)
            .then(({ data: { article } }) => {
                this.setState((current) => {
                    return {
                        ...current.liked,
                        liked: { [article_id]: false },
                        ...current.disliked,
                        disliked: { [article_id]: true },
                        article: { ...current.article, votes: article.votes }
                    };
                });
            });
        };
    }
}

export default SingleArticlePage;