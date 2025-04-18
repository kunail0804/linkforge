<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let label: string;
  export let value: string;
  export let type: string = 'text';
  export let placeholder = '';
  export let disabled = false;
  export let error: string | null = null;

  const dispatch = createEventDispatcher();
</script>

<div class="flex flex-col gap-1">
  {#if label}
    <label for="input-{label}" class="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </label>
  {/if}
  <input
    id="input-{label}"
    bind:value
    {type}
    {placeholder}
    {disabled}
    class="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
           dark:bg-gray-800 dark:border-gray-600 dark:text-white
           {error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}"
    on:input={(e) => dispatch('input', e)}
    on:change={(e) => dispatch('change', e)}
  />
  {#if error}
    <span class="text-sm text-red-600">{error}</span>
  {/if}
</div>