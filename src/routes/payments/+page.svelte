<script>
  import { storage, history } from '$lib/store/store.js'

  import Head from '../../components/payments/Head.svelte'
  import MenuList from '../../components/payments/MenuList.svelte'

  let selectedMenus = []
  let historyMenus = []

  let total = 0
  let navigateTo = 1

  // subscribe to updates of the store's value
  storage.subscribe((value) => {
    let countTotal = 0

    selectedMenus = value
    // sort from the newer inserted data
    selectedMenus.sort((a, b) => a.id - b.id)

    selectedMenus.forEach((element) => {
      countTotal += element.menu.price
    })

    total = countTotal
  })

  // subscribe to updates of the store's value
  history.subscribe((value) => {
    historyMenus = value
    // sort from the newer inserted data
    historyMenus.sort((a, b) => a.id - b.id)
  })
</script>

<div class="col-span-4">
  <div class="overflow-y-auto h-screen flex flex-col">
    <Head {total} bind:navigateTo />

    {#if navigateTo == 1}
      <MenuList {selectedMenus} />
    {:else}
      <MenuList selectedMenus={historyMenus} noAction={true} />
    {/if}
  </div>
</div>
