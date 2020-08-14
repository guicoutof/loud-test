import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';
import PostItem, { Post } from '../../components/PostItem';

import './styles.css'

function PostList () {
    const [search, setSearch] = React.useState('');

    const postList = [{
        id:1,
        title:"Título",
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo veritatis illo eos placeat distinctio soluta, accusantium, ea alias ducimus, assumenda totam eveniet! Quaerat voluptate odit vero maiores veritatis accusantium commodi."
    },{
        id:2,
        title:"Título",
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo veritatis illo eos placeat distinctio soluta, accusantium, ea alias ducimus, assumenda totam eveniet! Quaerat voluptate odit vero maiores veritatis accusantium commodi."
    },{
        id:3,
        title:"Título",
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo veritatis illo eos placeat distinctio soluta, accusantium, ea alias ducimus, assumenda totam eveniet! Quaerat voluptate odit vero maiores veritatis accusantium commodi."
    }]
    return(
        <div className="container" id="page-post-list">
            <header>
                <PageHeader title={"Platforma de opinião para a cidade de São Paulo"} />
                <div className="filter-block">
                    <Input 
                        name={"filter"} 
                        label={"Pesquisar"} 
                        value={search} 
                        onChange={ e => setSearch(e.target.value)} 
                    />
                </div>
            </header>
            <main>
                {postList.map((post: Post) => {
                    if(post.title.includes(search))
                        return <PostItem key={post.id} post={post} />;
                    else return null;
                })}
            </main>
        </div>
    )
}

export default PostList;