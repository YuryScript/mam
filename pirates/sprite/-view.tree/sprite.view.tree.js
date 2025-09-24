	($.$pirates_sprite) = class $pirates_sprite extends ($.$mol_view) {
		delta_time(next){
			if(next !== undefined) return next;
			return 1;
		}
		angle(next){
			if(next !== undefined) return next;
			return 0;
		}
		position(next){
			if(next !== undefined) return next;
			const obj = new this.$.$pirates_math_vector2();
			return obj;
		}
		asset_pathname(next){
			if(next !== undefined) return next;
			return "/pirates/assets/icons/flair_disabled_cross_outline.svg";
		}
		auto(){
			return [
				(this.update()), 
				(this.log()), 
				(this.onLoad())
			];
		}
	};
	($mol_mem(($.$pirates_sprite.prototype), "delta_time"));
	($mol_mem(($.$pirates_sprite.prototype), "angle"));
	($mol_mem(($.$pirates_sprite.prototype), "position"));
	($mol_mem(($.$pirates_sprite.prototype), "asset_pathname"));

//# sourceMappingURL=sprite.view.tree.js.map