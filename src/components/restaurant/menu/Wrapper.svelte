<script>
  export let restaurant

  import Head from '../../../components/restaurant/menu/Head.svelte'
  import Body from '../../../components/restaurant/menu/Body.svelte'
</script>

<div class="h-screen overflow-y-auto flex flex-col">
  <Head
    resturantName={restaurant.name}
    resturantDescription={restaurant.description}
  />
  <Body restaurantData={restaurant} />
</div>
