import axios from 'axios';

const request = axios.create({baseURL: "https://nc-news-project-st.herokuapp.com/api/"})

export const fetchArticles = () => {
    return request.get("/articles")
        .then(({ data: { articles } }) => {
            return articles;
        });
}

export const fetchTopics = () => {
    return request.get("/topics")
        .then(({ data: { topics } }) => {
            return topics;
    })
}