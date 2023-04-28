import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const ThemeToggler = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;
	return (
		<button
			className="w-8 h-8 bg-blue-100 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			aria-label="Toggle Dark Mode"
		>
			{theme === 'light' ? (
				<MdOutlineDarkMode className="text-2xl" />
			) : (
				<MdOutlineLightMode className="text-2xl" />
			)}
		</button>
	);
};

export default ThemeToggler;
