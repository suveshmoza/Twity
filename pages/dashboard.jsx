import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import {
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	query,
	where,
} from 'firebase/firestore';
import Message from '../components/message';
import { BsTrash2Fill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import Link from 'next/link';
import MessageSkeleton from '@/components/messageSkeleton';

const Dashboard = () => {
	const route = useRouter();
	const [user, loading] = useAuthState(auth);
	const [posts, setPosts] = useState([]);
	const [isFetching, setIsFetching] = useState(true);
	const getData = async () => {
		if (loading) return;
		if (!user) return route.push('/auth/login');
		const collectionRef = collection(db, 'posts');
		const q = query(collectionRef, where('user', '==', user.uid));
		const unsubscribe = onSnapshot(q, (snapshot) => {
			setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
		return unsubscribe;
	};

	const deletePost = async (id) => {
		const docRef = doc(db, 'posts', id);
		await deleteDoc(docRef);
	};

	useEffect(() => {
		getData();
		setTimeout(() => {
			setIsFetching(false);
		}, 800);
	}, [user, loading]);

	return (
		<div>
			<h1>Your Posts</h1>
			<div>
				{isFetching && <MessageSkeleton />}
				{posts.map((post) => {
					return (
						<Message {...post} key={post.id}>
							<div className="flex gap-4">
								<button
									onClick={() => deletePost(post.id)}
									className="text-pink-600 flex items-center justify-center gap-2 py-2 text-sm"
								>
									<BsTrash2Fill className="text-2xl" />
									Delete
								</button>
								<Link href={{ pathname: '/post', query: post }}>
									<button className="text-teal-600 flex items-center justify-center gap-2 py-2 text-sm">
										<AiFillEdit className="text-2xl" />
										Edit
									</button>
								</Link>
							</div>
						</Message>
					);
				})}
			</div>
			<div className="text-center">
				<button
					className="font-medium text-white bg-red-600 py-2 px-4 my-6 rounded-lg"
					onClick={() => auth.signOut()}
				>
					Sign out
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
