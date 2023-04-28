import Image from 'next/image';

const message = ({ children, avatar, username, description }) => {
	return (
		<div className="bg-white p-8 border-l-2 border-b-2 shadow-xl m-3 rounded-lg">
			<div className="flex items-center gap-2">
				<Image
					width="30"
					height="30"
					className="w-10 rounded-full cursor-pointer"
					src={avatar}
					alt="user-photo"
				/>
				<h2>{username}</h2>
			</div>
			<div className="py-4 ">
				<p>{description}</p>
			</div>
			{children}
		</div>
	);
};

export default message;
