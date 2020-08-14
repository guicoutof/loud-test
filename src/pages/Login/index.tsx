import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';

import './styles.css';


function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    function handleLogin(e: FormEvent){
        e.preventDefault();

    }

    return (
        <div className="container" id="page-login">
            <PageHeader title="Platforma de opinião para a cidade de São Paulo"/>
            <main>
                <form onSubmit={handleLogin}>
                    <div className="header">
                        <span>Login</span>
                    </div>
                    <div className="input-container">
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
                            value={password} 
                            onChange={ e => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="buttons-container">
                        {/* <button className="ok" type="submit">Entrar</button> */}
                        
                        <Link to="/home" className="ok">
                            Entrar
                        </Link>
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