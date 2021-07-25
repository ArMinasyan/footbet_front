import { host } from "./constants"

const AUTH_URL = host + `/auth`;

export const REGISTER = {
    url: AUTH_URL + '/registration',
    method: 'post'
}

export const LOGIN = {
    url: AUTH_URL + '/login',
    method: 'post'
}
