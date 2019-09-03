const date  = new Date();

console.log(date)


const initialState = {
	selectedDate: date.getDate(),
	selectedDay: (date.getDay()-1),
	selectedMonth: (date.getMonth()),
	selectedYear: date.getFullYear(),
	numéroJours: []
}


function CalendarReducer(state= initialState, action) {

	switch(action.type) {
		case 'DISPLAYDAY' :
			date.setDate(action.dayNumber)
			if (date.getDay() != 0)
				return { 
				...state,
				selectedDate: action.dayNumber,
				selectedDay: (date.getDay()-1),
			}
			else return {
				...state,
				selectedDate: action.dayNumber,
				selectedDay: 6,
			}
		case 'LASTMONTH' :
			if (action.selectedMonth === 0 )
				return { 
				...state,				
				selectedMonth:  11,
				selectedYear: (state.selectedYear - 1)}
			else return {
				...state,
				selectedMonth:  (action.selectedMonth - 1) }
		case 'NEXTMONTH' :
			if (action.selectedMonth === 11 )
				return { 
				...state,
				selectedMonth : 0,
				selectedYear: (state.selectedYear + 1)}
			else return {
				...state,
				selectedMonth:  (action.selectedMonth + 1) }
		case 'REFRESHDAYTABLE' :
			return {
				numéroJours: action.numéroJours
			}
		default: 
			return state;
	}

}

export default CalendarReducer;