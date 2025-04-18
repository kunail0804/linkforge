<script lang="ts">
    import { theme } from '$lib/stores/themeStore';
  </script>
  
  <header class="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900 shadow border-b border-gray-200 dark:border-gray-700">
    <!-- Logo -->
    <div class="text-xl font-semibold text-gray-800 dark:text-white">
      LinkForge
    </div>
  
    <!-- Action Buttons -->
    <div class="flex items-center gap-3">
      <button class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Run Workflow
      </button>
  
      <button
        class="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
        aria-label="Toggle settings"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m0 14v1m8-8h1M4 12H3m15.36 6.36l-.707-.707M6.34 6.34l-.707-.707m12.02 0l-.707.707M6.34 17.66l-.707.707" />
        </svg>
      </button>
  
      <button
        class="p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        on:click={() => theme.toggle()}
      >
        🌓
      </button>
    </div>
  </header>