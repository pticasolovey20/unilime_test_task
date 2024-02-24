import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api/authApi';

import toast from 'react-hot-toast';

import { ErrorPage } from '../components/layout/error/ErrorPage';
import { Loading } from '../components/layout/loading/Loading';
import { ProfileCard } from '../components/profile/ProfileCard';

export const ProfilePage = () => {
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
			{isError && <ErrorPage />}

			{!isLoading && !isError && <ProfileCard {...user} />}
		</section>
	);
};
