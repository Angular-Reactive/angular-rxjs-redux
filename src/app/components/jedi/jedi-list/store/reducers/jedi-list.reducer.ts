import { ADD_JEDI, REMOVE_JEDI, LOAD_JEDIS } from '../../jedi-list-constants';
const initialState = [];

export function jediListReducer(state = initialState, action) {

  switch (action.type) {
    // Taking the existing list and constructs a new list based on the old list,
    // plus the new list item found in 'action.payload'
    case ADD_JEDI:
      return [...state, {...action.payload}];

    // Using the 'filter()' function to take away the list item that we don't
    // want to see
    case REMOVE_JEDI:
      return state.filter(jedi => jedi.id != action.payload.id);

    // Take in an existing list and replaces the state
    case LOAD_JEDIS:
      return action.payload.map(jedi => ({...jedi}));

    default:
      return state;
  }
}
