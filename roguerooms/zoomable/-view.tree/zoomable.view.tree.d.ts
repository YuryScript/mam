declare namespace $ {

	type $mol_view__sub_roguerooms_zoomable_1 = $mol_type_enforce<
		ReturnType< $roguerooms_zoomable['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style_roguerooms_zoomable_2 = $mol_type_enforce<
		ReturnType< $roguerooms_zoomable['styleForZoomComponent'] >
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_button__click_roguerooms_zoomable_3 = $mol_type_enforce<
		ReturnType< $roguerooms_zoomable['zoomIn'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__title_roguerooms_zoomable_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__click_roguerooms_zoomable_5 = $mol_type_enforce<
		ReturnType< $roguerooms_zoomable['zoomOut'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__title_roguerooms_zoomable_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__click_roguerooms_zoomable_7 = $mol_type_enforce<
		ReturnType< $roguerooms_zoomable['reset'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__title_roguerooms_zoomable_8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_view__sub_roguerooms_zoomable_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $roguerooms_zoomable extends $mol_view {
		event_wheel( next?: any ): any
		event_key( next?: any ): any
		event_mouse_down( next?: any ): any
		event_mouse_move( next?: any ): any
		event_mouse_up( next?: any ): any
		ZoomComponent( ): $mol_view
		ZoomInButton( ): $mol_button
		ZoomOutButton( ): $mol_button
		ZoomReset( ): $mol_button
		Controls( ): $mol_view
		zoom( next?: number ): number
		position( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			wheel( next?: ReturnType< $roguerooms_zoomable['event_wheel'] > ): ReturnType< $roguerooms_zoomable['event_wheel'] >,
			keypress( next?: ReturnType< $roguerooms_zoomable['event_key'] > ): ReturnType< $roguerooms_zoomable['event_key'] >,
			mousedown( next?: ReturnType< $roguerooms_zoomable['event_mouse_down'] > ): ReturnType< $roguerooms_zoomable['event_mouse_down'] >,
			mousemove( next?: ReturnType< $roguerooms_zoomable['event_mouse_move'] > ): ReturnType< $roguerooms_zoomable['event_mouse_move'] >,
			mouseup( next?: ReturnType< $roguerooms_zoomable['event_mouse_up'] > ): ReturnType< $roguerooms_zoomable['event_mouse_up'] >,
		}) 
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=zoomable.view.tree.d.ts.map