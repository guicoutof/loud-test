import React from 'react';

import './styles.css';

export interface Post {
    id: number;
    title: string;
    content: string;
    opinion?: number;

}

interface PostProps {
    post: Post
}

const PostItem: React.FunctionComponent<PostProps> = ({ post }) => {
    return (
        <div id="post">
            <p className="title">{post.title}</p>
            <p className="content">{post.content}</p>
            <p>{post.opinion || 0} Like</p>
        </div>
    )
}

export default PostItem;