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
    user: 'jessjelly',
    usernameInput: '',
    loggedIn: true,
    invalidUsername: false
  }
  
  componentDidMount () {
      this.fetchUser()
  }

  componentDidUpdate () {
    if (this.state.savedUser) {
      window.location.reload()
      this.setState(() => {
        return { savedUser: false };
      });
    }
  }

  render () {
    const { user, usernameInput, loggedIn, invalidUsername } = this.state;
    return (
      <div className="App">
        <Title
          user={user}
          userLogin={this.userLogin}
          userLogout={this.userLogout}
          handleType={this.handleType}
          usernameInput={usernameInput}
          loggedIn={loggedIn}
          invalidUsername={invalidUsername}
        />
        <Router>
          <HomePage
            path="/" />
          <HomePage
            path="/nc-news-st" />
          <TopicsPage
            path="/nc-news-st/topics/:topic"/>
          <SingleArticlePage
            path="nc-news-st/articles/:article_id"
            user={user} />
          <ErrorHandler default />
        </Router>
      </div>
    );
  }

  handleType = ({ target: { value } }) => {
    this.setState(() => {
      return { usernameInput: value };
    });
  }

  userLogin = (event) => {
    event.preventDefault();
    const { usernameInput } = this.state;
    const usernameRegex = /^[A-z]+[0-9]*$/;
    if (usernameRegex.test(usernameInput) === false) {
      this.setState(() => {
        return { invalidUsername: true };
      });
    } else {
      this.setState(() => {
        return { user: usernameInput, usernameInput: '', loggedIn: true };
      }, () => {
          localStorage.setItem('currentUser', JSON.stringify(this.state))
          this.setState(() => {
            return { savedUser: true };
          });
      });
    }
  }

  userLogout = () => {
    this.setState(() => {
      return { user: '', loggedIn: false };
    }, () => {
      localStorage.setItem('currentUser', JSON.stringify(this.state))
      this.setState(() => {
        return { savedUser: true };
      });
  });
  }
  
  fetchUser = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    this.setState(() => {
      return { ...currentUser };
    });
  }

}

export default App;
