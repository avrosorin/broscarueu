<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Menu } from 'lucide-svelte';

	let { children }: { children: Snippet<[() => void | undefined]> } = $props();
	let open = $state(false);
	const onclick = () => {
		open = !open;
	};
	const onresize = () => {
		if (open) open = false;
	};
</script>

<svelte:window {onresize} />

<div
	class="right-0 top-1/2 contents max-sm:relative max-sm:bottom-0 max-sm:-mr-[var(--menu-gap)] max-sm:grid max-sm:grid-cols-1"
>
	<div
		class="shadow-neutral-900-600 flex rounded-b-md rounded-tl-md bg-gradient-to-tr from-slate-950 from-10% to-indigo-900 py-1 shadow-sm max-md:items-center
        max-sm:absolute max-sm:-translate-x-full max-sm:flex-col-reverse max-sm:gap-y-2 max-sm:py-2 sm:contents sm:px-10"
		class:max-md:hidden={!open}
	>
		{@render children(onclick)}
	</div>
</div>
<button
	class="drop-shadow-sm sm:hidden"
	{onclick}
	aria-label="menu"
	aria-roledescription="Open mobile menu"
>
	<Menu />
</button>
