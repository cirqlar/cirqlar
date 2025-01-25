"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { THEME_LOCAL_KEY } from "./constants";

type BrowserTheme = "light" | "dark";

type Theme = BrowserTheme | "system";

type ThemeContextValue = {
	theme: BrowserTheme;
	toggle: (new_mode: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
	theme: "dark",
	toggle: () => {},
});

export function useMode() {
	const mode = useContext(ThemeContext);

	return mode;
}

export function ThemeHtml(props: { children: React.ReactNode }) {
	const [browserTheme, setBrowserTheme] = useState<BrowserTheme>("dark");
	const [theme, setTheme] = useState<Theme>("system");

	useEffect(() => {
		const stored_theme = localStorage.getItem(THEME_LOCAL_KEY);

		if (stored_theme) {
			setTheme(stored_theme as Theme);
		}

		setBrowserTheme(
			window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light",
		);
	}, []);

	useEffect(() => {
		const eventListener = (ev: MediaQueryListEvent) => {
			setBrowserTheme(ev.matches ? "dark" : "light");
		};

		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", eventListener);

		return () => {
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.removeEventListener("change", eventListener);
		};
	}, []);

	const themeToggle = useCallback((new_mode: Theme) => {
		if (new_mode === "system") {
			localStorage.removeItem(THEME_LOCAL_KEY);
			setTheme("system");
		} else {
			localStorage.setItem(THEME_LOCAL_KEY, new_mode);
			setTheme(new_mode);
		}
	}, []);

	const themeValue = useMemo(
		() => ({
			theme: theme === "system" ? browserTheme : theme,
			toggle: themeToggle,
		}),
		[browserTheme, theme, themeToggle],
	);

	return (
		<ThemeContext.Provider value={themeValue}>
			<html className={themeValue.theme} lang="en">
				{props.children}
			</html>
		</ThemeContext.Provider>
	);
}
