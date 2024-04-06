<script lang="ts">
  import EventComponent from "../components/EventComponent.svelte";
  import EventFowardComponent from "../components/EventForwardComponent.svelte";
</script>

<h2>Event</h2>
<section>
  <hr />

  <h2>Component events</h2>
  <ul>
    <li>
      1. 컴포넌트의 독립성 자식 컴포넌트가 createEventDispatcher를 사용하여 자체
      이벤트를 발생시키는 방식을 통해, 자식 컴포넌트는 부모 컴포넌트의 구체적인
      구현 세부사항을 몰라도 됩니다. 즉, 자식 컴포넌트는 단지 이벤트를
      발생시키기만 하면 되며, 이 이벤트를 누가, 어떻게 처리할지에 대해서는 신경
      쓸 필요가 없습니다. 이는 컴포넌트의 결합도를 낮추고, 각 컴포넌트를 더
      독립적으로 만들어 줍니다.
    </li>
    <li>
      2. 재사용성 향상 이벤트 기반 통신을 사용하면 자식 컴포넌트를 다양한
      상황에서 재사용할 수 있게 됩니다. 자식 컴포넌트가 어떤 특정 부모
      컴포넌트에 강하게 결합되지 않기 때문에, 다른 부모 컴포넌트에서도 동일한
      자식 컴포넌트를 사용할 수 있습니다. 이는 또한 대규모 애플리케이션의
      유지보수성과 확장성을 향상시킵니다.
    </li>
    <li>
      3. 명시적인 데이터 흐름 이벤트 기반 통신은 데이터의 흐름을 명시적으로
      만듭니다. 자식 컴포넌트에서 발생한 이벤트가 부모 컴포넌트로 전달되는
      과정은 코드를 통해 명확하게 볼 수 있으며, 이는 디버깅과 코드 이해를 쉽게
      합니다.
    </li>
    <li>
      4. 유연한 이벤트 처리 부모 컴포넌트가 자식 컴포넌트로부터 발생한 이벤트를
      어떻게 처리할지를 결정할 수 있습니다. 같은 이벤트라도 다른 부모
      컴포넌트에서는 다른 방식으로 처리될 수 있으며, 이는 애플리케이션의 다양한
      요구사항을 충족시킬 수 있는 유연성을 제공합니다. 이처럼, Svelte에서의
      이벤트 기반 통신 방식은 컴포넌트의 재사용성과 유지보수성을 높이면서,
      애플리케이션의 복잡성을 관리할 수 있는 효과적인 방법을 제공합니다.
    </li>
  </ul>
  <EventComponent />

  <hr />

  <h2>Event forwarding</h2>
  <ul>
    <li>
      이벤트 포워딩 기능을 활용하여, 여러 컴포넌트 계층을 통해 이벤트를 전달하는
      방법을 보여줍니다. 이를 통해 컴포넌트 간의 결합도를 낮추면서도, 필요한
      정보를 효과적으로 전달할 수 있습니다.
    </li>
  </ul>
  <EventFowardComponent />
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
