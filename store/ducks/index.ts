import { combineReducers } from 'redux'

import { reducerUser } from './user/reducer'

export const rootReducer = combineReducers({
  user: reducerUser
})