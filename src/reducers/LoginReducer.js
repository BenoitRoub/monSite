const initialState = {
	login: false
}

function LoginReducer(state= initialState, action) {

	switch (action.type) {
		case 'CHANGE' :
			return { login: !state.login};
		default: 
			return state;
	}
}

export default LoginReducer;