import { UserLogin } from "./actions"
const initialState = {
    login: JSON.parse(localStorage.getItem("userlogin")) || false
}
export const loginReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case UserLogin: return { login: payload }
        default: return store;

    }
}