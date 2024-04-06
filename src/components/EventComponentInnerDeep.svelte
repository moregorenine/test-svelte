<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function sayHello() {
    dispatch("clickedMsg", {
      text: "Hello from InnerDeep!",
    });
  }
</script>

<button on:click={sayHello}> Click to say hello from InnerDeep</button>
