<script lang="ts">
    import Topbar from './Topbar.svelte';
    import Sidebar from './Sidebar.svelte';
    import WorkflowArea from './WorkflowArea.svelte';
  </script>
  
  <div class="flex flex-col h-screen">
    <Topbar />
  
    <div class="flex flex-1 overflow-hidden">
      <Sidebar />
      <WorkflowArea />
    </div>
  </div>