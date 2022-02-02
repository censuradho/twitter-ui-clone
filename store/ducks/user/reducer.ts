import { Reducer } from "redux"

import { USER_STATE, USER_TYPES } from './types'

const baseState: USER_STATE = {
  avatar_url: 'https://pbs.twimg.com/profile_images/1252288987265449985/g4EiqYMM_bigger.jpg',
  username: 'Gustavo Leite',
  nickname: 'Censuradho',
}

export const reducerUser: Reducer<USER_STATE> = (state = baseState, action) => {
  switch (action.type) {
    case USER_TYPES.GET_USER:
      return {
        ...state
      }
    default:
      return state
  }
}

