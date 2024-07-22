<script lang="ts">
	import type { Experience } from "./components.types";
	import Job from "./Job.svelte";

let {jobs}: Experience = $props()
</script>

<div>
  <h2>Experience</h2>
  {#each jobs as job}
   <Job {...job}/> 
{/each}
</div>
