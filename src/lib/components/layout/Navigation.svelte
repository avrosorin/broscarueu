<script lang="ts">
	import { anchorStyles, buttonStyles } from '$lib/styles';
	import MobileMenu from '../blocks/MobileMenu.svelte';
	import { Send } from 'lucide-svelte';
</script>

{#snippet anchor(href: string, text: string, clazz: string | null = null, onclick?: () => void)}
	<a {href} class={clazz} {onclick}>{text}</a>
{/snippet}

{#snippet avroAnchor(onclick?: () => void)}
	<a href="https://www.avroit.ro" class={anchorStyles.avro} {onclick}>
		Avro <Send class="rotate-6" size="20" />
	</a>
{/snippet}

<div class="container mx-auto grid grid-cols-[auto,1fr] py-3 md:py-6" id="top">
	<div>
		{@render anchor('/', 'Sorin Broscaru', anchorStyles.logo)}
	</div>
	<div
		class="flex items-center justify-end gap-[var(--menu-gap,theme('size.5'))] [--menu-gap:theme('size.4')]"
	>
		<MobileMenu>
			{#snippet children(onclick)}
				{@render anchor('/#skills', 'Skills', anchorStyles.menu, onclick)}
				{@render anchor('/#solutions', 'Solutions', anchorStyles.menu, onclick)}
				{@render avroAnchor(onclick)}
			{/snippet}
		</MobileMenu>
		{@render anchor('mailto:sorin.broscaru@avroit.ro', 'Contact', buttonStyles.primary)}
	</div>
</div>
