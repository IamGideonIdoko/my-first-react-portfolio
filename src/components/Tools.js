import React, { useState } from 'react';
import htmlLogo from '../igifexstyles/images/html.png';
import cssLogo from '../igifexstyles/images/css.png';
import sassLogo from '../igifexstyles/images/sass.svg';
import bootstrapLogo from '../igifexstyles/images/bootstrap.png';
import tailwindLogo from '../igifexstyles/images/tailwindcss.svg';
import jsLogo from '../igifexstyles/images/javascript.png';
import reactLogo from '../igifexstyles/images/react.png';
import typescriptLogo from '../igifexstyles/images/typescript.svg';
import phpLogo from '../igifexstyles/images/php.png';
import mysqlLogo from '../igifexstyles/images/mysql.svg';
import wordpressLogo from '../igifexstyles/images/wordpress.svg';
import responsiveLogo from '../igifexstyles/images/responsive.svg';
import codeLogo from '../igifexstyles/images/code.svg';
import gitLogo from '../igifexstyles/images/versioncontrol.svg';
import jqueryLogo from '../igifexstyles/images/jquery.svg';



const Tools = () => {
	const [ allTools ] = useState([
	{
		id: 1,
		logo: htmlLogo,
		name: 'HTML'
	},
	{
		id: 2,
		logo: cssLogo,
		name: 'CSS'
	},
	{
		id: 3,
		logo: sassLogo,
		name: 'SASS(SCSS)'
	},
	{
		id: 2,
		logo: bootstrapLogo,
		name: 'Bootstrap'
	},
	{
		id: 2,
		logo: tailwindLogo,
		name: 'Tailwind'
	},
	{
		id: 3,
		logo: jsLogo,
		name: 'JavaScript'
	},
	{
		id: 4,
		logo: jqueryLogo,
		name: 'jQuery'
	},
	{
		id: 5,
		logo: reactLogo,
		name: 'React'
	},
	{
		id: 6,
		logo: typescriptLogo,
		name: 'TypeScript'
	},
	{
		id: 7,
		logo: phpLogo,
		name: 'PHP'
	},
	{
		id: 8,
		logo: mysqlLogo,
		name: 'MySQL'
	},
	{
		id: 9,
		logo: wordpressLogo,
		name: 'Wordpress'
	},
	{
		id: 10,
		logo: responsiveLogo,
		name: 'Responsive Design'
	},
	{
		id: 11,
		logo: codeLogo,
		name: 'PSD to HTML'
	},
	{
		id: 12,
		logo: gitLogo,
		name: 'Git'
	}
		]);

	const imgStyle = {
		width: '100px',
		height: '100px'
	}

	return allTools.map((tool) => (
			<li data-aos="fade-up" key={tool.id}>
				<img src={tool.logo} alt="" style={imgStyle} />
				<p>{tool.name}</p>
			</li>
		));
}

export default Tools;