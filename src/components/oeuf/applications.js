import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './oeuf.module.css';
import './applications.css';
import { useTransition, animated} from 'react-spring';
import MeteoIcon from './meteo'

const Applications = () => {

	const status = useSelector((state) => state.statusApplications.status)

	const dispatch = useDispatch();

	const openMeteo = () => {
		dispatch({type: 'SWITCHMETEO'})
	};
	// const MeteoIcon = ({status}) =>{

	// 	const dispatch = useDispatch();

	// 	const openMeteo = () => {
	// 		dispatch({type: 'SWITCHMETEO'})
	// 	};


	// 	const transitions = useTransition(status, null, {
	// 			from: { position: "absolute",
	// 					top: "50%",
	// 					left: "50%",
	// 					width: 0,
	// 					height: 0,
	// 					},
	// 			enter: { position: "absolute",
	// 					top: "20%",
	// 					left: "20%",
	// 					zIndex: 2,
	// 					width:50,								
	// 					height:50,
	// 					background: center url('../.././image/meteo-screenshot.png');
	// 					backgroundSize: cover;
	// 					boxShadow: 0px 0px 10px rgb(67, 35, 202);
	// 					},
	// 			leave: { position: "absolute",
	// 					top: "50%",
	// 					left: "50%",
	// 					width: 0,
	// 					height: 0,
	// 				  },
	// 			})

	// 	// const transitions = useTransition(status, null, {
	// 	//  		from: { opacity: 0,},
	// 	//  		enter: {opacity:1,},
	// 	//  		leave: {opacity:0,},})

	// 	return (
	// 			transitions.map(({ item, key, props }) =>
	// 			item &&	<animated.div key={key} style={props}>
	// 						<p class="appContainer first"
	// 						onClick={openMeteo}>
	// 						</p>
	// 					</animated.div>))
	//  }



	if (status)
		return (
			<div >
				<MeteoIcon
				status={status} />
				<p class="appContainer second"
				onClick={openMeteo}>
				second</p>
				<p class="appContainer third"
				onClick={openMeteo}>
				third</p>
				<p class="appContainer fourth"
				onClick={openMeteo}>
				four</p>
			</div>
			)
	else return (null)
}

export default Applications;