import axios from "axios";

const AuthInstance = axios.create({
    // eslint-disable-next-line prettier/prettier
    baseURL: "http://localhost:8000/api/",
    headers: {
        // eslint-disable-next-line prettier/prettier
        "Content-Type": "application/json",
        // eslint-disable-next-line prettier/prettier
        // Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZXYiLCJpYXQiOjE2MjYyNjY3MjQsImV4cCI6MTYyNjM1MzEyNH0.ApwvbBCNwoSOa8d9M8C7PJYQj2CHjOOcbw0gocwS21cJ_TtOGfSmM0jE55-PAswMZj2lKf-7ZNEmS0Lr0JRt1Q",
        // // eslint-disable-next-line prettier/prettier
    },
});

AuthInstance.defaults.headers.post["Content-Types"] = "application/json";
export default AuthInstance;