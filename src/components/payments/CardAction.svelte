<script>
  export let menuID
  export let cookingTime

  import { storage, history } from '$lib/store/store.js'
  import clsx from 'clsx'

  function updateHistoryMenu(item) {
    let historyMenus

    history.subscribe((value) => {
      historyMenus = value
    })

    history.set([...historyMenus, item])
  }

  function handleOnClick(id, action) {
    let selectedMenus
    let filteredItem

    storage.subscribe((value) => {
      selectedMenus = value
    })

    // filter out the selected menu with id
    let filtered = selectedMenus.filter((item) => {
      if (item.id == id) filteredItem = item
      else return item
    })

    // update store
    storage.set(filtered)

    if (action == 'pay') {
      updateHistoryMenu(filteredItem)
    }
  }
</script>

<div class="flex items-center space-x-2 pt-2">
  <div
    class="inline-flex border-2 border-gray-600 rounded-full pl-1.5 pr-3 pb-0.5"
  >
    <div class="flex items-center">
      <img src="/icons/clock.png" alt="" class="transform scale-60" />
      <p class="font-medium text-xs text-gray-800">
        {cookingTime}
      </p>
    </div>
  </div>
  <button
    class={clsx(
      'inline-flex cursor-pointer',
      'border-2 border-gray-600 bg-red-200 rounded-full hover:bg-red-400',
      'px-3 pb-0.5'
    )}
    on:click={handleOnClick(menuID, 'remove')}
  >
    <span class="text-center">remove</span>
  </button>
  <button
    class={clsx(
      'inline-flex cursor-pointer',
      'border-2 border-gray-600 bg-emerald-200 rounded-full hover:bg-emerald-400',
      'px-3 pb-0.5'
    )}
    on:click={handleOnClick(menuID, 'pay')}
  >
    <span class="text-center">pay</span>
  </button>
</div>
