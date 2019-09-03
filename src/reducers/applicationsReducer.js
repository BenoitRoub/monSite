const initialState = {
	status: false,
	statusMeteo: false,
	statusToDoList: false,
	statusCalendar: false,
}

function ApplicationsReducer(state= initialState, action) {

	switch (action.type) {
		case 'SWITCHAPPLICATIONS' :
			return { status: !state.status};
		case 'SWITCHMETEO' :
			return { statusMeteo: !state.statusMeteo};
		case 'SWITCHTODOLIST' :
			return { statusToDoList: !state.statusToDoList};
		case 'SWITCHCALENDAR' : 
			return { statusCalendar: !state.statusCalendar};
		default: 
			return state;
	}
}

export default ApplicationsReducer;