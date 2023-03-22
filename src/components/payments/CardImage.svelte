<script>
  export let photo
  export let isSpecialtyMenu
</script>

<div class="overflow-hidden h-48 border-b rounded-t-md">
  {#if isSpecialtyMenu}
    <img src={photo} alt="" class="object-cover" />
  {/if}
</div>
