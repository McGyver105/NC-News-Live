import { Link } from '@reach/router';
import React, { Component } from 'react';
import FullArticle from '../elementComponents/FullArticle';
import LoadingScreen from '../elementComponents/LoadingScreen';
import * as api from '../api'
import PostCommentToArticle from '../elementComponents/PostCommentToArticle';
import ErrorHandler from '../ErrorHandling/ErrorHandler'

class SingleArticlePage extends Component {

    state = {
        article: {},
        article_id: this.props.article_id,
        isLoading: true,
        user: this.props.user,
        errorFound: {found: false, msg: '', status: ''}
    }

    componentDidMount () {
        api.fetchOneArticle(this.props.article_id)
            .then((article) => {
                this.setState(() => {
                    return { article: article, isLoading: false, user: this.props.user };
                });
            })
            .catch(({ response: { status, data: { msg } } }) => {
                this.setState(() => {
                    return { errorFound: { found: true, msg, status: status } };
                });
            });
    }

    render () {
        const { msg, status } = this.state.errorFound;
        if (this.state.errorFound.found) {
            return (<>
                <Link to="/nc-news-st">
                    <h4>Go Back</h4>
                </Link>
                <ErrorHandler msg={msg} status={status} />
            </>
            );
        }
        const { article, user } = this.state;
        return (
            <>{
                this.state.isLoading ? <LoadingScreen />
                    :
                    <>
                        <Link to="/nc-news-st">
                            <h4>Go Back</h4>
                        </Link>
                        <p className="SingleArticlePage__title">
                            Article: {article.title}
                        </p>
                        <FullArticle
                            id={this.props.article_id}
                            user={user}
                        />
                        <section className="SingleArticle__CommentsSection">
                        <PostCommentToArticle
                            id={this.props.article_id}
                            user={user}
                            article={article}/>
                        </section>
                    </>
            }
            </>
        );
    }

    
}

export default SingleArticlePage;