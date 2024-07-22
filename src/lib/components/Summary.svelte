<script lang="ts">
import {type Summary} from "./components.types"
let {accomplishments}: Summary = $props()
</script>

<div>
<h2>Summary</h2>
  <ul>
    {#each accomplishments as acc}
      <li>{acc}</li>
    {/each}
  </ul>
</div>
