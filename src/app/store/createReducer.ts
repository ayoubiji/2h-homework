export default function createReducer(handlers) {
  return function reducer(state: any, action: any): any {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
