<script lang="ts">
	import { buttonStyles } from '$lib/styles';
	import Typer from '../blocks/Typer.svelte';

	const catchphrases = [
		// Primary SEO-friendly phrase
		'Freelance developer empowering teams to achieve project success!', // Highlight: Freelance developer, empowering, project success

		// Typewriter-style phrases
		'8+ years of frontend expertise to elevate your projects.', // Highlight: 8+ years, frontend expertise, elevate
		'Transforming ideas 💡 into scalable SaaS solutions.', // Highlight: Transforming ideas, scalable SaaS
		'Fullstack experience to bring your vision to life.', // Highlight: Fullstack experience, vision to life
		'Skilled in Svelte, React, and AngularJS – always ready to explore new tech!', // Highlight: Svelte, React, AngularJS, new tech
		'Modern solutions: SSR, Microfrontends, Web Components, and more!', // Highlight: Modern solutions, SSR, Microfrontends, Web Components
		'Empowering your web presence with cutting-edge technology!', // Highlight: Empowering, web presence, cutting-edge technology
		'Serverless solutions with Cloudflare Workers for scalability and speed.', // Highlight: Serverless solutions, Cloudflare Workers, scalability
		'Streamlined workflows with Docker and CI/CD for faster releases.' // Highlight: Docker, CI/CD, faster releases
	];
	const highlights = [
		'empowering',
		'success',
		'8+ years',
		'elevate',
		'scalable SaaS',
		'Fullstack',
		'Svelte',
		'Microfotends',
		'cutting-edge',
		'Docker'
	];
</script>

<div class="my-24 grid grid-cols-1 lg:my-44">
	<div class="flex items-center justify-center">Hey, I am Sorin Broscaru 👋</div>
	<h1
		class="mb-24 min-h-24 w-full text-center text-2xl md:text-3xl lg:min-h-24 lg:px-20 lg:text-4xl"
	>
		<Typer texts={catchphrases} highlight={highlights} cycle={5_000} />
	</h1>
	<div class="flex items-center justify-center">
		<a href="/meetings" class="my-2 w-fit text-xl {buttonStyles.primary}"> Let’s Collaborate </a>
	</div>
</div>
