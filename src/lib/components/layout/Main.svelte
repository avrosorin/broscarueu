<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<main class="container mx-auto flex-1 basis-full pb-8">
	{@render children()}
</main>
