<script>
	export let labelText;
	export let inputData;
</script>

<label class="label py-2">
	<span class="label-text">{labelText}</span>
	<input class="input" type="text" bind:value={inputData} />
</label>
