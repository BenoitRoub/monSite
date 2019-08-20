import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTransition, animated} from 'react-spring';


const MeteoIcon = ({status}) =>{

		const dispatch = useDispatch();

		const openMeteo = () => {
			dispatch({type: 'SWITCHMETEO'})
		};


		const transitions = useTransition(status, null, {
				from: { position: "absolute",
						top: "45%",
						left: "45%",
						width: "0em",
	 					height: "0em",
						zIndex:2,
						color: "black",
						},
				enter: { position: "absolute",
							top: "15%",
							left: "15%",
							height: "12em",
							width: "12em",
							zIndex: 2,
							color: "black", },
				leave: { position: "absolute",
						top: "45%",
						left: "45%",
						width: "0em",
						height: "0em",
						zIndex:2,
						color: "black",  },
				})


		return (
				transitions.map(({ item, key, props }) =>
				item &&	<animated.div key={key} style={props}>
						<p class="appContainer first"
						onClick={openMeteo}>
						</p>
					</animated.div>))
	 }

export default MeteoIcon;
