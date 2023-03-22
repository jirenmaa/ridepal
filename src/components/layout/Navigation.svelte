<script>
  import NavItem from './NavItem.svelte'
  import CartCounter from './CartCounter.svelte'
</script>

<div class="h-full w-full grid place-items-center mx-auto">
  <div class="grid grid-cols-2 gap-6">
    <NavItem
      path="/ridepal"
      theme="bg-lime"
      icon="/icons/map.png"
      helper="マップ"
    />
    <NavItem
      path="/restaurant"
      theme="bg-jasmine"
      icon="/icons/food.png"
      helper="食べ物"
    />
    <NavItem
      path="/payments"
      theme="bg-rose"
      icon="/icons/payment.png"
      helper="支払い"
    >
      <CartCounter />
    </NavItem>
    <NavItem
      path="/"
      theme="bg-silver"
      icon="/icons/qmark.png"
      helper="うーん"
    />
  </div>
</div>
