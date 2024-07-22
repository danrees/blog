<script lang="ts">
	import type { EducationItem } from "./components.types";

let {institution, credential, description, studyPeriod}: EducationItem = $props()
</script>

<div>
<div>{institution}</div>
  <div>{credential}</div>
  <div>{studyPeriod}</div>
  <div>{description}</div>
</div>
