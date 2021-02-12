import React from 'react';

const Title = ({ user, userLogin, userLogout, handleType, usernameInput = '', loggedIn, invalidUsername }) => {
    return (
        <> {loggedIn ?
            <>
                <header className="App__title">
                    <h1 className="App__name">NC News St</h1>
                    <p className="App__user">{user.slice(0, 1).toUpperCase()}</p>
                
                <button
                    className="Title__logout"
                    onClick={userLogout}
                >
                        logout
                    </button>
                </header>
            </>
            :
            <>
                <header className="App__title">
                    <h1 className="App__name">NC News St</h1>
                    <p className="App__user">{user.slice(0, 1).toUpperCase()}</p>
                
                    <form
                        className="Title__login"
                        onSubmit={userLogin}>
                    <input
                        placeholder="existing user only - contact admin"
                        className="Title__loginInput"
                        type="text"
                        onChange={handleType}
                        value={usernameInput}
                    >
                    </input>
                    <button
                    >
                        Login
                        </button>
                    </form>
                </header>
            </>
        }
        </>
    );
};

export default Title;