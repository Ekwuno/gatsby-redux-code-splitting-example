import reducerRegistry from '../../reducerRegistry'

export const initialState = {
  isDarkMode: false,
}

const reducerName = 'darkMode'

const createActionName = name => `app/${reducerName}/${name}`;

export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE,
  isDarkMode,
})

export const TOGGLE_DARKMODE = createActionName(`TOGGLE_DARKMODE`)

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      console.log(`Dark mode: ${!state.isDarkMode}`);
      return { ...state, isDarkMode: !state.isDarkMode }
    default:
      return state
  }
}

reducerRegistry.register(reducerName, reducer);