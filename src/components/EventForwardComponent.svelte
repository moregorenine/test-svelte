<script lang="ts">
  import Outer from "./EventForwardComponentOuter.svelte";

  function handleMessage(event: any) {
    alert(event.detail.text);
  }
</script>

<Outer on:message={handleMessage} />
