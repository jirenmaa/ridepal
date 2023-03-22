<script>
  import 'leaflet/dist/leaflet.css'
  import '../app.css'

  import Wrapper from '../components/layout/Wrapper.svelte'
</script>

<main class="h-screen w-screen grid grid-cols-6 divide-x-2">
  <Wrapper />
  <slot />
</main>
