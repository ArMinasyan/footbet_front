import { host } from "./constants"

const AUTH_URL = host + `auth`;

export const REGISTER = {
    url: AUTH_URL + '/registration',
    method: 'post'
}

export const LOGIN = {
    url: AUTH_URL + '/login',
    method: 'post'
}

export const START_RESET_PASSWORD = email => ({
    url: AUTH_URL + `/password/reset?email=${email}`,
    method: 'post'
})


export const VERIFY_PASSWORD_RESET = {
    url: AUTH_URL + `/password/verify_code`,
    method: 'put'    
}

export const SET_NEW_PASSWORD = {
    url: AUTH_URL + `/password/new_password `,
    method: 'put'    
}

export const GET_NEWS = {
    url: host + `admin/news`,
    method: `get`
}

export const GET_MATCHES = {
    url: host + `admin/match-of-the-day`,
    method: `get`
}

export const GET_MATCHES_OF_NEXT_DAY = {
    url: host + `admin/match-of-the-day?type=next_day`,
    method: `get`
}

export const GET_PREDICTIONS = {
    url: host + `admin/prediction`,
    method: `get`
}

export const GET_FEEDBACK = id => ({
    url: host + `feedback/${id}?sort_by=created_at&order_by=desc`,
    method: `get`
})

export const GET_MATCHES_BY_TYPE = type => ({
    url: host + `admin/game?type=${type}`,
    method: `get`
})
