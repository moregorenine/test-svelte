<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";
  import Index from "./Index.svelte";
  import Reactive from "./routes/Reactive.svelte";
  import Logic from "./routes/Logic.svelte";
  import Event from "./routes/Event.svelte";
  import Bind from "./routes/Bind.svelte";

  export let url = "";
</script>

<Router {url}>
  <main>
    <Link to="/test-svelte"><h1>moregorenine's svelte Blog!</h1></Link>
    <Route path="/test-svelte" component={Index} />
    <Route path="/reactive" component={Reactive} />
    <Route path="/logic" component={Logic} />
    <Route path="/event" component={Event} />
    <Route path="/bind" component={Bind} />
    <!-- <Route path="/basic-syntax/:title" let:params
      ><BasicSyntax title={params.title} /></Route
    > -->
    <Route path="/" />
  </main>
</Router>

<style lang="scss">
</style>
