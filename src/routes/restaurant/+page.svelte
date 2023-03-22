<script>
  export let data

  import { onMount, tick } from 'svelte'

  import Wrapper from '../../components/restaurant/Wrapper.svelte'

  let loading = true
  let restaurants = []

  onMount(async () => {
    await tick()

    restaurants = data.results
    loading = false
  })
</script>

<div class="col-span-4">
  {#if !loading}
    <Wrapper {restaurants} />
  {/if}
</div>
