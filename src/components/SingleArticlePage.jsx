import { Link } from '@reach/router';
import React, { Component } from 'react';

class SingleArticlePage extends Component {
    render () {
        return (
            <>
                <Link to="/">
                    <h4>Home</h4>
                </Link>
                <p>This is the page for {this.props.articleTitle}</p>
            </>
        );
    }
}

export default SingleArticlePage;