<script lang="ts">
	import type { Education } from "./components.types";
	import EducationItem from "./EducationItem.svelte";

let {items}: Education = $props()
</script>

<div>
<h2>Education</h2>
  {#each items as educationItem}
    <EducationItem {...educationItem}/>
  {/each}
</div>
