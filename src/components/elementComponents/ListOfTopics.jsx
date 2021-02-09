import React, { Component } from 'react';
import * as api from '../api'
import EachTopic from './EachTopic';
import '../../Frontpage.css';

class ListOfTopics extends Component {
    state = {
        isLoading: true
    }

    componentDidMount () {
    api.fetchTopics()
        .then((topics) => {
            this.setState(() => {
                return { "topics": topics, isLoading: false };
            });
    })
    }
    
    render () {
        return (
            <>{this.state.isLoading ? <p>Loading...</p>
                :
                <div className="App__ListOfTopics">
                    <p>List of topics</p>
                    <ul className="ListOfTopics__list">
                        {this.state.topics.map((topic) => {
                            return <EachTopic key={topic.slug} topic={topic} />
                        })}
                    </ul>
                </div>}
            </>
        );
    }
}

export default ListOfTopics;