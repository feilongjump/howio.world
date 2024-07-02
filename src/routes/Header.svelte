<script>
  import Home from '$lib/svg/Home.svelte'
</script>

<header>
  <h1 class="font-bold cursor-pointer">How IO</h1>
  <nav>
    <ul class="flex gap-x-4 text-sm">
      <li class="flex flex-col justify-center items-center">
        <div class="w-5 h-5"><Home /></div>
        <span class="border-b-2 font-semibold">Home</span>
      </li>
    </ul>
  </nav>
  <div class="flex gap-x-4">
    <label class="swap swap-flip">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" data-toggle-theme="night" />

      <div class="swap-on btn btn-sm btn-ghost btn-circle">🌞</div>
      <div class="swap-off rotate-90 btn btn-sm btn-ghost btn-circle">🌙</div>
    </label>

    <button class="btn btn-outline btn-sm btn-primary">登录</button>
    <button class="btn btn-outline btn-sm btn-accent">注册</button>
  </div>
</header>

<style>
  header {
    height: var(--header-h);
    @apply w-dvw px-2 md:px-8 flex items-center justify-between;
  }
</style>
