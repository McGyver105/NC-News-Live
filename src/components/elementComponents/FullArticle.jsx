import * as api from '../api'
import '../../Frontpage.css'
import '../pageComponents/SingleArticlePage.css'
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
        const { article, isLoading, user } = this.state;
        return (
            <>
                {isLoading ? <LoadingScreen /> :
                    <>
                        <main className="FullArticle__mainArticle">
                            <p>Author: {article.author}</p>
                            <p>{article.body}</p>
                            <section
                                className="FullArticle__votesCounter">
                                <VotesCounter
                                    type={"articles"}
                                    votes={article.votes}
                                    id={article.article_id}
                                    user={user}
                                />
                            </section>
                        </main>
                    </>}
            </>
        );
    }
}

export default FullArticle;