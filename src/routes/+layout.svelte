<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Main from '$lib/components/layout/Main.svelte';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	let { children } = $props();
</script>

<div
	class="flex-1 flex-col overflow-auto scroll-smooth bg-gradient-to-tr from-slate-900 via-indigo-950 via-60% to-slate-950 font-sans"
>
	<Navigation />
	<Main>
		{@render children()}
	</Main>
	<Footer />
</div>
