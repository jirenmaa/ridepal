<script>
  import { storage } from '$lib/store/store.js'
  import clsx from 'clsx'

  export let menu
  export let id

  function handleClick(restaurantID, menu) {
    let selectedMenus
    let newID

    // Subscribe to updates of the store's value
    storage.subscribe((value) => {
      selectedMenus = value
    })

    selectedMenus.sort((a, b) => a.id - b.id)

    let size = selectedMenus.length
    newID = size > 0 ? selectedMenus[size - 1].id + 1 : 1

    storage.set([
      ...selectedMenus,
      { id: newID, restaurantID: restaurantID, menu: menu },
    ])
  }

  let isSpecialtyMenu = menu.photo
  let imageSpecialty = isSpecialtyMenu ? 'h-96 max-h-96' : 'h-72 max-h-72'
</script>

<div
  class={clsx(
    imageSpecialty,
    'w-72 border-2 rounded-lg transition ease-in-out duration-300 hover:bg-jasmine hover:bg-opacity-20'
  )}
>
  <div class="h-full flex flex-col justify-between">
    {#if isSpecialtyMenu}
      <div class="overflow-hidden h-48 border-b rounded-t-md">
        <img src={menu.photo} alt="" class="object-cover" />
      </div>
    {/if}
    <div class="flex flex-col space-y-6 p-4">
      <div class="h-full flex flex-col">
        <h1 class="font-semibold text-xl text-gray-700">
          {menu.name}
        </h1>
        <p class="text-sm text-gray-500">
          {#each menu.ingredients as ingridient, i}
            <span>
              {ingridient}{#if i != menu.ingredients.length - 1}, {/if}
            </span>
          {/each}
        </p>
        <p class="font-semibold text-lg text-gray-700">${menu.price}</p>
        <div class="flex items-center space-x-2 pt-2">
          <div
            class="inline-flex border-2 border-gray-600 rounded-full pl-1.5 pr-3 pb-0.5"
          >
            <div class="flex items-center">
              <img src="/icons/clock.png" alt="" class="transform scale-60" />
              <p class="font-medium text-xs text-gray-800">
                {menu.cooking_time}
              </p>
            </div>
          </div>
          <button
            class="inline-flex cursor-pointer border-2 border-gray-600 bg-emerald-200 rounded-full hover:bg-emerald-400 px-3 pb-0.5"
            on:click={handleClick(id, menu)}
          >
            <span class="text-center">order</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
