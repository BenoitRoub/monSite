const initialState = {
	items: [
		{ text: "Ecrire de nouvelles tâches", status: true },
		{ text: "Lire mes mails", status: true },
		{ text: "Nourrir le chat", status: true }
	]
};

function ToDoListReducer(state = initialState, action) {
	switch (action.type) {
		case "ADDITEM":
			return Object.assign({}, state, {
				items: [
					...state.items,
					{
						text: action.item,
						status: true
					}
				]
			});
		case "TOGGLEITEM":
			return Object.assign({}, state, {
				items: [
					...state.items.filter(item => item.text !== action.key),
					{
						text: action.key,
						status: !action.status
					}
				]
			});
		case "REMOVEITEM":
			return Object.assign({}, state, {
				items: [...state.items.filter(item => item.status === true)]
			});
		default:
			return state;
	}
}

export default ToDoListReducer;
