<script>
  export let path
  export let theme
  export let icon
  export let helper

  import { page } from '$app/stores'
  import clsx from 'clsx'

  import IconWrapper from '../shared/Icons.svelte'

  const ItemActive = (path, current) => path.includes(current) && 'rounded-xl'
</script>

<a
  data-sveltekit-preload-data="tap"
  href={path}
  class={clsx(
    theme,
    'w-52 h-52 cursor-pointer bg-opacity-80 transition ease-in-out duration-300 hover:bg-opacity-90 p-4',
    ItemActive($page.url.pathname, path)
  )}
>
  <IconWrapper>
    <img src={icon} alt="" class="transform scale-75" />
    <div class="text-center">
      <span class="font-medium text-gray-700">{helper}</span>
    </div>
    <slot />
  </IconWrapper>
</a>
