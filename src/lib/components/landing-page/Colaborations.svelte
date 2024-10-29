<script lang="ts">
	import FancySplit from '../blocks/FancySplit.svelte';
	import Airtame from '../colaborators/Airtame.svelte';
	import Bmw from '../colaborators/BMW.svelte';
	import Gameloft from '../colaborators/Gameloft.svelte';
	import Imc from '../colaborators/IMC.svelte';
	import Visma from '../colaborators/Visma.svelte';
</script>

<FancySplit cutoff={25}>Companies I have helped</FancySplit>
<!-- class="grid grid-cols-5 place-items-center gap-2 max-md:grid-cols-1" -->
<div
	class="my-4 flex items-center justify-center gap-x-14 max-md:flex-col max-md:gap-y-4 lg:my-8 xl:my-12"
>
	<Imc class="h-14 w-fit text-white" />
	<Gameloft class="h-14 w-fit text-white" />
	<Bmw class="h-14 w-fit text-white" />
	<Visma class="h-fit w-40 text-white" />
	<Airtame class="w-40 text-white" />
</div>
<FancySplit cutoff={25}>with 1M+ lines of code</FancySplit>
