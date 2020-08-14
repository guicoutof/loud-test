import React from 'react';
import ReactMarkdown from 'react-markdown';

import './styles.css';

export interface Post {
    id: number;
    title: string;
    content: string;
    upvotes_count?: number;

}

interface PostProps {
    post: Post
}

const PostItem: React.FunctionComponent<PostProps> = ({ post }) => {
    return (
        <div id="post">
            <p className="title">{post.title}</p>
            <p className="content"><ReactMarkdown source={post.content} /></p>
            <p>{post.upvotes_count || 0} Like</p>
        </div>
    )
}

export default PostItem;