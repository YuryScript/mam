declare namespace $ {

	export class $roguerooms extends $mol_view {
		Theme( ): $mol_theme_auto
		Header( ): $roguerooms_header
		Inventory( ): $roguerooms_inventory
		Blueprint( ): $roguerooms_blueprint
		Options( ): $roguerooms_options
		plugins( ): readonly(any)[]
		debug( next?: boolean ): boolean
		sub( ): readonly(any)[]
	}
	
	type $mol_paragraph__line_height_roguerooms_header_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_paragraph['line_height'] >
	>
	type $mol_paragraph__title_roguerooms_header_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	export class $roguerooms_header extends $mol_view {
		Title( ): $mol_paragraph
		sub( ): readonly(any)[]
	}
	
	export class $roguerooms_inventory extends $mol_view {
		sub( ): readonly(any)[]
	}
	
	export class $roguerooms_blueprint extends $roguerooms_zoomable {
		cursor( next?: readonly(any)[] ): readonly(any)[]
		selected_path( next?: any ): any
		content( ): readonly(any)[]
	}
	
	export class $roguerooms_options extends $mol_view {
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=roguerooms.view.tree.d.ts.map