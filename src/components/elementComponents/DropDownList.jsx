import React from 'react';

const DropDownList = (props) => {
    return (
        <form className="header__dropdownlist">
            <label>Sort by
                <select className="header__selection"
                    onChange={props.handleSort}>
                    <option value="created_at">Created At</option>
                    <option value="author">Author</option>
                    <option value="topic">Topic</option>
                </select>
            </label>
        </form>
    );
};

export default DropDownList;