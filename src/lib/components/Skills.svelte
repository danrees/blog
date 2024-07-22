<script lang="ts">
	import type { Skills } from "./components.types";

let {skills}: Skills = $props()
</script>

<div>
<h2>Skills</h2>
  <ul>
  {#each skills as skill}
    <li>{skill}</li>
  {/each}
  </ul>
</div>
