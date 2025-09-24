	($.$pirates_ship) = class $pirates_ship extends ($.$pirates_sprite) {
		delta_time(next){
			if(next !== undefined) return next;
			return 1;
		}
		angle(next){
			if(next !== undefined) return next;
			return 0;
		}
	};
	($mol_mem(($.$pirates_ship.prototype), "delta_time"));
	($mol_mem(($.$pirates_ship.prototype), "angle"));

//# sourceMappingURL=ship.view.tree.js.map