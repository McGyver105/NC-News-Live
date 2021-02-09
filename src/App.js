import './App.css';
import HomePage from './components/HomePage';
import Title from './components/Title';
import { Link, Router } from '@reach/router'
import TopicsPage from './components/TopicsPage';
import SingleArticlePage from './components/SingleArticlePage';

function App() {
  return (
    <div className="App">
      <Title />
      <Router>
        <HomePage path="/"/>
        <HomePage path="/nc-news-st"/>
        <TopicsPage path="/nc-news-st/topics/:topic" />
        <SingleArticlePage path="nc-news-st/articles/:articleTitle"/>
      </Router>
    </div>
  );
}

export default App;
