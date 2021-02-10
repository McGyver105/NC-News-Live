import * as api from '../api'

import React, { Component } from 'react';
import SingleComment from './SingleComment';
import LoadingScreen from './LoadingScreen';

class ArticleComments extends Component {
    state = {
        article: this.props.article,
        user: this.props.user,
        isLoading: true,
        hideComments: true,
        posted: this.props.posted
    };

    componentDidMount () {
        const { article_id } = this.state.article;
        api.fetchCommentsForArticle(article_id)
            .then((comments) => {
                this.setState(() => {
                    return { comments, isLoading: false };
                });
        })
    }

    componentDidUpdate () {
        const { article_id } = this.state.article;
        api.fetchCommentsForArticle(article_id)
            .then((comments) => {
                this.setState(() => {
                    return { comments, isLoading: false };
                });
        })
    }

    render () {
        const { comments, isLoading, hideComments } = this.state;
        return (
            <>
                {isLoading ? <LoadingScreen /> :
                    <>
                        <button onClick={this.showHideButton}>
                            Show all comments
                            </button>
                        {hideComments ? <></> :
                            <>
                                <ul className="SingleComment__commentList">
                                    {comments.length === 0 ? <p>No comments found</p> :
                                        comments.map(({
                                            author,
                                            body,
                                            comment_id,
                                            created_at,
                                            votes }) => {
                                            return <SingleComment
                                                author={author}
                                                body={body}
                                                created_at={created_at}
                                                votes={votes}
                                                comment_id={comment_id}
                                                key={comment_id}
                                                handleDelete={this.handleDelete}/>;
                                        })}
                                </ul>
                            </>}
                    </>}
            </>
        );
    }

    showHideButton = () => {
        this.setState(({hideComments}) => {
            return { hideComments: !hideComments };
        });
    }

    handleDelete = (comment_id) => {
        api.deleteComment(comment_id)
            .then(() => {
                this.setState(() => {
                    return {comments: api.filterComments(this.state.comments, comment_id)};
                });
            });
    }
}

export default ArticleComments;