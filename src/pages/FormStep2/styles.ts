import styled from 'styled-components';

export const Container = styled.div`
    p{
        font-size: 13px;
        color: #B8B8D4;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    
    button {
        background-color: #25CD89;
        color: #fff;
        font-size: 14px;
        font-wheight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }

    .backButton{
        font-size: 14px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
        border-radius: 30px;
        margin-right: 10px;
        border: 2px solid #16195C;
    }

    .backButton:hover{
        border: 2px solid #25CD89;
    }
`;

