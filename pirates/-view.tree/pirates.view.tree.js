	($.$pirates) = class $pirates extends ($.$mol_view) {
		Camera(){
			const obj = new this.$.$pirates_camera();
			(obj.delta_time) = (next) => ((this.delta_time(next)));
			return obj;
		}
		delta_time(next){
			if(next !== undefined) return next;
			return 1;
		}
		time(next){
			if(next !== undefined) return next;
			return 0;
		}
		debug(next){
			if(next !== undefined) return next;
			return true;
		}
		sub(){
			return [(this.Camera())];
		}
	};
	($mol_mem(($.$pirates.prototype), "Camera"));
	($mol_mem(($.$pirates.prototype), "delta_time"));
	($mol_mem(($.$pirates.prototype), "time"));
	($mol_mem(($.$pirates.prototype), "debug"));
	($.$pirates_block) = class $pirates_block extends ($.$mol_view) {};

//# sourceMappingURL=pirates.view.tree.js.map