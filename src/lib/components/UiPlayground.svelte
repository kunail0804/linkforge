<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Input from '$lib/components/Input.svelte';
  import Modal from '$lib/components/Modal.svelte';

  let showModal = false;
  let inputValue = '';
</script>

<div class="mt-10 p-6 border-t border-gray-300 dark:border-gray-700">
  <h2 class="text-xl font-bold mb-4">🎨 UI Playground</h2>

  <!-- Buttons -->
  <section class="mb-6">
    <h3 class="text-lg font-semibold mb-2">Buttons</h3>
    <div class="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  </section>

  <!-- Inputs -->
  <section class="mb-6">
    <h3 class="text-lg font-semibold mb-2">Inputs</h3>
    <Input label="Nom" bind:value={inputValue} placeholder="Entrez un nom" />
    <div class="mt-2">
      <Input label="Avec erreur" bind:value={inputValue} error="Ce champ est requis." />
    </div>
  </section>

  <!-- Modal -->
  <section>
    <h3 class="text-lg font-semibold mb-2">Modal</h3>
    <Button on:click={() => showModal = true}>Ouvrir modale</Button>
    {#if showModal}
      <Modal on:close={() => showModal = false}>
        <h2 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Ceci est une modale</h2>
        <p class="text-gray-600 dark:text-gray-300">Elle peut être fermée par le bouton, un clic extérieur ou Échap.</p>
      </Modal>
    {/if}
  </section>
</div>