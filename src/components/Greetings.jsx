import { useState } from "preact/hooks";


const Greetings = ({messages}) => {

	const randomMessage = () => messages[(Math.floor(Math.random()*messages.length))];
	const [greetings,setGreetings] = useState(messages[0]);

  return (
	<div className="mt-10">

		<h2>{greetings}! Thank you for visiting! </h2>
		<button class="bg-emerald-400 p-1 mt-1 hover:cursor-pointer" onClick={()=> setGreetings(randomMessage())}>New Greeting</button>
	</div>
  );
}

export default Greetings
