<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { createEventDispatcher } from 'svelte';
  
    const dispatch = createEventDispatcher();
  
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        dispatch('close');
      }
    }
  
    onMount(() => {
      window.addEventListener('keydown', handleKeyDown);
    });
  
    onDestroy(() => {
      window.removeEventListener('keydown', handleKeyDown);
    });
  </script>
  
  <div
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="bg-white dark:bg-gray-800 p-6 rounded shadow-md relative min-w-[300px] max-w-[90%]"
      role="document"
    >
      <button
        class="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500"
        on:click={() => dispatch('close')}
        aria-label="Close modal"
      >
        ✕
      </button>
      <button
        class="fixed inset-0 bg-transparent"
        aria-label="Close modal background"
        on:click={() => dispatch('close')}
        on:keydown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            dispatch('close');
          }
        }}
      ></button>
      <slot />
    </div>
  </div>