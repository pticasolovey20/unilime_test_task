import styles from './ProfileCard.module.scss';

export const ProfileCard = ({ email, name, profile_image }) => {
	return (
		<div className={styles.card}>
			<img src={profile_image} alt={name} />

			<div className={styles.info}>
				<div className={styles.cardRow}>
					<label>Email:</label>
					<span>{email || '-'}</span>
				</div>

				<div className={styles.cardRow}>
					<label>Name:</label>
					<span>{name || '-'}</span>
				</div>
			</div>
		</div>
	);
};
