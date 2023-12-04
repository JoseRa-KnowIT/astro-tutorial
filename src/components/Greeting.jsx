import { useState } from 'preact/hooks';

export default function Greeting({messages}) {
	const randomMsg = () => messages[(Math.floor(Math.random() * messages.length))];
	const[greeting, setGreeting] = useState(messages[0]);

	return (
		<div>
			<h3>{greeting}! Gracias por nada PRRO!</h3>
			<button onClick={() => setGreeting(randomMsg())}>
				Otro saludo!👋🏼
			</button>
		</div>
	);
}