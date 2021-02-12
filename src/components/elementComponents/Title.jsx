import React from 'react';

const Title = ({ user, userLogin, userLogout, handleType, usernameInput = '', loggedIn }) => {
    return (
        <> {loggedIn ?
            <>
                <header className="App__title">
                    <h1 className="App__name">NC News St</h1>
                    <p className="App__user">{user.slice(0, 1).toUpperCase()}</p>
                </header>
                <button onClick={userLogout}>logout</button>
            </>
            :
            <>
                <header className="App__title">
                    <h1 className="App__name">NC News St</h1>
                    <p className="App__user">{user.slice(0, 1).toUpperCase()}</p>
                </header>
                <form onSubmit={userLogin}>
                    <input
                        type="text"
                        onChange={handleType}
                        value={usernameInput}
                    >
                    </input>
                    <button>Login</button>
                </form>
            </>
        }
        </>
    );
};

export default Title;