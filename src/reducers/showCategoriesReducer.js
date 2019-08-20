const initialState = {
	showCategories: false
}

function showCategoriesReducer(state= initialState, action) {

	switch (action.type) {
		case 'CHANGECATEGORIES' :
			return { showCategories: !state.showCategories};
		default: 
			return state;
	}
}

export default showCategoriesReducer;