<script lang="ts">
  import { studyResults } from "./datas/StudyResults";
  import { Link } from "svelte-routing";
</script>

<h2>Study Results</h2>
<div id="results">
  {#each studyResults as result (result.id)}
    <Link to={result.path}>
      <!-- <Link to={`${result.path}/${result.title}`}> -->
      <div>
        <button>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </button>
      </div>
    </Link>
  {/each}
</div>

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
        height: 125px;
      }
    }
  }

  p {
    font-size: 14px;
    margin-bottom: 5px;
  }
</style>
