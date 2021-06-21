import React from 'react';

const Post = (props) => {
    const {id, title, body} = props.post
    return (
        <div>
            <h2> {id} title: {title}</h2>
            <p>Body: {body}</p>
            <button>Show comments</button>
        </div>
    );
};

export default Post;