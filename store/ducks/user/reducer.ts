import { Reducer } from "redux"

import { USER_STATE, USER_TYPES } from './types'

const baseState = {
  avatar_url: 'https://github.com/censuradho.png'
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

