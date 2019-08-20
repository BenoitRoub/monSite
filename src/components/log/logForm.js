import React from 'react';
import style from './log.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { useTransition, animated} from 'react-spring';



const LogForm = () => {

		const login = useSelector((state) => state.login.login);
		const dispatch = useDispatch()

		const registerInfo = event => {	
			dispatch({type:'CONNECT', 
				username:event.target.username.value,																	 
				password:event.target.password.value})
		}

		const closeForm = () => {
			dispatch({type:'CHANGE'})
		}

		const onSubmit = event => {
			event.preventDefault();
			registerInfo(event);
			closeForm();
		}

		const transitions = useTransition(login, null, {
			from: { opacity: 1 },
			enter: { opacity: 1 },
			leave: { opacity: 1 },
			})

		return transitions.map(({ item, key, props }) =>
		item && <animated.div key={key} style={props}>
					<div className={style.wrap}>
						<form  className={style.form}
							onSubmit={onSubmit}
							>
							<div							
							className={style.image} 
							onClick={closeForm} 
							>
							</div>							
							<p className={style.titleForm}>Log In</p>
							<div className={style.inputContainer}>
							    <input 
						        type="text"
						        name="username"
						        placeholder=" Username"
							    />
							    <input 
						      	type="text"
						      	name="password"
						      	placeholder=" Password"
						        />
						         <button
						        type="submit">
						        Login
						        </button>
						    </div>					       
						</form>
					</div>
				</animated.div>
		)
}

export default LogForm;
