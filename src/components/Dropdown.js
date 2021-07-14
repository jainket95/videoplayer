import React, { useEffect, useReducer } from "react";
import {
	FormControl,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	formControl: {
		minWidth: 200,
	},
}));

const Dropdown = ({ aspectRatio, handleChange }) => {
	const classes = useStyles();

	return (
		<div className={classes.rootDropDown}>
			<FormControl className={classes.formControl}>
				<InputLabel>Aspect Ratio</InputLabel>
				<Select value={aspectRatio} onChange={handleChange}>
					<MenuItem className={classes.formControl} value={2.35}>
						2.35
					</MenuItem>
					<MenuItem className={classes.formControl} value={1.85}>
						1.85
					</MenuItem>
					<MenuItem className={classes.formControl} value={1 / (16 / 9)}>
						16/9
					</MenuItem>
					<MenuItem className={classes.formControl} value={1 / (9 / 16)}>
						9/16
					</MenuItem>
					<MenuItem className={classes.formControl} value={1 / (4 / 3)}>
						4/3
					</MenuItem>
					<MenuItem className={classes.formControl} value={1 / (1 / 1)}>
						1/1
					</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default Dropdown;
