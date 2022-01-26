import { rootReducer } from './ducks'

export type Store = ReturnType<typeof rootReducer>