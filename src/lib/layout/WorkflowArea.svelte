<script lang="ts">
  import { writable } from 'svelte/store';
  import { SvelteFlow, Background, Controls } from '@xyflow/svelte';

  const nodes = writable([
    {
      id: '1',
      position: { x: 100, y: 100 },
      data: { label: 'Start' },
      type: 'default'
    }
  ]);

  const edges = writable([]);
</script>

<div class="flex-1 overflow-auto bg-white dark:bg-gray-900">
  <SvelteFlow {nodes} {edges} style="height: 100%; width: 100%;">
    <Background />
    <Controls />
  </SvelteFlow>
</div>