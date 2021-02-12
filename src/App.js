import './App.css';
import { Router } from '@reach/router'
import HomePage from './components/pageComponents/HomePage';
import Title from './components/elementComponents/Title';
import TopicsPage from './components/pageComponents/TopicsPage';
import SingleArticlePage from './components/pageComponents/SingleArticlePage';
import ErrorHandler from './components/ErrorHandling/ErrorHandler'
import React, { Component } from 'react';

class App extends Component {

  state = {
    user: '',
    usernameInput: '',
    loggedIn: false
  }

  render () {
    const { user, usernameInput, loggedIn } = this.state;
    return (
      <div className="App">
        <Title
          user={user}
          userLogin={this.userLogin}
          userLogout={this.userLogout}
          handleType={this.handleType}
          usernameInput={usernameInput}
          loggedIn={loggedIn}
        />
        <Router>
          <HomePage path="/" />
          <HomePage path="/nc-news-st" />
          <TopicsPage path="/nc-news-st/topics/:topic" />
          <SingleArticlePage path="nc-news-st/articles/:article_id" user={user} />
          <ErrorHandler default />
        </Router>
      </div>
    );
  }

  handleType = ({ target: { value } }) => {
    console.log(this.state.usernameInput)
    this.setState(() => {
      return { usernameInput: value };
    });
  }

  userLogin = (event) => {
    event.preventDefault();
    const { usernameInput } = this.state;
    this.setState(() => {
      return { user: usernameInput, usernameInput: '', loggedIn: true };
    });
  }

  userLogout = () => {
    this.setState(() => {
      return { user: '', loggedIn: false };
    });
  }

}

export default App;
