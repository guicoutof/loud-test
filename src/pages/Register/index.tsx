import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';

import api from '../../services/api';

import './styles.css'

function Register () {
    let history = useHistory();

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [msg, setMsg] = React.useState('');
    
    async function handleRegister(e: FormEvent){
        e.preventDefault();

        try{
            await api.post('register',{
                email,
                username,
                password
             });
             setMsg('Usuário criado com sucesso!');
             setTimeout(() => {
                 history.push('/');
             }, 2000)
        }catch(err){
            setError('Problema ao criar o usuário!');
        }

    }

    return (
        <div className="container" id="page-register">
            <PageHeader title="Platforma de opinião para a cidade de São Paulo"/>
            <main>
                <form onSubmit={handleRegister}>
                    <div className="header">
                        <span>Cadastrar</span>
                        <p className="msg">{msg}</p>
                        <p className="error">{error}</p>
                    </div>
                    <div className="input-container">
                        <Input 
                            name="user" 
                            label="Nome de usuário" 
                            minLength={ 3 }
                            maxLength={ 30 } 
                            value={username} 
                            onChange={ e => setUsername(e.target.value)} 
                        />
                        <Input 
                            name="email" 
                            label="Email" 
                            value={email} 
                            onChange={ e => setEmail(e.target.value)} 
                        />
                        <Input 
                            name="password" 
                            label="Senha" 
                            type="password"
                            minLength={ 8 }
                            maxLength={ 30 } 
                            value={password} 
                            onChange={ e => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="buttons-container">
                        <button className="ok" type="submit">Cadastrar</button>
                        
                        <Link to="/" className="register">
                            Já possuo conta
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Register;