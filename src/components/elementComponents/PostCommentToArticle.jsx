import React, { Component } from 'react';
import * as api from '../api'
import ArticleComments from './ArticleComments'

class PostCommentToArticle extends Component {

    state = {
        id: this.props.id,
        user: this.props.user,
        article: this.props.article,
        hideInput: false,
        posted: false,
        userComment: ''
    }

    componentDidUpdate () {
        if (this.state.posted) {
            this.setState(() => {
                return {posted: false}
            })
        }
    }

    render () {
        const { hideInput, user, article, posted } = this.state;
        return (
            <div>
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
                    <ArticleComments
                    article={article}
                    user={user}
                    posted={posted}
                    />
            </div>
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
                return { posted: true };
        })
    }

    handleTyping = (event) => {
        this.setState(() => {
            return {userComment: event.target.value}
        })
    }
    
}

export default PostCommentToArticle;