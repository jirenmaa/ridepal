<script>
  import { storage } from '$lib/store/store.js'

  $: count = 0

  storage.subscribe((value) => {
    count = value.length
    count = count < 99 ? count : '99+'
  })
</script>

{#if count > 0}
  <div class="absolute top-1 right-0">
    <div class="max-w-12 max-h-12 w-8 h-8 border-2 border-white rounded-full bg-[#EF5350] py-auto">
      <div class="w-full h-full grid place-items-center text-xs">
        <span class="font-bold text-white -mt-0.5">{count}</span>
      </div>
    </div>
  </div>
{/if}
