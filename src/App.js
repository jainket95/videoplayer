import {
	FormControl,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import video from "video.js";
import AspectRatioContainer from "./components/AspectRatioContainer";
import Dropdown from "./components/Dropdown";
import VideoPlayer from "./components/VideoPlayer";

const useStyles = makeStyles((theme) => ({
	//new
	startCenterFlex: {
		justifyContent: "flex-start",
		alignItems: "center",
	},
	endCenterFlex: {
		justifyContent: "flex-end",
		alignItems: "center",
	},
	startStartFlex: {
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	centerCenterFlex: {
		justifyContent: "center",
		alignItems: "center",
	},
	spaceCenterFlex: {
		justifyContent: "space-between",
		alignItems: "center",
	},
	centerStartFlex: {
		justifyContent: "center",
		alignItems: "flex-start",
	},
	centerStartFlex: {
		justifyContent: "center",
		alignItems: "space-between",
	},
	columnCenterContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	rowCenterContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
	},
	rootApp: {
		width: "100vw",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "stretch",
		overflow: "hidden",
	},
	mainWrapper: {
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	homeContainer: {
		width: `calc(100%)`,
		maxWidth: `1440px`,
		height: "100%",
		display: "flex",
		// flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginRight: "3rem",
	},
	rightContainer: {
		width: "10rem",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
}));

const App = (props) => {
	const classes = useStyles();
	const [aspectRatio, setAspectRatio] = useState("1");
	// const aspectRatio = 1 / 1;
	const videoJsOptions = {
		autoplay: true,
		controls: true,
		fluid: true,
		src: "./video/sample_video.mp4",
		type: "video/mp4",
	};

	const handleChange = (e) => setAspectRatio(e.target.value);
	console.log(aspectRatio);

	return (
		<div className={classes.rootApp}>
			<div className={classes.homeContainer}>
				<AspectRatioContainer
					player={videoJsOptions}
					aspectRatio={+1 / aspectRatio}
					dimensions={{}}
				/>
				{/* <VideoPlayer {...videoJsOptions} /> */}
				{/* </AspectRatioContainer> */}
			</div>
			<div className={classes.rightContainer}>
				<Dropdown aspectRatio={+aspectRatio} handleChange={handleChange} />
			</div>
		</div>
	);
};

export default App;
