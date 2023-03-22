<script>
  export let restaurants

  import RestaurantCard from './Card.svelte'
</script>

<div class="h-screen overflow-y-auto p-8">
  <div class="grid grid-cols-3 gap-6">
    {#each restaurants as restaurant}
      <RestaurantCard {restaurant} />
    {/each}
  </div>
</div>
