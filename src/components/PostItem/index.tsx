import React from 'react';
import ReactMarkdown from 'react-markdown';

import api from '../../services/api';

import './styles.css';

export interface Post {
    id: number;
    title: string;
    content: string;
    upvotes_count: number;

}

export interface Upvote {
    opinion_id: number;
    user_id: string;
}

interface PostProps {
    post: Post
}

const PostItem: React.FunctionComponent<PostProps> = ({ post }) => {
    const [like, setLike] = React.useState(false);
    const [upvote_count, setUpvoteCount] = React.useState(post.upvotes_count);
    // f6042d81-7f36-46e6-8f94-d3cb14201d0d   meu user id

// codigo para corrigir o upvote quando a lista tomam refresh
// id estatico, não foi possível capturar o id do usuário logado

    //     async function getUpvote(){
    //         await api.get(`opinions/${post.id}`)
    //             .then(response => {
    //                 const aux = response.data.upvotes.filter( (upvote: Upvote) => {
    //                     if(upvote.user_id === "f6042d81-7f36-46e6-8f94-d3cb14201d0d")// id do meu usuário
    //                         return upvote
    //                         else return null
    //                 })        
    //                 if(aux.length>0) {setLike(true);}
    //                 else setLike(false);
    //             })
    //     }

    // useEffect(() => {
    //     getUpvote();
    // },[])

    async function handleInsertUpvote(){
        try{
            await api.post(`opinions/${post.id}/vote`).then(response => {
                    setLike(true);
                    setUpvoteCount(upvote_count+1)
                    })
        }catch(err){
            handleDeleteUpvote()
        }
    }
            
    async function handleDeleteUpvote(){
        try{
            await api.delete(`opinions/${post.id}/vote`).then(response => {
                    setLike(false);
                    setUpvoteCount(upvote_count-1)
                    })
        }catch(err){
            handleInsertUpvote()
        }
    }

    return (
        <div id="post-item">
            <p className="title">{post.title}</p>

            <ReactMarkdown source={post.content} className="content"/>

            <p className="upvote">{upvote_count} {post.upvotes_count>1? 'Curtidas' : 'Curtida'}</p>

            {
                !like?
                <button className="like" onClick={handleInsertUpvote}>Curtir</button>
                :<button className="dislike" onClick={handleDeleteUpvote}>Descurtir</button>
            }
        </div>
    )
}

export default PostItem;