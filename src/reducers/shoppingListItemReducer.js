export default function shoppingListItemReducer(
  state = {
    items: [],
  },
  action
) {
	console.log(action);
  switch (action.type) {
    case "INCREASE_COUNT":
			console.log(`current State.items length ${state.items.length}`);
				console.log(`Updating State.items length ${state.items.length + 1}`);
      return {
        ...state,
        items: state.items.concat(state.items.length + 1),
      };
    default:
				console.log(`Initial State.items length ${state.items.length}`);
      return state;
  }
}
