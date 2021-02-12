import React, { Component } from 'react';
import * as api from '../api';

class CommentsCounter extends Component {

    state = {
        id: this.props.id,
        startingVotes: this.props.votes,
        voteChange: 0,
        likeDisabled: false,
        dislikeDisabled: false,
        type: this.props.type,
        user: this.props.user
    }

    componentDidMount () {
        this.fetchVotes();
    }

    render () {
        const { startingVotes, voteChange, user } = this.state;
        return (
            <>
                <p>Votes: {startingVotes + voteChange}</p>
                
                    <button
                    disabled={voteChange === 1}
                    onClick={(() => {
                        this.handleClick(1)
                    })}
                    className="FullArticle__voteButton"
                    >
                    <img
                    src="https://www.flaticon.com/svg/vstatic/svg/25/25297.svg?token=exp=1612889456~hmac=7552dab4e95159ce74f976be131e8813"
                    alt="thumbs up"
                    className="FullArticle__Thumb" />   
                </button>
                <button
                    disabled={voteChange === 0}
                    onClick={(() => {
                        this.handleClick(0)
                    })}
                    className="FullArticle__voteButton">
                    <img
                    src="https://lh3.googleusercontent.com/gRvRUve9VoQLyKG5BICowvMGAHTsmsr8D66IXyQDPK05NE2p1wUDPwzOH64KDnDaPRM8=s180"
                    alt="no comment"
                    className="FullArticle__Thumb" /></button>
                <button
                    disabled={voteChange === -1}
                    onClick={(() => {
                        this.handleClick(-1)
                    })}
                    className="FullArticle__voteButton">
                    <img
                    src="https://cdn0.iconfinder.com/data/icons/communication-183/80/thumbs-down-512.png"
                    alt="thumbs down"
                    className="FullArticle__Thumb" />
                            </button>
                    </>
        );
    }

    handleClick = (voteIncrement) => {
        const { id, voteChange, type } = this.state;
        let votes = voteIncrement;
        if (voteChange >= 1 && voteIncrement === 1) votes = 0;
        if (voteChange <= -1 && voteIncrement === -1) votes = 0;
        if (voteIncrement === 0 && voteChange === -1) votes = 1;
        if (voteIncrement === 0 && voteChange === 1) votes = -1;
        this.setState((current) => {
            return { voteChange: current.voteChange + votes };
        });
        api.voteOnArticle(id, votes, type)
            .then(() => {
                localStorage.setItem(`articleVotes${id}`, JSON.stringify(this.state));
        })
    }

    fetchVotes = () => {
        const { id } = this.state;
        const storedVotes = JSON.parse(localStorage.getItem(`articleVotes${id}`))
        if (storedVotes){
            this.setState(() => {
                return { voteChange: storedVotes.voteChange, startingVotes: storedVotes.startingVotes };
            });
        }
    }
}

export default CommentsCounter;