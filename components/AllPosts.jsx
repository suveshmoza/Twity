import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { db } from '../utils/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { AiOutlineComment } from 'react-icons/ai';

import Message from './message';
import MessageSkeleton from './messageSkeleton';

const AllPosts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	const getPosts = useCallback(async () => {
		const collectionRef = collection(db, 'posts');
		const q = query(collectionRef, orderBy('timeStamp', 'desc'));
		const unsubscribe = onSnapshot(q, (snapshot) => {
			setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
		return unsubscribe;
	}, []);

	useEffect(() => {
		getPosts();
		setTimeout(() => {
			setLoading(false);
		}, 700);
	}, [getPosts]);

	return (
		<div>
			{loading && <MessageSkeleton />}

			{posts?.map((post) => (
				<Message key={post.id} {...post}>
					<Link href={{ pathname: `/${post.id}`, query: { ...post } }}>
						<button className="flex justify-center items-center">
							<AiOutlineComment className="text-2xl mr-2" />
							{post.comments?.length > 0 ? post.comments?.length : 0} comments
						</button>
					</Link>
				</Message>
			))}
		</div>
	);
};

export default AllPosts;
