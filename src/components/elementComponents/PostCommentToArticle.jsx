import React, { Component } from 'react';
import * as api from '../api'
import LoadingScreen from './LoadingScreen';
import SingleComment from './SingleComment';
import '../pageComponents/SingleArticlePage.css'

class PostCommentToArticle extends Component {

    state = {
        id: '',
        user: '',
        article: null,
        hideInput: true,
        posted: false,
        posting: false,
        userComment: '',
        isLoading: true,
        comments: {},
        hideComments: true,
        errorFound: { found: false },
    }

    componentDidMount () {
        const { article: { article_id } } = this.props;
        api.fetchCommentsForArticle(article_id)
            .then((comments) => {
                this.setState(() => {
                    return { comments, isLoading: false };
                });
        })
    }

    componentDidUpdate () {
        if (this.state.posted) {
            const { article: { article_id } } = this.props;
            api.fetchCommentsForArticle(article_id)
                .then((comments) => {
                    this.setState(() => {
                        return { comments, posted: false };
                    });
                });
        };
    }

    render () {
        const {
            hideInput,
            isLoading,
            comments,
            hideComments,
            posting,
            userComment,
            errorFound: {
                found,
                msg }
        } = this.state;
        const { user } = this.props;
        return (
            <>{isLoading ? <LoadingScreen/> :
                <>
                    { user === '' ? <></> :
                        <button
                        className="PostCommentToArticle__postButton"
                        onClick={this.handleClick}>Click to share your opinion
                        </button>}
                    {hideInput || user === '' ? <></> :
                        <form
                            className="PostCommentToArticle__submitForm"
                            onSubmit={this.handleSubmit}>
                            <label>
                                <textarea
                                    className="PostCommentToArticle__submitInput"
                                    onChange={this.handleTyping}
                                    type="text"
                                    placeholder="tell us what you think"
                                    value={userComment}
                                ></textarea>
                            </label>
                            <button
                                className="PostComment__submitButton"
                                disabled={posting}>
                                Submit
                                </button>
                            {found ? <p>{msg}</p> : <></>}
                        </form>
                    }
                    {
                    posting ?
                        <>
                            <LoadingScreen/>
                        </>
                            :
                        <></>
                    }
                    <p className="PostComment__Title">
                        User comments
                        </p>
                    <>
                        <button
                            className="PostComment__ShowButton"
                            onClick={this.showHideButton}>
                            Click me
                            </button>
                        {hideComments ? <></> :
                            <>
                                <ul className="SingleComment__commentList"
                                id="SingleComment__commentList">
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
                                                user={user}
                                                handleDelete={this.handleDelete}/>;
                                        })}
                                </ul>
                            </>}
                    </>


                </>}
            </>
        );
    }

    handleClick = () => {
        this.setState((current) => {
            return {
                hideInput: !current.hideInput
            };
        });
    }

    handleSubmit = (event) => {
        const { userComment } = this.state;
        const { id, user } = this.props;
        event.preventDefault();
        this.setState(() => {
            return {
                posting: true
            };
        });
        api.postComment(id, user, userComment)
            .then(() => {
                this.setState(() => {
                    return {
                        posted: true,
                        posting: false,
                        hideComments: false,
                        userComment: ''
                    };
                });
            })
            .catch((err) => {
                this.setState(() => {
                    return {
                        errorFound: {
                            found: true,
                            msg: err
                        }
                    };
                });
            });
    }

    handleTyping = (event) => {
        this.setState(() => {
            return {
                userComment: event.target.value
            };
        });
    }

    handleDelete = (comment_id) => {
        this.setState(() => {
            return {comments: api.filterComments(this.state.comments, comment_id)};
        });
        api.deleteComment(comment_id)
    }
    
    showHideButton = () => {
        this.setState(({hideComments}) => {
            return {
                hideComments: !hideComments
            };
        });
    }
}

export default PostCommentToArticle;