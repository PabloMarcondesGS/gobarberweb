import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';


import { Container, Content, Background } from './styles';


const SigUp: React.FC = () => {
    const handleSubmint = useCallback(async (data: object) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatorio').email('Digite um e-mail valido'),
                password: Yup.string().min(3, 'Minimo de 3 caracteres'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <Container>
            <Background />
            <Content>
                <img src={logoImg} alt="GoBarber" />

                {/* initialData={{ name: 'Pablo' }}  usado para carregar um valor padrao no input*/}
                <Form onSubmit={handleSubmint}>
                    <h1>Faça seu cadastro</h1>
                    <Input name='name' icon={FiUser} placeholder='Nome' />
                    <Input name='email' icon={FiMail} placeholder='E-mail' />
                    <Input name='password' icon={FiLock} type='password' placeholder='Senha' />
                    <Button type='submit'>Cadastrar</Button>
                </Form>

                <a href='login'>
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </Content>
        </Container>
    );
};

export default SigUp;
