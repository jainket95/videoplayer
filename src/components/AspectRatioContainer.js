import React, { useEffect, useReducer } from "react";
import { makeStyles } from "@material-ui/core";
import VideoPlayer from "./VideoPlayer";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100%",
		display: "flex",
		// flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},

	overlayContainer: (props) => ({
		width: "100%",

		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",

		background: "rgba(255,255,255, 0.4)",
	}),
	videoPlayerContainer: (props) => ({
		width: "100%",
		// height: "50rem",

		// display: "flex",
		// justifyContent: "center",
		// alignItems: "center",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",

		background: "blue",
		paddingTop: props.aspectRatio
			? `${Number(props.aspectRatio) * 100}%`
			: `${Number(props.aspectRatio) * 100}%`,
	}),
}));
const AspectRatioContainer = (props) => {
	const classes = useStyles(props);

	// let tempAspectRatio = +props.aspectRatio;
	// const [counterKey, setCounterKey] = useReducer((c) => c + 1, 0);

	// useEffect(() => {
	// 	if (props.aspectRatio) {
	// 		setCounterKey();
	// 	}
	// }, [counterKey]);

	console.log(`${Number(props.aspectRatio) * 100}%`);
	return (
		<div className={classes.root}>
			<div className={classes.videoPlayerContainer}></div>
			<div className={classes.overlayContainer}></div>
			<VideoPlayer {...props.player} />
		</div>
	);
};

export default AspectRatioContainer;
