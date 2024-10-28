<script lang="ts">
	import Typer from '../blocks/Typer.svelte';

	const catchphrases = [
		'Empowering teams achieve success with their projects!',
		'8+ years of frontend expertise to elevate your projects.',
		'Transforming 💡 into scalable SaaS products.',
		'2+ years of fullstack to bring your ideas to life.',
		'Mastering Svelte, React and AngularJS! Yet, not shy to try new things.',
		'Modern Solutions: SSR, Microfrontends, Web Components, and more!',
		'Empowering your web presence with cutting-edge tech!'
	];
	const highlights = ['Empowering', '8+ years', 'fullstack', 'Svelte', 'Microfotends', 'Web'];
</script>

<div class="my-32 grid grid-cols-1 gap-8 lg:my-44 lg:gap-16">
	<div class="flex items-center justify-center">Hey, I am Sorin Broscaru 👋</div>
	<h1 class="min-h-24 w-full text-center text-2xl md:text-3xl lg:min-h-24 lg:px-20 lg:text-4xl">
		<Typer texts={catchphrases} highlight={highlights} />
	</h1>
</div>
