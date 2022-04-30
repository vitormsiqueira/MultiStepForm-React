import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';


export const FormStep3 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    // Define o valor inicial do passo inicial
    // Define o valor inicial do passo inicial
    useEffect(() => {
        // Verifica se possui um nome digitado
        if(state.name === ''){
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    })

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/step4');
        } else {
            alert('Preencha os dados');
        }
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
            <p>Paso 3/4</p>
            <h1>Legal {state.name}, onde te achamos?</h1>
            <p>Preencha seus contatos para conseguirmos te encontrar.</p>

            <hr />

            <label>
                Qual seu e-mail
                <input 
                    type="email"
                    autoFocus
                    value={state.email}
                    onChange={handleEmailChange}
                />
            </label>

            <label>
                Qual seu GitHub?
                <input 
                    type="url"
                    value={state.github}
                    onChange={handleGithubChange}
                />
            </label>
 
            <Link to='/step2' className='backButton'>Voltar</Link>
            <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
        
    );
}