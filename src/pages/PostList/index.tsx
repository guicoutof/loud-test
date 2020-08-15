import React, { useEffect, FormEvent } from 'react';
import Modal from 'react-modal';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';
import PostItem, { Post } from '../../components/PostItem';

import api from '../../services/api';
import { logout } from '../../services/auth';

import './styles.css'
import Textarea from '../../components/TextArea';

  function PostList () {
      const [search, setSearch] = React.useState('');
      const [postList,setPostList] = React.useState([]);
      const [modal, setModal] = React.useState(false);
      const [title, setTitle] = React.useState('');
      const [content, setContent] = React.useState('');

    async function getPostList(){
        await api.get('opinions')
            .then(response=>{
                setPostList(response.data.opinions);
            });
    }

    useEffect(() => {
        getPostList();
    },[])

    async function handleSubmit(e: FormEvent){
        e.preventDefault();
        
        try{
            await api.post('opinions',{ title, content })
            alert('Opinião criada com sucesso!');
            getPostList();
        }catch(err){
            alert('Desculpe, aconteceu algum problema :(, tente novamente!')
        }
    }

    function handleLogout() {
        logout();
    }

    function openModal(){
        setModal(true);
    }

    function closeModal(){
        setModal(false);
    }
    
    return(
        <div className="container" id="page-post-list">
            <header>
                <button className="logout" onClick={handleLogout}>Sair</button>

                <PageHeader title={"Platforma de opinião para a cidade de São Paulo"} />

                <div className="filter-block">
                    <Input 
                        name="filter"
                        label="Filtrar"
                        value={search} 
                        onChange={ e => setSearch(e.target.value)} 
                    />
                </div>

                <button className="create-opinion" onClick={openModal}>Criar opinião</button>
                <Modal
                    ariaHideApp={false}
                    isOpen={modal}
                    onRequestClose={closeModal}
                    className="page-post-list-modal"
                >
                    <div className="modal-content">
                        <h2>Opinião</h2>

                        <form onSubmit={handleSubmit}>
                            <Input 
                                label="Título" 
                                name="title" 
                                value={title} 
                                onChange={ e => setTitle(e.target.value)} 
                                />
                            <Textarea 
                                name="Opinião"
                                label="Opinião"
                                value={content} 
                                onChange={ e => setContent(e.target.value)} 
                            />
                        <button type="submit" className="send">Enviar</button>
                        </form>
                    </div>
                </Modal>
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