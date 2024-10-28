<script lang="ts">
	import { browser } from '$app/environment';
	import { untrack } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import Typewriter from './Typewriter.svelte';

	let {
		texts,
		highlight = [],
		cycle = 12_000,
		delay = 50,
		...rest
	}: {
		texts: string | string[];
		highlight?: string[];
		cycle?: number;
		delay?: number;
	} & HTMLAttributes<HTMLSpanElement> = $props();

	let index = $state(0);
	let text = $derived(texts[index]);
	let firstRenderOccured = $state(false);
	let writing = $state(true);

	$effect(() => {
		if (texts.length < 2 || writing) return;
		const interval = setInterval(() => {
			if (!firstRenderOccured) {
				firstRenderOccured = true;
				// bump the index as 1st text was already rendered ssr-ed
				untrack(() => (index += 1));
			} else {
				index = index === texts.length - 1 ? 0 : index + 1;
			}
		}, cycle);
		return () => clearInterval(interval);
	});
</script>

<Typewriter
	{text}
	{highlight}
	{delay}
	{browser}
	disabled={!firstRenderOccured || !browser}
	onstart={() => (writing = true)}
	onend={() => (writing = false)}
	{...rest}
/>
