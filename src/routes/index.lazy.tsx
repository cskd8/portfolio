import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div
			className={
				"min-h-screen transition-colors duration-300 bg-white dark:bg-zinc-800 m-0 flex flex-col justify-center items-center min-w-64 gap-2"
			}
		>
			<img
				src={"src/assets/original.png"}
				alt={"hirocy"}
				className="w-32 h-32 object-cover rounded-full"
			/>
			<p className="text-black dark:text-white text-5xl font-sans">
				hirocy / Hiroki Sugiyama
			</p>
			<div className="flex gap-2 justify-center items-center">
				<button
					type={"button"}
					className="font-sans rounded bg-sky-600 py-2 px-4 text-sm text-black dark:text-white hover:bg-sky-500 active:bg-sky-700"
				>
					count is hoge
				</button>
				<button
					type={"button"}
					disabled
					className="font-sans rounded bg-sky-600 py-2 px-4 text-sm text-black dark:text-white hover:bg-sky-500 active:bg-sky-700"
				>
					disabled
				</button>
			</div>
			<p className="text-black dark:text-white text-sm font-sans">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}
