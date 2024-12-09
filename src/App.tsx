import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div
			className={
				"min-h-screen transition-colors duration-300 bg-white dark:bg-zinc-800 m-0 flex flex-col justify-center items-center min-w-64 gap-2"
			}
		>
			<p className="text-white text-5xl font-sans">hirocy / Hiroki Sugiyama</p>
			<p className="text-white text-xl font-sans">Vite + React</p>
			<div className="flex gap-2 justify-center items-center">
				<button
					type={"button"}
					className="font-sans rounded bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-500 active:bg-sky-700"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<button
					type={"button"}
					disabled
					className="font-sans rounded bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-500 active:bg-sky-700"
				>
					disabled
				</button>
			</div>
			<p className="text-white text-sm font-sans">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
