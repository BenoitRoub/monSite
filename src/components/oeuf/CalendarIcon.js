import React from 'react';
import { useDispatch } from 'react-redux';
import { useTransition, animated} from 'react-spring';


const CalendarIcon = ({status}) =>{

		const dispatch = useDispatch();

		const openCalendar = () => {
			dispatch({type: 'SWITCHCALENDAR'})
		};


		const transitions = useTransition(status, null, {
				from: { position: "absolute",
						bottom: "45%",
						left: "45%",
						width: "0em",
	 					height: "0em",
						zIndex:2,
						color: "black",
						},
				enter: { position: "absolute",
							bottom: "15%",
							left: "15%",
							height: "12em",
							width: "12em",
							zIndex: 2,
							color: "black", },
				leave: { position: "absolute",
						bottom: "45%",
						left: "45%",
						width: "0em",
						height: "0em",
						zIndex:2,
						color: "black",  },
				})


		return (
				transitions.map(({ item, key, props }) =>
				item &&	<animated.div key={key} style={props}>
						<p className="appContainer third"
						onClick={openCalendar}>
						</p>
					</animated.div>))
	 }

export default CalendarIcon;