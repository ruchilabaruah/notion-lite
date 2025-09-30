export const ACTIONS = {
  CREATE: "create",
  UPDATE: "update",
  DELETE: "delete",
};

export function notesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.CREATE:
      return [action.payload, ...state];
    case ACTIONS.UPDATE:
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    case ACTIONS.DELETE:
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
}
