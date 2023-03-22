<script>
  export let data

  import { onMount, tick } from 'svelte'

  import Wrapper from '../../../components/restaurant/menu/Wrapper.svelte'

  let loading = true
  let restaurant = []

  onMount(async () => {
    await tick()

    restaurant = data.results
    loading = false
  })
</script>

<div class="col-span-4">
  {#if !loading}
    <Wrapper {restaurant} />
  {/if}
</div>
