import * as api from '../api'
import '../../Frontpage.css'
import '../pageComponents/SingleArticlePage.css'
import React, { Component } from 'react';
import LoadingScreen from './LoadingScreen';
import VotesCounter from './VotesCounter';

class FullArticle extends Component {

    state = {
        id: '',
        user: '',
        isLoading: true,
        article: null
    }

    componentDidMount () {
        const { id } = this.props;
        api.fetchOneArticle(id)
            .then((article) => {
                this.setState(() => {
                    return { "article": article, isLoading: false };
                });
            })
    }

    render () {
        const { article, isLoading } = this.state;
        const { user } = this.props;
        return (
            <>
                {isLoading ? <LoadingScreen /> :
                    <>
                        <main className="FullArticle__mainArticle">
                            <p className="FullArticle__Author">Author: {article.author}</p>
                            <p className="FullArticle__ArticleText">
                                {article.body}
                            </p>
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