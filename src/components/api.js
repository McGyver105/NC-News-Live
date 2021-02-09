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