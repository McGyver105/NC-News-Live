import './App.css';
import { Router } from '@reach/router'
import HomePage from './components/pageComponents/HomePage';
import Title from './components/elementComponents/Title';
import TopicsPage from './components/pageComponents/TopicsPage';
import SingleArticlePage from './components/pageComponents/SingleArticlePage';

const user = 'jessjelly';

function App () {
  return (
    <div className="App">
      <Title user={user}/>
      <Router>
        <HomePage path="/"/>
        <HomePage path="/nc-news-st"/>
        <TopicsPage path="/nc-news-st/topics/:topic" />
        <SingleArticlePage path="nc-news-st/articles/:article_id" user={user} />
      </Router>
    </div>
  );
}

export default App;
