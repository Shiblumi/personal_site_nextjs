export const projectsData = [
	{
		id: 1,
		title: 'diwi.dev',
		description:
			'\tMy personal site is a reflection of my passion for development and the visual design found in retro gaming consoles. Inspired by retro video game UI and loading-screen aesthetics, I crafted animated 3D backgrounds using Spline to bring life into the site that showcases my projects and skills. To ensure smooth and reactive transitions throughout the site, I leveraged React and the Motion animation library to create the feeling of navigating through a game menu. \n\n\tOn the technical side, I utilized Next.js to balance between client-side and server-side rendering, optimizing performance and SEO. The complex animations and animated backgrounds beat me down with challenges on optimizing performance, motivating me to study best practices provided in docs and online forums while getting very familiar with dev tools to investigate performance-hungry components and re-renders.',
		keyPoints: [
			'Artistic & Technical Design',
			'3D & UI Animation',
			'Performance Optimization',
			'Passion ✨',
			// '*✧･ﾟ Passion ˚.✧*',
		],
		skills: ['NextJS', 'React', 'Motion', 'JS', 'CSS', 'HTML', 'Spline3D'],
		role: 'Developer & 3D Artist',
		date: 'Jun 2025',
		image: '/images/project2.jpg',
		link: 'https://github.com/Shiblumi/personal_site_nextjs',
	},
	{
		id: 2,
		title: 'SyncQ Chatbot',
		description:
			"\t Working at SyncQ, this was my first professional opportunity to dive into the development of an AI-focused feature. Integrated into a CRM and accounting software environment, the goal was to allow users to chat with an AI that gives real data-driven responses about their business records. Much of the early development involved researching techniques to enable the AI to function as an agent, capable of querying relevant documentation on how to query the accounting software's API, incorporating queried business records into its responses.\n\n\tThe AI uses the retrieval-augmented generation (RAG)-based method to retrieve relevant API documentation for knowledge on querying the accounting API, while the PydanticAI framework is used to enable agentic actions via function calling. The backend logic is implemented in Python, and the AI’s responses are rendered on a frontend using JavaScript, HTML, and CSS.",
		keyPoints: [
			'AI Integration',
			'Research & Development',
			'Full-Stack Development',
		],
		skills: ['Python', 'PydanticAI', 'PineconeDB', 'JS', 'CSS', 'HTML'],
		role: 'R&D Engineer',
		date: 'Feb 2025',
		image: '/images/project2.jpg',
		link: '',
	},
	{
		id: 3,
		title: 'Sitegeist',
		description:
			'\tDeveloped in a team of three during the CruzHacks hackathon, Sitegeist enables UC Santa Cruz students to view trending topics around the school and the general sentiment levels students have, or their “zeitgeist,” on that topic. Leveraging a natural language processing (NLP) model trained on Reddit posts from r/UCSC, Sitegeist shows trending keywords related to UCSC, shows the sentiment levels students have of that keyword (good, bad, neutral), and Reddit posts and comments associated to that keyword.\n\n\tI was responsible for creating the frontend of the project, interfacing with the NLP system that serves popular and searched keywords, highlighting keywords by their sentiment levels, and displaying the relevant Reddit posts to that keyword.',
		keyPoints: [
			'Frontend Development',
			'Team Collaboration',
			'Stayed awake 36 hours straight',
		],
		skills: ['NextJS', 'React', 'JS', 'CSS', 'HTML'],
		role: 'Front-End Developer',
		date: 'Jan 2024',
		image: '/images/project2.jpg',
		link: 'https://github.com/masaishi/Sitegeist',
	},
	{
		id: 4,
		title: 'Slug Meter',
		description:
			'\tI was a part of a team of six students that wanted to solve a problem we shared: the school gym is often packed with students and all of the equipment is occupied, which is detrimental to our gainz. We wanted to identify the patterns in foot traffic the gym received throughout different days. Using sample data of students signing into the gym, with capabilities to show live gym occupancy data, we created a project that organizes and displays the occupancy levels throughout the days and weeks. Using machine learning, Slug Meter can also use past patterns within our occupancy data to predict future occupancy levels.\n\n\tMy role was to develop the frontend of the site using React, displaying the data in an easy to read format. The project concluded as a locally-ran project. Afterwards, I forked the project and took the initiative to convert it to a functional website, refactoring the backend in ExpressJS to interface with a live MongoDB instance.',
		keyPoints: [
			'Full-Stack Development',
			'Team Collaboration',
			'Data Handling',
		],
		skills: ['React', 'JS', 'CSS', 'HTML', 'ExpressJS', 'MongoDB'],
		role: 'Full-Stack Developer',
		date: 'Dec 2023',
		image: '/images/project2.jpg',
		link: 'https://github.com/Shiblumi/SlugMeter',
	},
	{
		id: 5,
		title: 'PediBeat',
		description:
			'\tDeveloped in a team of three during the CalHacks hackathon, Pedibeat uses sensors to monitor the body temperature of infants. If a critical temperature is detected, buffered temperature data is shared as context to a LLM and notifies parents. The LLM then analyzes the temperature data to assess the infant’s condition and provides guidance to parents on how to respond.\n\n\tPedibeat was my first opportunity to handle live data streamed from sensors. I was responsible for creating the architecture in Python to handle and organize the streamed sensor data, with a focus on ease-of-use in order for my team members to easily understand it and implement their own features on top of the architecture.',
		keyPoints: [
			'Architectural Design',
			'Sensor Hardware Integration',
			'Team Collaboration',
		],
		skills: ['Python'],
		role: 'Developer',
		date: 'Nov 2023',
		image: '/images/project2.jpg',
		link: 'https://github.com/Shiblumi/PediBeat',
	},
	{
		id: 6,
		title: 'Maptodon',
		description:
			'\tCreated during the TEDAI hackathon, Maptodon is an open-source ecosystem that empowers individuals and communities to create, update, and explore detailed 3D maps. Leveraging an iOS app for efficient scanning, a sophisticated AI pipeline for 3D data generation, and an intuitive web app for viewing, Maptodon enables the democratization of 3D mapping.\n\n\tThis was my first hackathon experience, where I contributed by collecting image data of objects and environments to feed into our app, and by creating and presenting the team’s slides to the judges. Through this, I gained firsthand insight into effective team collaboration and communication in a fast-paced development setting.',
		keyPoints: [
			'Data Collection',
			'Team Collaboration',
		],
		skills: [],
		role: 'Data Collection & Tester',
		date: 'Oct 2023',
		image: '/images/project1.jpg',
		link: 'https://github.com/tedai-hackathon/maptodon',
	},
];

export const skillsLogoSrc = {
	// Frontend skills
	React: '/images/logos/react-icon.svg',
	Motion: '/images/logos/framer-motion-logo.svg',
	JS: '/images/logos/javascript-logo.svg',
	HTML: '/images/logos/html-logo.svg',
	CSS: '/images/logos/CSS3-logo.svg',

	// Backend skills
	NextJS: '/images/logos/nextjs-logo.svg',
	ExpressJS: '/images/logos/expressjs-logo.svg',
	PydanticAI: '/images/logos/pydantic-logo.png',
	NodeJS: '/images/logos/node-logo.svg',
	SQL: '/images/logos/sql-generic-logo.svg',
	MongoDB: '/images/logos/mongodb-logo.svg',
	PineconeDB: '/images/logos/pineconedb-logo.svg',

	// General skills
	Python: '/images/logos/python-logo.svg',
	'C++': '/images/logos/cpp-logo.svg',
	Spline3D: '/images/logos/spline-logo.png',

	// Learning skills
	Tailwind: '/images/logos/tailwind-css-logo.svg',
	TypeScript: '/images/logos/typescript-logo.svg',
};
