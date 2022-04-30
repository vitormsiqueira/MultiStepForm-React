import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { SelectOptions } from '../../components/SelectOptions';
 
export const FormStep2 = () => {

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
                payload: 2
            });
        }
    })

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/step3');
        } else {
            alert('Preencha os dados');
        }
    };

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Paso 2/4</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor define o seu estado atual, profissionalmente.</p>

                <hr />
                
                <SelectOptions 
                    title='Sou iniciante'
                    description='Comecei a programar há menos de 2 anos'
                    icon='🥳'
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOptions 
                    title='Sou programador'
                    description='Comecei a programar há mais de 2 anos'
                    icon='😎'
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to='/' className='backButton'>Voltar</Link>

                <button onClick={handleNextStep} >Próximo</button>
            </C.Container>
        </Theme>
        
    );
}