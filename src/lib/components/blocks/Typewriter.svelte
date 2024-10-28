<script module>
	const highlightColor = 'text-[var(--typewriter-highlight-color)]';
	const HIGHLIGHT_START_TAG = `<span class="${highlightColor}">`;
	const HIGHLIGHT_END_TAG = '</span>';
	const mergeHighlights = (highlights: [number, number][]) => {
		if (highlights.length < 2) return highlights;

		const merged = [];
		highlights.sort(([first], [second]) => first - second);

		let [current] = highlights;
		for (let i = 1; i < highlights.length - 1; i += 1) {
			const [start, end] = current;
			const [nextStart, nextEnd] = highlights[i + 1];
			if (end >= nextStart) {
				current = [start, Math.max(end, nextEnd)];
				//skip over next
				i += 1;
			} else {
				merged.push(current);
				current = highlights[i];
			}
		}
		merged.push(current);
		return merged;
	};
	const getHighlights = (text: string, h: string[]) => {
		const highlight = [...new Set(h)];
		const highlightLocations = mergeHighlights(
			highlight
				.filter((h) => text.includes(h))
				.map((highlight) => {
					const start = text.indexOf(highlight);
					return [start, start + highlight.length] as [number, number];
				})
		);
		return {
			highlight,
			highlightLocations
		};
	};
	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	export async function* typewriter(text: string, highlights: string[], delay: number) {
		text = text.trim();
		const { highlightLocations } = getHighlights(text, highlights);

		for (let i = 0; i < text.length; i++) {
			const char = text[i];
			const [isHighlight] = highlightLocations.filter(([start, end]) => i >= start && i <= end);
			if (!isHighlight) {
				yield {
					char,
					highlight: false,
					start: false,
					else: false
				};
			} else {
				const [start, end] = isHighlight;
				const highlight = Boolean(isHighlight);
				if (i === start) {
					yield {
						char,
						highlight,
						start: true
					};
				} else if (i === end) {
					yield {
						char,
						highlight: true,
						start: false,
						end: true
					};
				} else {
					yield {
						char,
						highlight: true,
						start: false,
						end: false
					};
				}
			}
			if (i < text.length - 1) await sleep(delay);
		}
		return;
	}
	const getHighlightedTextHtml = (text: string, highlights: string[]) => {
		text = text.trim();
		const { highlight } = getHighlights(text, highlights);
		const regex = new RegExp(`(${highlight.join('|')})`, 'g');
		return text.replace(regex, `${HIGHLIGHT_START_TAG}$1${HIGHLIGHT_END_TAG}`);
	};
	const getTypewriterHtml = (
		previous: string = '',
		{
			char,
			highlight,
			start,
			end
		}: { char: string; highlight?: boolean; start?: boolean; end?: boolean }
	) => {
		if (highlight) {
			if (start) {
				return previous + HIGHLIGHT_START_TAG + char + HIGHLIGHT_END_TAG;
			} else if (end) {
				return (
					previous.substring(0, previous.length - HIGHLIGHT_END_TAG.length) +
					char +
					HIGHLIGHT_END_TAG
				);
			} else {
				return (
					previous.substring(0, previous.length - HIGHLIGHT_END_TAG.length) +
					char +
					HIGHLIGHT_END_TAG
				);
			}
		} else {
			return previous + char;
		}
	};
</script>

<script lang="ts">
	import { untrack } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		browser = typeof window !== 'undefined',
		disabled = 'on-motion-reduce',
		text,
		delay = 60,
		highlight = [],
		onstart,
		onend,
		class: className,
		...rest
	}: {
		text: string;
		delay?: number;
		disabled?: 'on-motion-reduce' | boolean;
		highlight?: string[];
		browser?: boolean;
		onstart?: () => void;
		onend?: () => void;
	} & HTMLAttributes<HTMLSpanElement> = $props();

	let off = $derived(
		!browser || delay === 0
			? true
			: disabled === 'on-motion-reduce'
				? window.matchMedia('(prefers-reduced-motion: reduce)').matches
				: disabled
	);

	let output = $state<string>(getHighlightedTextHtml(text, highlight));

	const untrackableChanges = (...args: Parameters<typeof typewriter>) => {
		untrack(async () => {
			onstart?.();
			for await (const result of typewriter(...args)) {
				output = getTypewriterHtml(output, result);
			}
			onend?.();
		});
	};

	$effect(() => {
		if (off) {
			onstart?.();
			output = getHighlightedTextHtml(text, highlight);
			onend?.();
		} else {
			output = '';
			untrackableChanges(text, highlight, delay);
		}
	});
</script>

<span
	{...rest}
	class="[--typewriter-highlight-color:var(--highlight-color,theme('colors.indigo.400'))] {className
		? className
		: ''}"
>
	{#await output then output}
		{@html output}
	{/await}
</span>
