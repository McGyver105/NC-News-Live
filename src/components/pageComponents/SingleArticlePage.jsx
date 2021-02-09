import { Link } from '@reach/router';
import React, { Component } from 'react';

class SingleArticlePage extends Component {

    state = {}

    render () {
        return (
            <>
                <Link to="/">
                    <h4>Home</h4>
                </Link>
                <p>Article: {this.props.articleTitle}</p>
            </>
        );
    }
}

export default SingleArticlePage;