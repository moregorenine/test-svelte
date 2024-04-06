<script lang="ts">
  import { get } from "svelte/store";
  import Thing from "../components/LogicThing.svelte";
  let things = [
    { id: 1, color: "darkblue" },
    { id: 2, color: "indigo" },
    { id: 3, color: "deeppink" },
    { id: 4, color: "salmon" },
    { id: 5, color: "gold" },
  ];
  function handleClick() {
    things = things.slice(1);
  }

  let promise = getRandomNumber();

  function getRandomNumber() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const min = 1;
        const max = 100;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const failNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        if (failNumber <= 70) {
          return resolve(randomNumber);
        } else {
          return reject(new Error("Failed to generate a random number"));
        }
      }, 1000); // 2초 지연
    });
  }

  function handleAwaitClick() {
    promise = getRandomNumber();
  }
</script>

<h2>Logic</h2>
<section>
  <hr />

  <h2>Keyed each blocks</h2>
  <ul>
    <li>
      Keyed Each는 리스트의 아이템이 변경될 때 각 아이템을 정확하게 추적하고,
      최소한의 DOM 변경으로 뷰를 업데이트합니다. 이 방식은 성능 최적화에
      유리하며, 아이템의 순서 변경이나 선택적 업데이트가 필요한 경우에
      적합합니다.
    </li>
    <li>
      Unkeyed Each는 간단한 리스트에 적합하며, 아이템의 추가나 삭제가 리스트
      전체의 재렌더링을 유발할 수 있습니다. 이 방식은 구현이 더 간단하지만,
      복잡한 리스트의 경우 성능 저하를 초래할 수 있습니다.
    </li>
  </ul>

  <button on:click={handleClick}>Remove first thing</button>
  <div class="row">
    <div>
      <h3>Keyed</h3>
      {#each things as thing (thing.id)}
        <Thing current={thing.color} />
      {/each}
    </div>

    <div>
      <h3>Unkeyed</h3>
      {#each things as thing}
        <Thing current={thing.color} />
      {/each}
    </div>
  </div>

  <hr />

  <h2>Await blocks</h2>
  <ul>
    <li>
      비동기 데이터 페칭과 화면 렌더링 로직을 나타냅니다. 사용자가 버튼을
      클릭하면 서버에서 랜덤한 숫자를 가져와 화면에 표시합니다.
    </li>
  </ul>
  <p>70% 확률로 랜덤 숫자 생성</p>
  <button on:click={handleAwaitClick}>generate random number</button>
  {#await promise}
    <p>...waiting</p>
  {:then number}
    <p>The number is {number}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</section>

<style lang="scss">
  section {
    text-align: left;
  }

  .row {
    display: flex;
    div {
      padding-right: 50px;
    }
  }
</style>
