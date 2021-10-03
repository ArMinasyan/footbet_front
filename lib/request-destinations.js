import {
  host
} from "./constants"

const AUTH_URL = host + `auth/`;
const ACCOUNT_URL = host + `account/`

export const REGISTER = {
  url: AUTH_URL + 'registration',
  method: 'post'
}

export const LOGIN = {
  url: AUTH_URL + 'login',
  method: 'post'
}

export const GET_ACCOUNT_INFO = {
  url: ACCOUNT_URL + 'info',
  method: 'get'
}

export const CHANGE_ACCOUNT_INFO = {
  url: ACCOUNT_URL + 'info',
  method: 'put'
}

export const CHANGE_ACCOUNT_IMAGE = {
  url: ACCOUNT_URL + 'profile-image',
  method: 'post'
}

export const START_RESET_PASSWORD = email => ({
  url: AUTH_URL + `password/reset?email=${email}`,
  method: 'post'
})


export const VERIFY_PASSWORD_RESET = {
  url: AUTH_URL + `password/verify_code`,
  method: 'put'
}

export const SET_NEW_PASSWORD = {
  url: AUTH_URL + `password/new_password `,
  method: 'put'
}

export const GET_NEWS = {
  url: ACCOUNT_URL + `news`,
  method: `get`
}

export const GET_MATCHES = {
  url: ACCOUNT_URL + `match-of-the-day`,
  method: `get`
}

export const GET_MATCHES_OF_SPECIFIC_DAY = (day) => ({
  url: ACCOUNT_URL + `match-of-the-day?date=${day}`,
  method: `get`
})

export const GET_MATCHES_OF_NEXT_DAY = {
  url: ACCOUNT_URL + `match-of-the-day?type=next_day`,
  method: `get`
}

export const GET_PREDICTIONS = timeZone => ({
  url: ACCOUNT_URL + `prediction?timeZone=${timeZone}`,
  method: `get`
})

export const GET_FEEDBACK = (type) => ({
  url: host + `feedback?sort_by=${type}&order_by=desc`,
  method: `get`
})

export const GET_PAYMENT_HISTORY = {
  url: host + `account/game/history`,
  method: `get`
};

export const GET_MATCHES_BY_TYPE = type => ({
  url: ACCOUNT_URL + `game?type=${type}`,
  method: `get`
})

export const ADD_FEEDBACK = {
  url: host + `feedback`,
  method: `post`
}

export const GET_STATISTICS = {
  url: host + `admin/statistics`,
  method: `get`
}

export const BUY_PREDICTION = id => ({
  url: host + `account/prediction/${id}/buy`,
  method: `POST`
})

export const BUY_GAME = id => ({
  url: host + `account/game/${id}/buy`,
  method: `POST`
})

export const LOGIN_WITH_FB = {
  url: AUTH_URL + `social/facebook`,
  method: `GET`
};

export const LOGIN_WITH_GOOGLE = {
  url: AUTH_URL + `social/google`,
  method: `GET`
};

export const LOGIN_WITH_VK = {
  url: AUTH_URL + `social/vk`,
  method: `GET`
};

export const PAYMENT_SUCCESS = (token) => ({
  url: host + `account/payment/success?token=${token}`,
  method: `GET`
})
