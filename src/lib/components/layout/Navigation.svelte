<script lang="ts">
	import { anchorStyles, buttonStyles } from '$lib/styles';
	import { type Component } from 'svelte';
	import MobileMenu from '../blocks/MobileMenu.svelte';
	import { Send } from 'svelte-lucide';
</script>

{#snippet anchor(href: string, text: string, clazz: string | null = null, onclick?: () => void)}
	<a {href} class={clazz} {onclick}>{text}</a>
{/snippet}

{#snippet avroAnchor(onclick?: () => void)}
	<a href="https://www.avroit.ro" class={anchorStyles.avro} {onclick}>
		Avro <Send class="rotate-6" size="20" />
	</a>
{/snippet}

<div class="container mx-auto grid grid-cols-[auto,1fr] py-3 md:py-6">
	<div>
		{@render anchor('/', 'Sorin Broscaru', anchorStyles.menu)}
	</div>
	<div
		class="flex items-center justify-end gap-[var(--menu-gap,theme('size.5'))] [--menu-gap:theme('size.5')]"
	>
		<MobileMenu>
			{#snippet children(onclick)}
				{@render anchor('#projects', 'Projects', anchorStyles.menu, onclick)}
				{@render anchor('#skills', 'Skills', anchorStyles.menu, onclick)}
				{@render avroAnchor(onclick)}
			{/snippet}
		</MobileMenu>
		{@render anchor('mailto:sorin.broscaru@avroit.ro', 'Contact', buttonStyles.primary)}
	</div>
</div>
