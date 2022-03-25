import {useState} from "react";
import UserNameContext from "../../context/UserNameContext";

const Wrapper = (props) => {
    const {children} = props;
    const [userName, setUserName] = useState("");

    return(
        <div>
            <UserNameContext.Provider value={{userName, setUserName}}>
                {children}
            </UserNameContext.Provider>
        </div>
    );
}

export default Wrapper;