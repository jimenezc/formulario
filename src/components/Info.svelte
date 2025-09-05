<script>
	import GroupInput from '$lib/GroupInput.svelte';
	let { enterpriseInfo, nextPage } = $props();
</script>

<div class="mx-auto h-screen w-full max-w-md space-y-4">
	<div class="py-2">
		<h2 class="text-lg font-bold sm:truncate sm:tracking-tight">
			Sección 1: Información general de la empresa
		</h2>
	</div>
	<div class="text-left">
		<GroupInput labelText="Nombre de la empresa" bind:inputData={enterpriseInfo.name} />
		<GroupInput
			labelText="Tamaño (número de empleados)"
			bind:inputData={enterpriseInfo.employNumber}
		/>
		<GroupInput labelText="Años de operación" bind:inputData={enterpriseInfo.yearsActive} />
		<GroupInput
			labelText="¿Exporta actualmente? (Sí / No)"
			bind:inputData={enterpriseInfo.isExporting}
		/>
		<GroupInput
			labelText="¿Cuenta con certificaciones en RSE o sostenibilidad? (Sí / No / ¿Cuáles?)"
			bind:inputData={enterpriseInfo.isCertified}
		/>
		<GroupInput
			labelText="Sector a que pertenece la empresa"
			bind:inputData={enterpriseInfo.sector}
		/>
		<button
			type="button"
			class="rounded bg-purple-500 px-4 py-2 text-lg font-bold text-white hover:bg-purple-700"
			onclick={nextPage}
		>
			<span>Siguiente</span>
		</button>
	</div>
</div>
