import axios from 'axios';

const request = axios.create({baseURL: "https://nc-news-project-st.herokuapp.com/api/"})

export const fetchArticles = () => {
    return request.get("/articles?limit=10000")
        .then(({ data: { articles } }) => {
            return articles;
        })
}

export const fetchTopics = () => {
    return request.get("/topics?limit=10000")
        .then(({ data: { topics } }) => {
            return topics;
    })
}

export const fetchSortedArticles = (sort_by, topicFilter = undefined) => {
    let filterRequest = ''
    if (topicFilter) filterRequest = `&topic=${topicFilter}`;
    return request.get(`/articles/?sorted_by=${sort_by}&limit=10000${filterRequest}`)
        .then(({ data: { articles } }) => {
            return articles;
    })
}

export const fetchOneArticle = (article_id) => {
    return request.get(`/articles/${article_id}`)
        .then(({ data: { article } }) => {
            return article;
    })
}

export const voteOnArticle = (article_id, votes, type) => {
    return request.patch(`/${type}/${article_id}`,
        {
            inc_votes: votes
        }
    );
}

export const fetchCommentsForArticle = (article_id) => {
    return request.get(`/articles/${article_id}/comments`)
        .then(({ data: { comments } }) => {
            return comments;
        });
}

export const postComment = (id, user, commentStr) => {
    const errMsg = 'cannot submit an empty comment';
    if (commentStr === '') {
        return Promise.reject(errMsg);
    } else {
        return request.post(`/articles/${id}/comments`, { username: user, body: commentStr })
            .then((comment) => {
                return comment;
        })
    }
}

export const deleteComment = (comment_id) => {
    return request.delete(`comments/${comment_id}`)
}

export const filterComments = (commentsArr, number) => {
    return commentsArr.filter((comment) => {
        return comment.comment_id !== number;
    });
}