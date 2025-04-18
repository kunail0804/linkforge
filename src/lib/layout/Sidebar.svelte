<script lang="ts">
  import { goto } from '$app/navigation';

  const modules = [
    { name: 'Module A' },
    { name: 'Module B' },
    { name: 'Module C' },
    { name: 'Module D' }
  ];
</script>

<aside class="w-64 bg-gray-100 dark:bg-gray-800 h-full border-r border-gray-200 dark:border-gray-700 p-4 overflow-y-auto flex flex-col justify-between">
  <div>
    <h2 class="text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-widest">
      Modules
    </h2>
    <ul class="space-y-2">
      {#each modules as module}
        <li
          class="px-3 py-2 rounded text-gray-800 dark:text-white bg-white dark:bg-gray-700 shadow-sm
                 cursor-grab active:cursor-grabbing
                 hover:bg-gray-200 dark:hover:bg-gray-600
                 transition duration-150 ease-in-out"
          draggable="true"
          on:dragstart|preventDefault
        >
          {module.name}
        </li>
      {/each}
    </ul>
  </div>
</aside>