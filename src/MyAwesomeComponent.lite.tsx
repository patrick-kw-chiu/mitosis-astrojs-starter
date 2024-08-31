import { useState } from "@builder.io/mitosis";

export default function MyComponent(props) {
	const [name, setName] = useState("Steve");

	return (
		<div>
			<input
				css={{
					color: "red",
				}}
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			Hello{" " + name}! I can run natively in React, Vue, Svelte, Qwik, and
			many more frameworks!
		</div>
	);
}
