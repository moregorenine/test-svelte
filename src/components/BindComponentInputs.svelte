<script lang="ts">
  // Text inputs
  let name = "";

  // Number inputs
  let number1 = 1;
  let number2 = 2;

  // Checkbox inputs
  let isChecked = false;

  // Select bindings
  let questions = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];
  let selected: any;
  let answer = "";

  function handleSubmit() {
    alert(
      `answered question ${selected.id} (${selected.text}) with "${answer}"`
    );
  }
</script>

<section>
  <hr />

  <h2>Text inputs</h2>
  <input bind:value={name} placeholder="enter your name" />
  <p>Hello {name || "stranger"}!</p>

  <hr />

  <h2>Number inputs</h2>
  <label>
    <input type="number" bind:value={number1} min="0" max="10" />
    <input type="range" bind:value={number1} min="0" max="10" />
  </label>
  <br />
  <label>
    <input type="number" bind:value={number2} min="0" max="10" />
    <input type="range" bind:value={number2} min="0" max="10" />
  </label>
  <p>{number1} + {number2} = {number1 + number2}</p>

  <hr />

  <h2>Checkbox inputs</h2>
  <label>
    <input type="checkbox" bind:checked={isChecked} /> Yes! Send me regular email
    spam
  </label>
  {#if isChecked}
    <p>Thank you. We will bombard your inbox and sell your personal details.</p>
  {:else}
    <p>
      You must opt-in to continue. If you're not paying, you're the product.
    </p>
  {/if}
  <button disabled={!isChecked}>Subscribe</button>

  <hr />

  <h2>Select bindings</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <select bind:value={selected} on:change={() => (answer = "")}>
      {#each questions as question}
        <option value={question}>
          {question.text}
        </option>
      {/each}
    </select>
    <input bind:value={answer} />
    <button disabled={!answer} type="submit"> Submit </button>
  </form>
</section>

<style lang="scss">
  section {
    text-align: left;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    select,
    input,
    button {
      margin: 2px;
      width: auto;
    }
  }
</style>
