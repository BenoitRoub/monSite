import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import LogReducer from './LogReducer';
import showCategoriesReducer from './showCategoriesReducer';
import switchHeaderReducer from './HeaderReducer';
import ApplicationsReducer from './applicationsReducer';
import ToDoListReducer from './ToDoListReducer';
import CalendarReducer from './calendarReducer';
import SwapAppReducer from './swapAppReducer';

const allReducers = combineReducers({
	login: LoginReducer,
	logInfo: LogReducer,
	showCategories: showCategoriesReducer,
	headerStatus: switchHeaderReducer,
	statusApplications: ApplicationsReducer,
	ToDoList: ToDoListReducer,
	Calendar: CalendarReducer,
	swapApp: SwapAppReducer,
});

export default allReducers;