import { UserLogin } from "./actions"
const initialState = {
    login:"Kajal"
}
export const loginReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case UserLogin: return {login: payload }
        default: return store;

    }
}