
import styled from "styled-components";

const Icon = styled.div`
    width: 40px;
    height: 40px;
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

function Profile({src, alt, onClick}) {
    return ( 
        <Icon>
            <Image 
                src={src} 
                alt={alt} 
                onClick={onClick}
                />
        </Icon>
    );
}

export default Profile;