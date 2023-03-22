<script>
  export let total
  export let navigateTo

  import clsx from 'clsx'

  const buttonStyle = clsx(
    'h-full inline-flex bg-[#D3CCBF] bg-opacity-80',
    'transition ease-in-out duration-200 hover:bg-opacity-100',
    'px-16 py-8'
  )

  function changeTab(value) {
    navigateTo = value
  }
</script>

<div class="sticky top-0 h-24 w-full bg-white border-b-2 z-[99999]">
  <div class="h-24 flex items-center justify-end">
    <div class="px-8">
      <span class="text-lg text-gray-600">Total Order : ${total}</span>
    </div>
    <button
      class={clsx(buttonStyle, navigateTo == 1 && 'bg-opacity-100')}
      on:click={() => changeTab(1)}
    >
      <span class="font-medium text-lg text-gray-700 -mt-1">ORDERS</span>
    </button>
    <button
      class={clsx(buttonStyle, navigateTo == 2 && 'bg-opacity-100')}
      on:click={() => changeTab(2)}
    >
      <span class="font-medium text-lg text-gray-700 -mt-1">HISTORY</span>
    </button>
  </div>
</div>
<div class="flex flex-col space-y-4">
  <div class="space-y-2 py-16">
    <h1 class="font-bold capitalize text-gray-700 text-5xl px-8">
      Your <span class="invert">Order</span> and
      <span class="invert">Payment</span> History
    </h1>
    <p class="font-medium text-lg text-gray-600 px-8">
      Your orders are displayed here
    </p>
  </div>
</div>
