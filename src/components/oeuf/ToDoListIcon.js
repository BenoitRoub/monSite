import React from 'react';
import { useDispatch } from 'react-redux';
import { useTransition, animated} from 'react-spring';


const ToDoListIcon = ({status}) =>{

		const dispatch = useDispatch();

		const openToDoList = () => {
			dispatch({type: 'SWITCHTODOLIST'})
		};


		const transitions = useTransition(status, null, {
				from: { position: "absolute",
						top: "45%",
						right: "45%",
						width: "0em",
	 					height: "0em",
						zIndex:2,
						color: "black",
						},
				enter: { position: "absolute",
							top: "15%",
							right: "15%",
							height: "12em",
							width: "12em",
							zIndex: 2,
							color: "black", },
				leave: { position: "absolute",
						top: "45%",
						right: "45%",
						width: "0em",
						height: "0em",
						zIndex:2,
						color: "black",  },
				})


		return (
				transitions.map(({ item, key, props }) =>
				item &&	<animated.div key={key} style={props}>
						<p className="appContainer second"
						onClick={openToDoList}>
						</p>
					</animated.div>))
	 }

export default ToDoListIcon;