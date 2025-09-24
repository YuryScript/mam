declare namespace $ {

	type $mol_view__sub_ys_zoomable_1 = $mol_type_enforce<
		ReturnType< $ys_zoomable['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style_ys_zoomable_2 = $mol_type_enforce<
		ReturnType< $ys_zoomable['styleForZoomComponent'] >
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_button__click_ys_zoomable_3 = $mol_type_enforce<
		ReturnType< $ys_zoomable['zoomIn'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__sub_ys_zoomable_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button['sub'] >
	>
	type $mol_button__click_ys_zoomable_5 = $mol_type_enforce<
		ReturnType< $ys_zoomable['zoomOut'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__sub_ys_zoomable_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button['sub'] >
	>
	type $mol_button__click_ys_zoomable_7 = $mol_type_enforce<
		ReturnType< $ys_zoomable['reset'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__sub_ys_zoomable_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button['sub'] >
	>
	type $mol_view__sub_ys_zoomable_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $ys_zoomable extends $mol_view {
		event_wheel( next?: any ): any
		event_key( next?: any ): any
		event_mouse_down( next?: any ): any
		event_mouse_up( next?: any ): any
		event_mouse_move( next?: any ): any
		event_mouse_leave( next?: any ): any
		styleForZoomComponent( ): any
		ZoomComponent( ): $mol_view
		zoomIn( next?: any ): any
		I( ): $mol_icon_magnify_plus_outline
		ZoomInButton( ): $mol_button
		zoomOut( next?: any ): any
		O( ): $mol_icon_magnify_minus_outline
		ZoomOutButton( ): $mol_button
		reset( next?: any ): any
		R( ): $mol_icon_backup_restore
		ZoomReset( ): $mol_button
		Controls( ): $mol_view
		zoom( next?: number ): number
		attr( ): ({ 
			'tabindex': number,
		}) 
		position( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			wheel( next?: ReturnType< $ys_zoomable['event_wheel'] > ): ReturnType< $ys_zoomable['event_wheel'] >,
			keypress( next?: ReturnType< $ys_zoomable['event_key'] > ): ReturnType< $ys_zoomable['event_key'] >,
			mousedown( next?: ReturnType< $ys_zoomable['event_mouse_down'] > ): ReturnType< $ys_zoomable['event_mouse_down'] >,
			mouseup( next?: ReturnType< $ys_zoomable['event_mouse_up'] > ): ReturnType< $ys_zoomable['event_mouse_up'] >,
			mousemove( next?: ReturnType< $ys_zoomable['event_mouse_move'] > ): ReturnType< $ys_zoomable['event_mouse_move'] >,
			mouseleave( next?: ReturnType< $ys_zoomable['event_mouse_leave'] > ): ReturnType< $ys_zoomable['event_mouse_leave'] >,
		}) 
		content( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=zoomable.view.tree.d.ts.map