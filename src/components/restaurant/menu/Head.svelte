<script>
  export let resturantName
  export let resturantDescription
</script>

<div
  class="sticky top-0 flex flex-col bg-white border-b-2 space-y-2 px-8 py-16 z-[9999]"
>
  <h1 class="font-bold  text-5xl">
    <span class="capitalize text-gray-500 invert ">
      {resturantName}
    </span>
    <span class="text-gray-800">Restaurant</span>
  </h1>
  <h3 class="font-medium text-lg text-gray-600">
    {resturantDescription}
  </h3>
</div>
