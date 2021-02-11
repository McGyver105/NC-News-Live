import React, { Component } from 'react';
import * as api from '../api'
import LoadingScreen from './LoadingScreen';
import SingleComment from './SingleComment';

class PostCommentToArticle extends Component {

    state = {
        id: this.props.id,
        user: this.props.user,
        article: this.props.article,
        hideInput: true,
        posted: false,
        userComment: '',
        isLoading: true,
        comments: {},
        hideComments: true
    }

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
        if (this.state.posted) {
            console.log('updating')
        const { article_id } = this.state.article;
            api.fetchCommentsForArticle(article_id)
                .then((comments) => {
                    this.setState(() => {
                        return { comments, posted: false };
                    });
                });
        };
    }

    render () {
        const { hideInput, isLoading, comments, hideComments } = this.state;
        return (
            <>{isLoading ? <LoadingScreen/> :
                <>
                    <button onClick={this.handleClick}>Click to post comment</button>
                    {hideInput ? <></> :
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input onChange={this.handleTyping}
                                    type="text" placeholder="tell us what you think"
                                ></input>
                            </label>
                            <button>Submit</button>
                        </form>}
                    <p>User comments</p>
                    <>
                        <button onClick={this.showHideButton}>
                            Show all comments
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
            return { hideInput: !current.hideInput };
        });
    }

    handleSubmit = (event) => {
        const { id, user, userComment } = this.state;
        event.preventDefault();
        api.postComment(id, user, userComment)
            .then(() => {
                this.setState(() => {
                    return { posted: true, hideComments: false }
                })
        })
    }

    handleTyping = (event) => {
        this.setState(() => {
            return {userComment: event.target.value}
        })
    }

    handleDelete = (comment_id) => {
        api.deleteComment(comment_id)
            .then(() => {
                this.setState(() => {
                    return {comments: api.filterComments(this.state.comments, comment_id)};
                });
            });
    }
    
    showHideButton = () => {
        this.setState(({hideComments}) => {
            return { hideComments: !hideComments };
        });
    }
}

export default PostCommentToArticle;