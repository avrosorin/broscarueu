<script lang="ts">
	import { ChevronDownCircle } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		cutoff?: number;
		children?: Snippet;
	};

	let { cutoff = 10, children }: Props = $props();

	let left = $derived(cutoff > 100 ? 100 : cutoff < 0 ? 0 : cutoff);
	let right = $derived(100 - left);
</script>

<div class="flex h-14 w-full items-center justify-center">
	<div class="relative left-[50%]">
		<div
			class="aspect-square absolute flex h-14 -translate-x-[50%] -translate-y-[50%] items-center justify-center rounded-full"
		>
			{#if children}
				<span class="block w-max text-xs shadow-2xl shadow-indigo-950 md:text-xs lg:text-sm">
					{@render children()}
				</span>
			{:else}
				<ChevronDownCircle />
			{/if}
		</div>
	</div>
	<div class="flex h-[0.1rem] w-full [--bar-color:theme('colors.zinc.600')]">
		<div
			class="h-[0.1rem] w-full flex-1 bg-gradient-to-r from-[var(--bar-color)] to-transparent"
			style="--tw-gradient-to-position: {right}%;"
		></div>
		<div
			class="h-[0.1rem] w-full flex-1 bg-gradient-to-r from-transparent to-[var(--bar-color)]"
			style="--tw-gradient-from-position: {left}%;"
		></div>
	</div>
</div>
