import React from 'react';

const Title = ({user}) => {
    return (<>
        <header className="App__title">
            <h1 className="App__name">NC News St</h1>
            <p className="App__user">{user.slice(0, 1).toUpperCase()}</p>
        </header>
    </>
    );
};

export default Title;