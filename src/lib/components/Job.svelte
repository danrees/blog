<script lang="ts">
	import type { Job } from "./components.types";


let {emplorer, jobTitle, periodEmployed, accomplishments}: Job = $props()
</script>


<div>
  <div>{jobTitle}</div>
  <div>{emplorer}</div>
  <div>{periodEmployed.start} - {periodEmployed.end}</div>
  <div>
<ul>
      {#each accomplishments as accomplishment}
        <li>{accomplishment}</li>
      {/each}
    </ul>
  </div>
</div>
