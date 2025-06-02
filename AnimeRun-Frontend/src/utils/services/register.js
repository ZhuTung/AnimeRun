import axios from "axios";

const register = ({first_name, last_name, age, gender, email, username, password}) => {
    const response = axios.post("http://localhost:8080/api/account", {
        first_name,
        last_name,
        age,
        gender,
        email,
        username,
        password
    });

    return response;
}

export default register;