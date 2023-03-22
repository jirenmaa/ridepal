<script>
  export let menu
  export let id
  export let noAction

  import clsx from 'clsx'

  import CardImage from './CardImage.svelte'
  import CardInfo from './CardInfo.svelte'
</script>

<div
  class={clsx(
    'w-72 h-96 max-h-96',
    'border-2 rounded-lg',
    'transition ease-in-out duration-300 hover:bg-jasmine hover:bg-opacity-20'
  )}
>
  <div class="h-full flex flex-col justify-between">
    <CardImage photo={menu.photo} isSpecialtyMenu={menu.photo} />
    <CardInfo {menu} {id} {noAction} />
  </div>
</div>
