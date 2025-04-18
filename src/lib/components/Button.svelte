<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    export let variant: 'primary' | 'secondary' | 'danger' = 'primary';
    export let type: 'button' | 'submit' | 'reset' = 'button';
    export let disabled = false;
  
    const dispatch = createEventDispatcher();
  
    const base = 'px-4 py-2 rounded font-medium focus:outline-none transition';
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      danger: 'bg-red-600 text-white hover:bg-red-700'
    };
  </script>
  
  <button
    type={type}
    class={`${base} ${variants[variant]} ${$$restProps.class ?? ''}`}
    disabled={disabled}
    on:click={(e) => dispatch('click', e)}
    {...$$restProps}
  >
    <slot />
  </button>