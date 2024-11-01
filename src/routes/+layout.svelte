<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Main from '$lib/components/layout/Main.svelte';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Wrapper from '$lib/components/layout/Wrapper.svelte';
	let { children } = $props();
</script>

<Wrapper>
	<Navigation />
	<Main>
		{@render children()}
	</Main>
	<Footer />
</Wrapper>
