
import styled from "styled-components";

const Icon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F1F1F1;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

function Profile({src, alt}) {
    return ( 
        <Icon>
            <Image src={src} alt={alt} />
        </Icon>
    );
}

export default Profile;