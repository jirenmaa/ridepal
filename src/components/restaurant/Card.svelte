<script>
  export let restaurant
</script>

<a data-sveltekit-preload-data="hover" href={'/restaurant/' + restaurant.slug}>
  <div
    class="h-72 max-h-72 cursor-pointer border-2 rounded-lg transition ease-in-out duration-300 hover:bg-jasmine hover:bg-opacity-20 p-4"
  >
    <div class="h-full flex flex-col justify-between">
      <div />
      <div class="flex flex-col space-y-6">
        <div class="space-y-2">
          <h1 class="font-semibold text-2xl text-gray-700">
            {restaurant.name}
          </h1>
          <p class="text-gray-600 line-clamp-3">{restaurant.description}</p>
        </div>
        <div>
          <p class="font-medium text-sm text-gray-600 text-end">
            {restaurant.specialities.length} specialities
          </p>
        </div>
      </div>
    </div>
  </div>
</a>
