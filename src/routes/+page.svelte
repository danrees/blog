<script lang="ts">
	import Info from "$lib/components/Info.svelte";

  import {myInfo} from "$lib/components/testData"
</script>

<Info {...myInfo.info}/>
