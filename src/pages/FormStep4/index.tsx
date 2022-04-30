import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';


export const FormStep4 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    // Define o valor inicial do passo inicial
    useEffect(() => {
        // Verifica se possui um nome digitado
        if(state.name === ''){
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    })

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            console.log(state);
        }
    };

    return (
        <Theme>
            <C.Container>
            <p>Paso 4/4</p>
            <h1>{state.name}, este é o resumo do seu cadastro</h1>
            <p>Revise os dados. Se precisar volte as etapas e altere.</p>
           
            <C.Values>
                <p>Nome completo</p>
                {state.name}
                <hr/>
                <p>Nível</p>
                {state.level === 1 && '😎 Programador'} {state.level === 0 && '🥳 Iniciante'}
                <hr/>
                <p>Email</p>
                {state.email}
                <hr/>
                <p>GitHub</p>
                {state.github}

                <p/>
            
            </C.Values>
 
            <Link to='/step3' className='backButton'>Voltar</Link>
            <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
        
    );
}