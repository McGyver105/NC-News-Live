import * as api from '../api'
import '../../Frontpage.css'
import React, { Component } from 'react';
import LoadingScreen from './LoadingScreen';
import VotesCounter from './VotesCounter';

class FullArticle extends Component {

    state = {
        id: this.props.id,
        user: this.props.user,
        isLoading: true
    }

    componentDidMount () {
        api.fetchOneArticle(this.state.id)
            .then((article) => {
                this.setState(() => {
                    return { "article": article, isLoading: false };
                });
            })
    }

    render () {
        const { article, isLoading } = this.state;
        return (
            <>
                {isLoading ? <LoadingScreen /> :
                    <>
                        <p>Author: {article.author}</p>
                        <p>{article.body}</p>
                        <VotesCounter
                            type={"articles"}
                            votes={article.votes}
                            id={article.article_id}
                        />
                    </>}
                </>
        );
    }
}

export default FullArticle;