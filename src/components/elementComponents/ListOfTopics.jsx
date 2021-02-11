import React, { Component } from 'react';
import * as api from '../api'
import EachTopic from './EachTopic';
import '../../Frontpage.css';
import './ListOfTopics.css'
import LoadingScreen from './LoadingScreen';

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
            <>{this.state.isLoading ? <LoadingScreen/>
                :
                <div className="App__ListOfTopics">
                    <p>Featured Topics</p>
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