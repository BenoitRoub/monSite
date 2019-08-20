const initialState = {
	status: false,
	statusMeteo: false
}

function ApplicationsReducer(state= initialState, action) {

	switch (action.type) {
		case 'SWITCHAPPLICATIONS' :
			return { status: !state.status};
		case 'SWITCHMETEO' :
			return { statusMeteo: !state.statusMeteo};
		case 'DISPLAYMETEO' :
			return { statusMeteo: true}
		default: 
			return state;
	}
}

export default ApplicationsReducer;