import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    width: 100%;
    height: calc(100vh - 80px);
   
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-shadow: -2px -2px 3px #f5f5f5, 2px 2px 3px #f5f5f5;
    border-radius: 5px;
    margin-top: 10px;
    background-color: #FFF;
`;


export const AreaRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5px 20px 5px 20px;
    background-color: #f5f2f2;
`;
