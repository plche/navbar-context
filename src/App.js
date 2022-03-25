import './App.css';
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import FormWrapper from "./components/FormWrapper/FormWrapper";
import Form from "./components/Form/Form";

function App() {
    return (
        <Wrapper>
            <Navbar />
            <FormWrapper>
                <Form />
            </FormWrapper>
        </Wrapper>
    );
}

export default App;
