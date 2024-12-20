<script lang="ts">
    export function fade(node:any, { delay = 0, duration = 400 }) {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		css: (t:any) => `opacity: ${t * o}`
	};
    }
</script>