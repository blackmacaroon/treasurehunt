import React from 'react';
import Message from './Message'



const MessageBox = (props) => {
	return (
		<div className="message-box">
			
			<ul>
				{props.messages.map(msg => <Message key={props.id} message={msg}/>)}
			</ul>
		</div>
	)
};
export default MessageBox;