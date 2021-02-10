// import React, { Component } from 'react';
// import * as api from '../components/api'

// class OldCode extends Component {
//     render() {
//         return (
//             <div>
//                 <img
//                     src="https://cdn0.iconfinder.com/data/icons/communication-183/80/thumbs-down-512.png"
//                     alt="thumbs down"
//                     className="FullArticle__Thumb" />
//                 <img
//                     src="https://lh3.googleusercontent.com/gRvRUve9VoQLyKG5BICowvMGAHTsmsr8D66IXyQDPK05NE2p1wUDPwzOH64KDnDaPRM8=s180"
//                     alt="no comment"
//                     className="FullArticle__Thumb" />
//                 <img
//                     src="https://www.flaticon.com/svg/vstatic/svg/25/25297.svg?token=exp=1612889456~hmac=7552dab4e95159ce74f976be131e8813"
//                     alt="thumbs up"
//                     className="FullArticle__Thumb" />
//                 <>
//             <p>Author: {article.author}</p>
//             <p>{article.body}</p>
//             <p>Comments: {article.comment_count}</p>
//             <p>Votes: {article.votes}</p>
//             <button
//                 className="FullArticle__voteButton"
//                 disabled={liked[article.article_id]}
//                 onClick={() => {
//                 handleLike(article.article_id)
//             }}>
                
//             </button>
//             <button
//                 className="FullArticle__voteButton"
//                 disabled={!liked[article.article_id] && !disliked[article.article_id]}
//                 onClick={() => {
//                     handleNoComments(article.article_id);
//                 }}>
                
//             </button>
//             <button
//                 className="FullArticle__voteButton"
//                 disabled={disliked[article.article_id]}
//                 onClick={() => {
//                 handleDislike(article.article_id)
//                 }}>
                
//             </button>
//         </>
//             </div>
//         );
//     }
//     handleLike = (article_id) => {
//         const { liked, disliked, user } = this.state;
//         let votes = 1;
//         if (disliked[user][article_id]) votes = 2;
//         if (!liked[user][article_id]) {
//         api.voteOnArticle(article_id, votes)
//             .then(({ data: { article } }) => {
//                 this.setState((current) => {
//                     return {
//                         ...current.liked,
//                         liked: {
//                             ...current.liked[user],
//                             [user]: {
//                                 [article_id]: true
//                             }
//                         },
//                         ...current.disliked,
//                         disliked: {
//                             ...current.liked[user],
//                             [user]: { [article_id]: false }
//                         },
//                         article: {
//                             ...current.article,
//                             votes: article.votes
//                         }
//                     };
//                 });
//             });
//         };
//     }

//     handleNoComments = (article_id) => {
//         const { liked, disliked, user } = this.state;
//         let votes = 0;
//         if (liked[user][article_id]) votes = -1;
//         if (disliked[user][article_id]) votes = 1;
//         api.voteOnArticle(article_id, votes)
//             .then(({ data: { article } }) => {
//                 this.setState((current) => {
//                     return {
//                         ...current.liked,
//                         liked: {
//                             ...current.liked[user],
//                             [user]: {
//                                 [article_id]: false
//                             }
//                         },
//                         ...current.disliked,
//                         disliked: {
//                             ...current.liked[user],
//                             [user]: {
//                                 [article_id]: false
//                             }
//                         },
//                         article: {
//                             ...current.article,
//                             votes: article.votes
//                         }
//                     };
//                 });
//         })
//     }

//     handleDislike = (article_id) => {
//         const { liked, disliked, user } = this.state;
//         let votes = -1;
//         if (liked[user][article_id]) votes = -2;
//         if (!disliked[user][article_id]){
//         api.voteOnArticle(article_id, votes)
//             .then(({ data: { article } }) => {
//                 this.setState((current) => {
//                     return {
//                         ...current.liked,
//                         liked: {
//                             ...current.liked[user],
//                             [user]: {
//                                 [article_id]: false
//                             }
//                         },
//                         ...current.disliked,
//                         disliked: {
//                             ...current.liked[user],
//                             [user]: {
//                                 [article_id]: true
//                             }
//                         },
//                         article: {
//                             ...current.article,
//                             votes: article.votes
//                         }
//                     };
//                 });
//             });
//         };
//     }
// }

// export default OldCode;