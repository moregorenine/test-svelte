<script lang="ts">
  let count1 = 0;
  $: double = count1 * 2;
  $: quadrupled = double * 2;

  let count2 = 0;
  $: if (count2 >= 10) {
    alert("count is dangerously high!");
    count2 = 9;
  }
</script>

<h2>Reactive</h2>
<section>
  <hr />

  <h2>Reactive declarations</h2>
  <button
    on:click={() => {
      count1++;
    }}>{count1}</button
  >
  <p>count's double = {double}</p>
  <p>count's quadrupled = {quadrupled}</p>

  <hr />

  <h2>Reactive statements</h2>
  <p>
    버튼 클릭이 10이상일 경우 <strong
      >"count is dangerously high!" 문구 출력</strong
    >
  </p>
  <button
    on:click={() => {
      count2++;
    }}>Clicked {count2} {count2 === 1 ? "time" : "times"}</button
  >
</section>

<style lang="scss">
  section {
    text-align: left;
  }
</style>
