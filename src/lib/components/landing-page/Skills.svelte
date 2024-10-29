<script lang="ts">
	import coding from '$lib/assets/coding.svg';
	import management from '$lib/assets/management.svg';
	import managing from '$lib/assets/managing.svg';
</script>

{#snippet item(icon: string, alt: string, contents: string)}
	<div
		class="flex flex-col items-center p-3 dark:prose-invert xl:h-auto xl:rounded-md xl:bg-zinc-600"
	>
		<div class="not-prose">
			<img src={icon} {alt} sizes="80px" />
		</div>
		<p class="lg:leading-2">{contents}</p>
	</div>
{/snippet}

<div
	id="skills"
	class="grid grid-cols-1 items-center gap-x-5 bg-neutral-800/50 p-4 dark:prose-invert max-lg:gap-y-5 md:m-4 md:p-8 lg:m-16 lg:grid-cols-[4fr,8fr] lg:gap-x-10"
>
	<div
		class="max-lg:grid-rows-auto prose grid h-fit auto-rows-auto items-center justify-center dark:prose-invert lg:grid-cols-1 lg:gap-2"
	>
		<div class="not-prose flex justify-center">
			<enhanced:img
				src="$lib/assets/avatar.png"
				alt="Sorin Broscaru"
				sizes="(max-width: 1023) 160w, 1200w"
				class="h-[120px] w-fit rounded-full lg:h-[160px]"
			/>
		</div>
		<h3 class="m-0 w-full text-center">Skills that earned over time</h3>
	</div>
	<div
		class="grid h-auto grid-cols-1 grid-rows-3 gap-x-2 max-xl:gap-y-2 xl:w-[110%] xl:grid-cols-2 xl:grid-rows-3 xl:gap-x-5"
	>
		<div class="h-60 xl:row-start-2 xl:-my-6">
			{@render item(
				coding,
				'coding',
				'I specialize in crafting responsive and scalable frontends for SaaS applications using Svelte, React, and AngularJS. My approach combines modern frontend solutions like SSR, SPAs, and Microfrontends with strong fundamentals in HTML5, CSS3, JavaScript, and TypeScript. By focusing on performance optimization and a mobile-first design philosophy, I ensure that each project provides an exceptional user experience across devices.'
			)}
		</div>
		<div class=" xl:col-start-2 xl:-mt-12">
			{@render item(
				management,
				'management',
				'With expertise in serverless architectures like Cloudflare Workers, I design and implement backend solutions that are fast, scalable, and cost-effective. I develop robust APIs (RESTful and GraphQL) for seamless data integration and functionality expansion. Leveraging Docker for environment consistency and CI/CD pipelines with GitLab CI, GitHub Actions, and Jenkins, I streamline development and deployment, ensuring faster, more reliable releases.'
			)}
		</div>
		<div class=" xl:col-start-2 xl:row-start-3 xl:-mb-12">
			{@render item(
				managing,
				'managing',
				'With expertise in serverless architectures like Cloudflare Workers, I design and implement backend solutions that are fast, scalable, and cost-effective. I develop robust APIs (RESTful and GraphQL) for seamless data integration and functionality expansion. Leveraging Docker for environment consistency and CI/CD pipelines with GitLab CI, GitHub Actions, and Jenkins, I streamline development and deployment, ensuring faster, more reliable releases.'
			)}
		</div>
	</div>
</div>
