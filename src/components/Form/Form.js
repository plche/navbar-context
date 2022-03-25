import styled from "styled-components";
import {useContext, useRef} from "react";
import UserNameContext from "../../context/UserNameContext";

const TextInput = styled.input.attrs({
    type: 'text'
})`
    width: 15rem;
    border: 1px solid transparent;
    font-size: 1.3rem;
    padding: .75rem;
  
    background-color: #e9ecef;
    margin: 0 1.4rem;
`;

const Form = () => {
    const inputEl = useRef(null);
    const {userName, setUserName} = useContext(UserNameContext);

    const handleOnChange = e => setUserName(e.target.value);

    return(
        <form>
            <label htmlFor="userName">Your Name:</label>
            <TextInput type="text" onChange={handleOnChange}
                       name="userName" value={userName} ref={inputEl} />
        </form>
    );
}

export default Form;