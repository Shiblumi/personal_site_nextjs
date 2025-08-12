import styles from './ActionButton.module.css';

export default function ActionButton({
	text,
	class: className,
	routeTo,
	icon: Icon,
}) {
	const buttonStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '5px',
	};

	return (
		<button
			type='button'
			className={`${styles['action-button']} ${className}`}
			style={buttonStyle}
			onClick={() => {
				if (routeTo) {
					// Scroll to passed-in sectionID.
					document.getElementById(routeTo).scrollIntoView({
						behavior: 'smooth',
					});
				}
			}}
		>
			{text}
			{Icon && <Icon />}
		</button>
	);
}
