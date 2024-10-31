<script lang="ts">
	import { anchorStyles } from '$lib/styles';
</script>

<div class="min-h-[30vh] bg-stone-950 py-10 md:py-20">
	<div class="container mx-auto grid h-fit grid-cols-2 gap-10 max-md:gap-6">
		<div class="flex flex-col gap-10 max-lg:col-span-2">
			<h1 class="text-xl md:text-2xl lg:text-4xl xl:text-6xl">Have a great software ideea?</h1>
			<div class="text-lg underline underline-offset-2 md:text-xl lg:text-2xl xl:text-3xl">
				<a href="mailto:sorin.broscaru@avroit.ro">Let's work together</a>
			</div>
		</div>
		<div class="flex flex-col gap-10 max-lg:col-span-2">
			<ul
				class="flex flex-1 gap-5 text-xl max-md:flex-col max-md:items-center md:items-end md:justify-end"
			>
				<li>
					<a href="https://www.linkedin.com/in/broscaru-sorin-mihai/" class={anchorStyles.menu}>
						Linkedin
					</a>
				</li>
				<li><a href="https://github.com/avrosorin" class={anchorStyles.menu}>Github</a></li>
			</ul>
		</div>
	</div>
</div>
