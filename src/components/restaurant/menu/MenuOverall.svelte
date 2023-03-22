<script>
  export let menus
  export let restaurantID

  import Card from './Card.svelte'
</script>

<div class="flex flex-col space-y-4">
  <div class="inline-flex">
    <h1 class="font-semibold text-3xl text-gray-700">Restaurant Menus</h1>
  </div>
  <div class="grid grid-cols-4 gap-6">
    {#each menus as menu}
      <Card {menu} id={restaurantID} />
    {/each}
  </div>
</div>
