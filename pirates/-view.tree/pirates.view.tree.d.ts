declare namespace $ {

	type $pirates_camera__delta_time_pirates_1 = $mol_type_enforce<
		ReturnType< $pirates['delta_time'] >
		,
		ReturnType< $pirates_camera['delta_time'] >
	>
	export class $pirates extends $mol_view {
		Camera( ): $pirates_camera
		delta_time( next?: number ): number
		time( next?: number ): number
		debug( next?: boolean ): boolean
		sub( ): readonly(any)[]
	}
	
	export class $pirates_block extends $mol_view {
	}
	
}

//# sourceMappingURL=pirates.view.tree.d.ts.map