	($.$pirates_camera) = class $pirates_camera extends ($.$mol_view) {
		event_wheel(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key(next){
			if(next !== undefined) return next;
			return null;
		}
		positionT(next){
			if(next !== undefined) return next;
			const obj = new this.$.$pirates_math_vector2(200, 100);
			return obj;
		}
		Test(){
			const obj = new this.$.$pirates_sprite();
			(obj.asset_pathname) = (next) => ("/pirates/assets/effects/explosion1.png");
			(obj.position) = (next) => ((this.positionT()));
			(obj.delta_time) = (next) => ((this.delta_time(next)));
			return obj;
		}
		Test2(){
			const obj = new this.$.$pirates_sprite();
			(obj.angle) = (next) => (1.4);
			(obj.delta_time) = (next) => ((this.delta_time(next)));
			return obj;
		}
		positionA(next){
			if(next !== undefined) return next;
			const obj = new this.$.$pirates_math_vector2(100, 100);
			return obj;
		}
		Test3(){
			const obj = new this.$.$pirates_ship();
			(obj.position) = (next) => ((this.positionA()));
			(obj.angle) = (next) => (2.3);
			(obj.delta_time) = (next) => ((this.delta_time(next)));
			return obj;
		}
		dom_name(){
			return "camera";
		}
		delta_time(next){
			if(next !== undefined) return next;
			return 1;
		}
		position(next){
			if(next !== undefined) return next;
			const obj = new this.$.$pirates_math_vector2();
			return obj;
		}
		zoom(next){
			if(next !== undefined) return next;
			return 1;
		}
		auto(){
			return [(this.update()), (this.log())];
		}
		event(){
			return {"wheel": (next) => (this.event_wheel(next)), "keydown": (next) => (this.event_key(next))};
		}
		sub(){
			return [
				(this.Test()), 
				(this.Test2()), 
				(this.Test3())
			];
		}
	};
	($mol_mem(($.$pirates_camera.prototype), "event_wheel"));
	($mol_mem(($.$pirates_camera.prototype), "event_key"));
	($mol_mem(($.$pirates_camera.prototype), "positionT"));
	($mol_mem(($.$pirates_camera.prototype), "Test"));
	($mol_mem(($.$pirates_camera.prototype), "Test2"));
	($mol_mem(($.$pirates_camera.prototype), "positionA"));
	($mol_mem(($.$pirates_camera.prototype), "Test3"));
	($mol_mem(($.$pirates_camera.prototype), "delta_time"));
	($mol_mem(($.$pirates_camera.prototype), "position"));
	($mol_mem(($.$pirates_camera.prototype), "zoom"));

//# sourceMappingURL=camera.view.tree.js.map