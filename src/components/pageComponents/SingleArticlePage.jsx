import { Link } from '@reach/router';
import React, { Component } from 'react';
import LoadingScreen from '../elementComponents/LoadingScreen';
import * as api from '../api'
import PostCommentToArticle from '../elementComponents/PostCommentToArticle';
import ErrorHandler from '../ErrorHandling/ErrorHandler'
import FullArticle from '../elementComponents/FullArticle'

class SingleArticlePage extends Component {

    state = {
        article: {},
        isLoading: true,
        user: '',
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
                <Link to="/nc-news-live">
                    <h4>Go Back</h4>
                </Link>
                <ErrorHandler msg={msg} status={status} />
            </>
            );
        }
        const { article } = this.state;
        const { user } = this.props;
        return (
            <>{
                this.state.isLoading ? <LoadingScreen />
                    :
                    <>
                        <Link to="/nc-news-live">
                            <h4>Go Back</h4>
                        </Link>
                        <p className="SingleArticlePage__title">
                            Article: {article.title}
                        </p>
                        <FullArticle
                            id={article.article_id}
                            user={user}
                            article={article}
                        />
                        <section className="SingleArticle__CommentsSection">
                        <PostCommentToArticle
                            id={article.article_id}
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