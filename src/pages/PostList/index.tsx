import React, { useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';
import PostItem, { Post } from '../../components/PostItem';

import api from '../../services/api';
import { logout } from '../../services/auth';

import './styles.css'

function PostList () {
    const [search, setSearch] = React.useState('');
    const [postList,setPostList] = React.useState([]);

    useEffect(() => {
        async function getPostList(){
            await api.get('opinions')
                .then(response=>{
                    setPostList(response.data.opinions);
                });
        }
        getPostList();
    },[])

    function handleLogout() {
        logout();
    }
    
    return(
        <div className="container" id="page-post-list">
            <header>
                <button className="logout" onClick={handleLogout}>Sair</button>
                <PageHeader title={"Platforma de opinião para a cidade de São Paulo"} />
                <div className="filter-block">
                    <Input 
                        name={"filter"} 
                        label={"Filtrar"} 
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