<script lang="ts">
	import sass_fe from '$lib/assets/saas_fe.png?enhanced';
	import serverless from '$lib/assets/serverless_solutions.png?enhanced';
	import api_integration from '$lib/assets/api_integration.png?enhanced';
	import microfrontend from '$lib/assets/microfrontend.png?enhanced';
	import dockerize from '$lib/assets/dockerize.png?enhanced';
	import ci_cd from '$lib/assets/ci_cd.png?enhanced';
	import type { Picture } from 'vite-imagetools';
	import { buttonStyles } from '$lib/styles';
</script>

{#snippet item(image: Picture, title: string, description: string)}
	<div
		class="group prose grid dark:prose-invert odd:grid-rows-[1fr,1fr,var(--grid-items-space,0px)] even:grid-rows-[var(--grid-items-space,0px),1fr,1fr] md:[--grid-items-space:theme('spacing.28')]"
	>
		<div class="row-span-2 flex min-h-16 flex-col group-even:row-start-2">
			<div class="flex items-center justify-center">
				<enhanced:img
					src={image}
					alt={title}
					class=""
					sizes="(max-width: 639px) 150w, (max-width: 766px) 180w, (max-width: 1023px) 200w, (max-width: 1279px) 250w, 300w"
					width="300"
					height="300"
				/>
			</div>
			<h3>{title}</h3>
			<p class="leading-7">
				{description}
			</p>
		</div>
	</div>
{/snippet}

<div class="prose grid grid-cols-9 py-12 dark:prose-invert max-md:grid-cols-1 max-md:py-5">
	<h2 class="text-left max-md:text-center md:col-span-6">
		Development Solutions for scalable and efficient Web Applications
	</h2>
</div>
<div
	class="lg:gap-x-18 grid grid-cols-1 pb-20 md:grid-cols-2 md:gap-x-10 xl:gap-x-24"
	id="solutions"
>
	{@render item(
		sass_fe,
		'Scalable Frontend Development for SaaS Products',
		'I design and build responsive, scalable frontends for SaaS applications, using frameworks like Svelte, React, and AngularJS. Focusing on performance and user experience, I ensure your product is optimized for any device and ready for growth.'
	)}
	{@render item(
		serverless,
		'End-to-End Serverless Solutions',
		'With serverless architecture expertise, I implement fast, scalable backend solutions using Cloudflare Workers. This reduces infrastructure costs and ensures high availability, making it an ideal choice for applications that demand speed and reliability without complex server management.'
	)}
	{@render item(
		api_integration,
		'API Integration and Custom Development',
		'I seamlessly connect your application to third-party services through API integration and build custom APIs tailored to your needs. This approach enables efficient data flow, enhances functionality, and ensures smooth, uninterrupted communication between all your services.'
	)}
	{@render item(
		microfrontend,
		'Microfrontend Architecture for Modular Web Applications',
		'I implement microfrontend architecture to break down large applications into independently deployable modules. This modular approach boosts scalability, allowing different teams to work in parallel and deploy updates without impacting the entire system’s stability.'
	)}
	{@render item(
		dockerize,
		'Docker-Based Environment Setup for Consistency Across Teams',
		'Using Docker, I create consistent development, testing, and production environments, ensuring seamless collaboration across teams. This standardized setup minimizes deployment issues, eliminates environment discrepancies, and streamlines the workflow for efficient project progression.'
	)}
	{@render item(
		ci_cd,
		'CI/CD Pipeline Setup and Automation',
		'I set up CI/CD pipelines to automate testing, integration, and deployment, ensuring faster and more reliable releases. This process enables smooth updates across development and production environments, reducing errors and accelerating time-to-market.'
	)}
	<div class="flex items-center justify-center text-xl">
		<a href="https://www.linkedin.com/in/broscaru-sorin-mihai/" class={buttonStyles.primary}
			>Find me on Linkedin</a
		>
	</div>
</div>
