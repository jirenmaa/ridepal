<script>
  export let restaurantData

  import MenuOverall from './MenuOverall.svelte'
  import MenuSpeciality from './MenuSpeciality.svelte'
</script>

<div class="h-full flex flex-col space-y-20 p-8">
  <MenuSpeciality
    specialities={restaurantData.specialities}
    restaurantID={restaurantData.id}
  />
  <MenuOverall menus={restaurantData.menus} restaurantID={restaurantData.id} />
</div>
