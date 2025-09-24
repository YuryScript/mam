declare namespace $ {

	type $mol_touch__zoom_ys_omc_1 = $mol_type_enforce<
		ReturnType< $ys_omc['zoom'] >
		,
		ReturnType< $mol_touch['zoom'] >
	>
	type $mol_touch__pan_ys_omc_2 = $mol_type_enforce<
		ReturnType< $ys_omc['pan'] >
		,
		ReturnType< $mol_touch['pan'] >
	>
	export class $ys_omc extends $mol_view {
		zoom( next?: number ): number
		pan( next?: readonly(any)[] ): readonly(any)[]
		Touch( ): $mol_touch
		Chunk( ): $ys_omc_chunk
		plugins( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=omc.view.tree.d.ts.map