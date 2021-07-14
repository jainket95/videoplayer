import { makeStyles } from "@material-ui/core";
import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const useStyles = makeStyles((theme) => ({
	videoPlayer: (props) => ({
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}),
}));

const VideoPlayer = (props) => {
	const classes = useStyles(props);
	const videoNode = useRef(null);
	const player = useRef(null);

	useEffect(() => {
		player.current = videojs(videoNode.current, {
			// ...props,
			controls: props.controls,
			autoplay: props.autoplay,
		});

		player.current.src({ type: props.type, src: props.src });
		console.log(player.current);

		// return () => player.current.dispose();
	}, [props.src, props.controls, props.autoplay, props.fluid, props.width]);

	return (
		<div className={classes.videoPlayer}>
			<video
				ref={videoNode}
				className="video-js"
				style={{ objectFit: "cover" }}></video>
		</div>
	);
};

export default VideoPlayer;
