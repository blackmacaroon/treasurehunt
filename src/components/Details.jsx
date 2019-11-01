import React from 'react';

const Details = (props) => {
		return (
		<div className="details">
			<p>Room ID: {props.room_id}</p>
			<p>Title: {props.title}</p>
			<p>Description: {props.description}</p>
			<p>Coordinates: {props.coordinates}</p>
			<p>Items: {props.items}</p>
			<p>Exits: {props.exits}</p>
		</div>
	)
};

export default Details