<template>
  <main>
    <div class="content">
      <div class="container">
        <h1 class="content-title txtcenter">The page could not be found.</h1>
        <div class="container container--small">
          <p>Well, stuff can go wrong sometimes and maybe you mistyped a URL, tapped/clicked on a broken link or your computer just wants to drive you nuts. Anyway … keep calm and take a look at our beautiful homepage instead.</p>
          <div class="txtcenter mt3">
            <n-link class="btn btn--primary" to="/">Go back to homepage</n-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
