
import styled from "styled-components";

const Icon = styled.div`
    width: 130px;
    height: 90%;
    border-radius: 10%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

function CategoryIcon({src, alt}) {
    return ( 
        <Icon>
            <Image src={src} alt={alt} />
        </Icon>
    );
}

export default CategoryIcon;