import * as api from '../api'

import React, { Component } from 'react';
import SingleComment from './SingleComment';
import LoadingScreen from './LoadingScreen';

class ArticleComments extends Component {
    state = {
        article: this.props.article,
        user: this.props.user,
        isLoading: true,
        showComments: false
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
    render () {
        const { comments, isLoading, showComments } = this.state;
        return (
            <>
                {isLoading ? <LoadingScreen /> :
                    <>
                        <button onClick={this.showHideButton}>
                            Show comments
                            </button>
                        {showComments ? <></> :
                            <>
                                <p>All comments:</p>
                                <ul className="SingleComment__commentList">
                                    {comments.map(({
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
                                            key={comment_id} />;
                                    })}
                                </ul>
                            </>}
                    </>}
            </>
        );
    }

    showHideButton = () => {
        this.setState(({showComments}) => {
            return { showComments: !showComments };
        });
    }
}

export default ArticleComments;