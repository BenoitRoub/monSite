const initialState = {
	headerStatus: 'showHeader',
}

function switchHeaderReducer(state= initialState, action) {

	switch (action.type) {
		case 'SGOWHEADER' :
			return { headerStatus: 'showHeader '};
		case 'CLOSECATEGORIES' :
			return { headerStatus: 'showScrollHeader'};
		case 'SHOWCATEGORIES' :
			return { headerStatus: 'showCategories'};
		case 'SHOWSCROLLHEADER' :
			return { headerStatus: 'showScrollHeader'};
		case 'CLOSEALLHEADER' :
			return { headerStatus: 'closeAllHeader'};

		default: 
			return state;
	}
}

export default switchHeaderReducer;