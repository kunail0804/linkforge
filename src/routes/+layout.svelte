<script lang="ts">
	import '../app.css';
	import Layout from '$lib/layout/Layout.svelte';

	let { children } = $props();
</script>

<Layout />

{@render children()}
