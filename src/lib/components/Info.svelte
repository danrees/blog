<script lang="ts">
	import { type Info } from './components.types';
	let { name, email, linkedinURL }: Info = $props();
</script>

<div>
	<div>
		{name}
	</div>
	<div>
		{email}
	</div>
	<div>{linkedinURL}</div>
</div>
