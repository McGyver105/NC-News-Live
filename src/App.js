import './App.css';
import HomePage from './components/HomePage';
import Title from './components/Title';
import { Router } from '@reach/router'
import TopicsPage from './components/TopicsPage';

function App() {
  return (
    <div className="App">
      <Title />
      <Router>
        <HomePage path="/" />
        <HomePage path="/nc-news-st"/>
        <TopicsPage path="/nc-news-st/topics"/>
      </Router>
    </div>
  );
}

export default App;
