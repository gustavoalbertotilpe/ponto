import styled from 'styled-components';

export const Main = styled.div`
    width: 300px;
`;

export const Ul = styled.ul`
    width: 100%;
    margin-top: 18px;
`;

export const Li = styled.ul`
    display: flex;
    gap: 5px;
    list-style: none;
    padding: 5px;
    transition: all 0.5s ease;
    a {
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: inherit;
        
    }
    &:hover{
        background-color: #830cb3;
        color: #fff;
    }
    
`;
