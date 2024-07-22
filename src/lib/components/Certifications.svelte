<script lang="ts">
	import Cert from "./Cert.svelte";
	import type { LicensesCertifications } from "./components.types";

let {certifications}: LicensesCertifications = $props()
</script>

<div>
  <h2>Licesnses and Certifications</h2>
  {#each certifications as cert}
    <Cert {...cert} />
    
  {/each}
</div>
