import styled from "styled-components";

const MainDiv = styled.div`
    padding: 2rem 4rem;
  font-size: 1.3rem;
`;

const FormWrapper = (props) => {
    const {children} = props;

    return(
        <MainDiv>{children}</MainDiv>
    );
}

export default FormWrapper;