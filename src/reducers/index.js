import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import LogReducer from './LogReducer';
import showCategoriesReducer from './showCategoriesReducer';
import switchHeaderReducer from './HeaderReducer';
import ApplicationsReducer from './applicationsReducer';

const allReducers = combineReducers({
	login: LoginReducer,
	logInfo: LogReducer,
	showCategories: showCategoriesReducer,
	headerStatus: switchHeaderReducer,
	statusApplications: ApplicationsReducer,
});

export default allReducers;