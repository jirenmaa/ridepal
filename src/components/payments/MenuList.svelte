<script>
  export let selectedMenus
  export let noAction

  import Card from '../../components/payments/Card.svelte'
</script>

<div class="p-8">
  {#if selectedMenus.length > 0}
    <div class="grid grid-cols-4 gap-6">
      {#each selectedMenus as selected}
        <Card menu={selected.menu} id={selected.id} {noAction} />
      {/each}
    </div>
  {:else}
    <div class="w-full h-full grid place-items-center">
      <img src="/image/human-empty.svg" alt="" />
    </div>
  {/if}
</div>
