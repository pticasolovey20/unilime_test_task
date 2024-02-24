import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/authApi';
import toast from 'react-hot-toast';
import { ProfileCard } from '../components/profile/ProfileCard';
import { Loading } from '../components/layout/loading/Loading';
import { Empty } from '../components/products/Empty';

export const ProfilePage: FC = () => {
	const {
		data: user,
		error,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['user'],
		queryFn: () => getUser(),
	});

	if (isError) toast.error(error.message);

	return (
		<section className='page-container'>
			{isLoading && <Loading />}
			{!isLoading && !user && <Empty />}

			{!isLoading && !isError && <ProfileCard {...user} />}
		</section>
	);
};
