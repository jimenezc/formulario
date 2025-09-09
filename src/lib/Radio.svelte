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
						class="radio bg-white checked:bg-blue-700 hover:bg-blue-500 checked:hover:bg-blue-700 focus:bg-blue-500 checked:focus:bg-blue-700"
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
