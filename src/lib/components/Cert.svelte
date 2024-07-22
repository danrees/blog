<script lang="ts">
	import type { Certification } from "./components.types";

let {title, provider,  issued, expires}: Certification = $props()
</script>

<div>
  <div>{title}</div>
  <div>{provider}</div>
  <div>{issued} - {expires}</div>
</div>
