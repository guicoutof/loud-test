import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Inputs';

import './styles.css'

function Register () {
    const [user, setUser] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    function handleRegister(e: FormEvent){
        e.preventDefault();

    }

    return (
        <div className="container" id="page-register">
            <PageHeader title="Platforma de opinião para a cidade de São Paulo"/>
            <main>
                <form onSubmit={handleRegister}>
                    <div className="header">
                        <span>Cadastrar</span>
                    </div>
                    <div className="input-container">
                        <Input 
                            name="user" 
                            label="Nome de usuário" 
                            value={user} 
                            onChange={ e => setUser(e.target.value)} 
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