"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => {
		setMounted(true);
	}, []);

	React.useEffect(() => {
		if (!mounted) return;
		console.log("Theme changed:", props.themes);
	}, [props.themes, mounted]);

	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
