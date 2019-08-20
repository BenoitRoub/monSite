const initialState = {
	username: "",
	password: ""
}

function LogReducer(state= initialState, action) {

	switch (action.type) {
		case 'CONNECT' :
			return { username: action.username,
					 password: action.password};
		case 'DECONNECT' : 
			return { username: "",
					password: ""};
		default: 
			return state;
	}
}

export default LogReducer;