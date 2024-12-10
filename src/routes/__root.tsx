import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="p-2 flex gap-2">
				<Link to="/" className="[&.active]:font-bold pr-2">
					Home
				</Link>
				<Link to="/works" className="[&.active]:font-bold">
					Works
				</Link>
				<Link to="/achievements" className="[&.active]:font-bold">
					Achievements
				</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
