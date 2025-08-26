import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className={`${styles['footer-container']}`}>
			<a
				href='https://github.com/Shiblumi'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image
          className={`${styles['footer-img']}`}
					src='/images/logos/github-logo.svg'
					alt='GitHub Icon'
					width={28}
					height={28}
				/>
				GitHub
			</a>
			<a
				href='https://www.linkedin.com/in/dirk-wilson/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image
          className={`${styles['footer-img']}`}
					src='/images/logos/linkedin-logo.svg'
					alt='LinkedIn Icon'
					width={28}
					height={28}
				/>
				LinkedIn
			</a>
			<a
				href='mailto:dirktaku@gmail.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image
          className={`${styles['footer-img']}`}
					src='/images/email-icon.svg'
					alt='Email Icon'
					width={28}
					height={28}
				/>
				dirktaku@gmail.com
			</a>
			<a
				href='/documents/Wilson_Dirk_Resume.pdf'
				target='_blank'
			>
        
				<Image
          className={`${styles['footer-img']}`}
					src='/images/resume-icon.svg'
					alt='Resume Icon'
					width={28}
					height={28}
				/>
				Resume
			</a>
			<span>© 2025 Dirk Wilson</span>
		</footer>
	);
}
