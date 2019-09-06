import React, { useState } from "react";
import TopButtonContainer from "./topButtonContainer";
import Switches from "../../.././globalComponents/Switches";

const Settings = () => {
	return (
		<div>
			<TopButtonContainer />
			<Switches checked="false" label="dark version" />
			<Switches checked="false" label="orange decoration" />
		</div>
	);
};

export default Settings;
