import Link from 'next/link';
import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from 'next/image';
import { GiHummingbird } from 'react-icons/gi';
import ThemeToggler from '@/utils/themeToggler';

const Nav = () => {
	const [user, loading] = useAuthState(auth);
	return (
		<nav className="flex justify-between items-center py-5">
			<Link href="/" className="flex items-center gap-2">
				<GiHummingbird className="text-5xl text-cyan-600" />
				<button className="text-lg font-medium">Twity</button>
			</Link>
			<ul className="flex items-center gap-5">
				<ThemeToggler />
				{!user && (
					<Link href={'/auth/login'}>
						<p className="py-2 px-4 text-sm bg-cyan-500 text-white font-medium rounded-xl ml-8">
							Join Now
						</p>
					</Link>
				)}
				{user && (
					<div className="flex items-center gap-6">
						<Link href="/post">
							<button className="font-medium bg-cyan-600 text-white py-2 px-4 rounded-md text-sm">
								Post
							</button>
						</Link>
						<Link href="/dashboard">
							<Image
								width="30"
								height="30"
								className="w-12 h-12 rounded-full cursor-pointer"
								src={user.photoURL}
								alt="user-photo"
							/>
						</Link>
					</div>
				)}
			</ul>
		</nav>
	);
};

export default Nav;
