<script lang="ts">
	import { ChevronDownCircle } from 'lucide-svelte';
</script>

<div class="flex h-14 w-full items-center justify-center">
	<div class="relative left-[50%]">
		<div
			class="aspect-square absolute flex h-14 -translate-x-[50%] -translate-y-[50%] items-center justify-center rounded-full"
		>
			<ChevronDownCircle />
		</div>
	</div>
	<div class="flex h-[0.1rem] w-full [--bar-color:theme('colors.zinc.600')]">
		<div
			class="h-[0.1rem] w-full flex-1 bg-gradient-to-r from-[var(--bar-color)] via-[var(--bar-color)] via-5% to-transparent"
		></div>
		<div
			class="via--[var(--bar-color)] h-[0.1rem] w-full flex-1 bg-gradient-to-r from-transparent via-95% to-[var(--bar-color)]"
		></div>
	</div>
</div>
