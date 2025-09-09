<script>
	import Radio from '$lib/Radio.svelte';

	export let questions;
	export let dimensionTitle;
	export let aiInputText;
	export let level;

	export let buttonA;
	export let buttonB;

	let dimension = '';

	function makeAIInput() {
		let recomendations = '';
		let aiInput = '';
		questions.forEach((question) => {
			level += question.answer * 5;
			if (question.answer < 3) {
				recomendations = recomendations + question.aiInput;
			}
		});

		if (recomendations) {
			let dimensionInput = dimensionTitle;
			let dimensionText = '';
			if (dimension) {
				dimensionText = 'Esta dimension se aplica de la siguiente manera:' + dimension + '. ';
			}
			aiInput =
				dimensionInput +
				dimensionText +
				'Dada toda esa informacion conteste lo siguiente: ' +
				recomendations;
		}
		aiInputText = aiInput;
		buttonB.buttonFunc();
	}
</script>

<div class="h-screen w-full p-4">
	<slot></slot>
	<form class="mx-auto h-screen w-full max-w-md space-y-4">
		<h2 class="text-lg">{dimensionTitle}</h2>
		<Radio bind:questions />
		<label class="label py-2">
			<span class="label-text">{'Mencione de que manera aplica esta dimension en la empresa'}</span>
			<input class="input" type="text" bind:value={dimension} />
		</label>
		<button
			type="button"
			class="rounded bg-blue-500 px-4 py-2 text-lg font-bold text-white hover:bg-blue-700"
			onclick={buttonA.buttonFunc}
		>
			<span>{buttonA.text}</span>
		</button>
		<button
			type="button"
			class="rounded bg-blue-500 px-4 py-2 text-lg font-bold text-white hover:bg-blue-700"
			onclick={makeAIInput}
		>
			<span>{buttonB.text}</span>
		</button>
	</form>
</div>
