import { Link } from '@reach/router';
import React, { Component } from 'react';
import FullArticle from '../elementComponents/FullArticle';
import LoadingScreen from '../elementComponents/LoadingScreen';
import * as api from '../api'
import ArticleComments from '../elementComponents/ArticleComments';

class SingleArticlePage extends Component {

    state = {
        article: {},
        article_id: this.props.article_id,
        isLoading: true,
        user: 'name',
    }

    componentDidMount () {
        api.fetchOneArticle(this.props.article_id)
            .then((article) => {
                this.setState(() => {
                    return {article: article, isLoading: false, user: this.props.user}
                })
            })
    }

    render () {
        const { article, user } = this.state;
        return (
            <>{
                this.state.isLoading ? <LoadingScreen />
                    :
                    <>
                        <Link to="/nc-news-st">
                            <h4>Go Back</h4>
                        </Link>
                        <p>Article: {article.title}</p>
                        <FullArticle
                            id={this.props.article_id}
                            user={user}
                        />
                        <p>Put post comments here</p>
                        <ArticleComments
                            article={article}
                            user={user} />
                    </>
            }
            </>
        );
    }

    
}

export default SingleArticlePage;