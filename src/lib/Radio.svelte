<script>
	export let questions;
</script>

{#each questions as question}
	<div>
		<label for="">{question.title}</label>
		{#each question.options as option (option.value)}
			<div>
				<label>
					<input
						class="radio bg-white checked:bg-purple-700 hover:bg-purple-500 checked:hover:bg-purple-700 focus:bg-purple-500 checked:focus:bg-purple-700"
						type="radio"
						name={question.id}
						value={option.value}
						onchange={() => (question.answer = option.value)}
						checked={question.answer == option.value}
					/>
					{option.title}
				</label>
			</div>
		{/each}
	</div>
{/each}
