import axios from 'axios';

const request = axios.create({baseURL: "https://nc-news-project-st.herokuapp.com/api/"})

export const fetchArticles = () => {
    return request.get("/articles")
        .then(({ data: { articles } }) => {
            return articles;
        })
}

export const fetchTopics = () => {
    return request.get("/topics")
        .then(({ data: { topics } }) => {
            return topics;
    })
}

export const fetchSortedArticles = (sort_by) => {
    if (sort_by === 'all') {
        return request.get("/articles")
        .then(({ data: { articles } }) => {
            return articles;
    })
}
    else return request.get(`/articles/?sorted_by=${sort_by}`)
        .then(({ data: { articles } }) => {
            return articles;
    })
}