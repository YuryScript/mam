	($.$ys_omc) = class $ys_omc extends ($.$mol_view) {
		zoom(next){
			if(next !== undefined) return next;
			return 1;
		}
		pan(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		Touch(){
			const obj = new this.$.$mol_touch();
			(obj.zoom) = (next) => ((this.zoom(next)));
			(obj.pan) = (next) => ((this.pan(next)));
			return obj;
		}
		Chunk(){
			const obj = new this.$.$ys_omc_chunk();
			return obj;
		}
		plugins(){
			return [(this.Touch())];
		}
		sub(){
			return [(this.Chunk())];
		}
	};
	($mol_mem(($.$ys_omc.prototype), "zoom"));
	($mol_mem(($.$ys_omc.prototype), "pan"));
	($mol_mem(($.$ys_omc.prototype), "Touch"));
	($mol_mem(($.$ys_omc.prototype), "Chunk"));

//# sourceMappingURL=omc.view.tree.js.map