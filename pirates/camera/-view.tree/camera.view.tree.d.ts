declare namespace $ {

	type $pirates_math_vector2__pirates_camera_1 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $pirates_math_vector2 >
	>
	type $pirates_sprite__asset_pathname_pirates_camera_2 = $mol_type_enforce<
		string
		,
		ReturnType< $pirates_sprite['asset_pathname'] >
	>
	type $pirates_sprite__position_pirates_camera_3 = $mol_type_enforce<
		ReturnType< $pirates_camera['positionT'] >
		,
		ReturnType< $pirates_sprite['position'] >
	>
	type $pirates_sprite__delta_time_pirates_camera_4 = $mol_type_enforce<
		ReturnType< $pirates_camera['delta_time'] >
		,
		ReturnType< $pirates_sprite['delta_time'] >
	>
	type $pirates_sprite__angle_pirates_camera_5 = $mol_type_enforce<
		number
		,
		ReturnType< $pirates_sprite['angle'] >
	>
	type $pirates_sprite__delta_time_pirates_camera_6 = $mol_type_enforce<
		ReturnType< $pirates_camera['delta_time'] >
		,
		ReturnType< $pirates_sprite['delta_time'] >
	>
	type $pirates_math_vector2__pirates_camera_7 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $pirates_math_vector2 >
	>
	type $pirates_ship__position_pirates_camera_8 = $mol_type_enforce<
		ReturnType< $pirates_camera['positionA'] >
		,
		ReturnType< $pirates_ship['position'] >
	>
	type $pirates_ship__angle_pirates_camera_9 = $mol_type_enforce<
		number
		,
		ReturnType< $pirates_ship['angle'] >
	>
	type $pirates_ship__delta_time_pirates_camera_10 = $mol_type_enforce<
		ReturnType< $pirates_camera['delta_time'] >
		,
		ReturnType< $pirates_ship['delta_time'] >
	>
	export class $pirates_camera extends $mol_view {
		event_wheel( next?: any ): any
		event_key( next?: any ): any
		positionT( next?: $pirates_math_vector2 ): $pirates_math_vector2
		Test( ): $pirates_sprite
		Test2( ): $pirates_sprite
		positionA( next?: $pirates_math_vector2 ): $pirates_math_vector2
		Test3( ): $pirates_ship
		dom_name( ): string
		delta_time( next?: number ): number
		position( next?: $pirates_math_vector2 ): $pirates_math_vector2
		zoom( next?: number ): number
		auto( ): readonly(any)[]
		event( ): ({ 
			wheel( next?: ReturnType< $pirates_camera['event_wheel'] > ): ReturnType< $pirates_camera['event_wheel'] >,
			keydown( next?: ReturnType< $pirates_camera['event_key'] > ): ReturnType< $pirates_camera['event_key'] >,
		}) 
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=camera.view.tree.d.ts.map