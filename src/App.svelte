<script lang="ts">
  import { navigate } from "svelte-routing";
  import { type StudyResult, studyResults } from "./datas/StudyResults";

  function handleClick(result: StudyResult) {
    navigate(`/study-results/${result.id}`);
  }
</script>

<main>
  <h1>Welcome to moregore's Tech Blog!</h1>
  <h2>Study Results</h2>
  <div id="results">
    {#each studyResults as result (result.id)}
      <div>
        <button on:click={() => handleClick(result)} aria-label={result.title}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </button>
      </div>
    {/each}
  </div>
</main>

<style lang="scss">
  #results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
      padding: 5px;
      box-sizing: border-box;

      button {
        width: 300px;
      }
    }
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    margin-bottom: 5px;
  }
</style>
