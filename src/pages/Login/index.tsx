import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';

import { login } from '../../services/auth';
import api from '../../services/api';

import './styles.css';


function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    
    async function handleLogin(e: FormEvent){
        e.preventDefault();

        setError('');
        try{
            const response = await api.post('login',{ username, password });
            login(response.data.token);
            window.location.reload();
        }catch(err){
            setError('Problema ao realizar o login, verifique suas credenciais!');
        }

    }

    return (
        <div className="container" id="page-login">
            <PageHeader title="Platforma de opinião para a cidade de São Paulo"/>
            <main>
                <form onSubmit={handleLogin}>
                    <div className="header">
                        <span>Login</span>
                        <p className="error">{error}</p>
                    </div>
                    <div className="input-container">
                        <Input 
                            name="username" 
                            label="Usuário" 
                            value={username} 
                            minLength={ 3 }
                            maxLength= { 30 }
                            onChange={ e => setUsername(e.target.value)} 
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
                        <button className="ok" type="submit">Entrar</button>

                        <Link to="/register" className="register">
                            Registrar
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Login;