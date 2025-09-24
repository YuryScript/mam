declare namespace $ {

	type $ys_omc__style_ys_main_demo_1 = $mol_type_enforce<
		({ 
			'min-width': string,
		}) 
		,
		ReturnType< $ys_omc['style'] >
	>
	type $mol_page__title_ys_main_demo_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__body_ys_main_demo_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__style_ys_main_demo_4 = $mol_type_enforce<
		({ 
			'min-width': string,
		}) 
		,
		ReturnType< $mol_page['style'] >
	>
	type $ys_theme_nes_demo__title_ys_main_demo_5 = $mol_type_enforce<
		string
		,
		ReturnType< $ys_theme_nes_demo['title'] >
	>
	type $ys_theme_win7_demo__title_ys_main_demo_6 = $mol_type_enforce<
		string
		,
		ReturnType< $ys_theme_win7_demo['title'] >
	>
	type $ys_zoomable__content_ys_main_demo_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $ys_zoomable['content'] >
	>
	type $mol_page__title_ys_main_demo_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__body_ys_main_demo_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_page__title_ys_main_demo_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__body_ys_main_demo_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	export class $ys_main_demo extends $mol_book2_catalog {
		Theme( ): $mol_theme_auto
		Lighter( ): $mol_lights_toggle
		Omc_demo( ): $ys_omc
		Body( ): readonly(any)[]
		Page_demo( ): $mol_page
		Nes_demo( ): $ys_theme_nes_demo
		Win7_demo( ): $ys_theme_win7_demo
		Zoomable_instance( ): $ys_zoomable
		Zoomable_demo( ): $mol_page
		MathDarts_instance( ): $ys_mathDarts
		MathDarts_demo( ): $mol_page
		plugins( ): readonly(any)[]
		menu_title( ): string
		menu_tools( ): readonly(any)[]
		spreads( ): ({ 
			'omc_demo': ReturnType< $ys_main_demo['Omc_demo'] >,
			'page_demo': ReturnType< $ys_main_demo['Page_demo'] >,
			'nes_demo': ReturnType< $ys_main_demo['Nes_demo'] >,
			'win7_demo': ReturnType< $ys_main_demo['Win7_demo'] >,
			'zoomable_demo': ReturnType< $ys_main_demo['Zoomable_demo'] >,
			'mathDarts_demo': ReturnType< $ys_main_demo['MathDarts_demo'] >,
		}) 
	}
	
	export class $ys_main extends $ys_main_demo {
	}
	
}

//# sourceMappingURL=ys.view.tree.d.ts.map