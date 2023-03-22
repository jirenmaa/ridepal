<script>
  export let menu
  export let id
  export let noAction

  import CardAction from './CardAction.svelte'
</script>

<div class="flex flex-col space-y-6 p-4">
  <div class="flex flex-col">
    <h1 class="font-semibold text-xl text-gray-700">
      {menu.name}
    </h1>
    <div class="text-sm text-gray-500">
      {#each menu.ingredients as ingridient, i}
        <span>
          {ingridient}{#if i != menu.ingredients.length - 1}, {/if}
        </span>
      {/each}
    </div>
    <div class="font-semibold text-lg text-gray-700">
      <span>${menu.price}</span>
    </div>

    {#if !noAction}
      <CardAction menuID={id} cookingTime={menu.cooking_time} />
    {/if}
  </div>
</div>
