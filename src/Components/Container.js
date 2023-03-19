import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    width: 80vw;
    padding: 40px;
    margin: 30px;
    align-items: flex-start;
    box-shadow: 0 4px 8px rgba(0,0,0,0.09);
    border-radius: 5px;
    transition: 0.1s;
    cursor: pointer;
    overflow: hidden;

    &:hover{
        box-shadow: 0 10px 20px rgba(0,0,0,0.09), 0 -10px 20px rgba(0, 0, 0, 0.05);
        text-decoration: none;
        color: inherit;
    }
`

export default Container;