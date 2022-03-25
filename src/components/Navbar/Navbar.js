import styled from "styled-components";
import {useContext} from "react";
import UserNameContext from "../../context/UserNameContext";

const MainDiv = styled.div`
    overflow: hidden;
    background-color: blueviolet;
    color: white;
`;
const Paragraph = styled.p`
    float: right;
    padding-right: 4rem;
    font-size: 1.3rem;
    font-weight: 600;
`;

const Navbar = () => {
    const {userName} = useContext(UserNameContext);

    return(
        <MainDiv><Paragraph>Hi {userName}!</Paragraph></MainDiv>
    );
}

export default Navbar;