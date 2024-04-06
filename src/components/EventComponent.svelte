<script lang="ts">
  import Inner from "./EventComponentInner.svelte";
  import InnerDeep from "./EventComponentInnerDeep.svelte";

  function handleMessage(event: any) {
    alert(event.detail.text);
  }

  function handleClickedMsg(event: any) {
    alert(event.detail.text);
  }
</script>

<Inner on:message={handleMessage} />
<InnerDeep on:clickedMsg={handleClickedMsg} />
