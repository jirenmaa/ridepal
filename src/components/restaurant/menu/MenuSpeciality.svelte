<script>
  export let specialities
  export let restaurantID

  import Card from './Card.svelte'
</script>

<div class="flex flex-col space-y-4">
  <div class="inline-flex">
    <h1 class="font-semibold text-3xl text-gray-700">
      Restaurant Specialities
    </h1>
  </div>
  <div class="grid grid-cols-4 gap-6">
    {#each specialities as speciality}
      <Card menu={speciality} id={restaurantID} />
    {/each}
  </div>
</div>
