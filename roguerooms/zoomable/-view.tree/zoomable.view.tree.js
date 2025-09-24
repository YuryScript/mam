	($.$roguerooms_zoomable) = class $roguerooms_zoomable extends ($.$mol_view) {
		event_wheel(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key(next){
			if(next !== undefined) return next;
			return null;
		}
		event_mouse_down(next){
			if(next !== undefined) return next;
			return null;
		}
		event_mouse_move(next){
			if(next !== undefined) return next;
			return null;
		}
		event_mouse_up(next){
			if(next !== undefined) return next;
			return null;
		}
		ZoomComponent(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.content()));
			(obj.style) = () => ((this.styleForZoomComponent()));
			return obj;
		}
		ZoomInButton(){
			const obj = new this.$.$mol_button();
			(obj.click) = (next) => ((this.zoomIn()));
			(obj.title) = () => ("+");
			return obj;
		}
		ZoomOutButton(){
			const obj = new this.$.$mol_button();
			(obj.click) = (next) => ((this.zoomOut()));
			(obj.title) = () => ("-");
			return obj;
		}
		ZoomReset(){
			const obj = new this.$.$mol_button();
			(obj.click) = (next) => ((this.reset()));
			(obj.title) = () => ("=");
			return obj;
		}
		Controls(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.ZoomInButton()), 
				(this.ZoomOutButton()), 
				(this.ZoomReset())
			]);
			return obj;
		}
		zoom(next){
			if(next !== undefined) return next;
			return 1;
		}
		position(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		event(){
			return {
				"wheel": (next) => (this.event_wheel(next)), 
				"keypress": (next) => (this.event_key(next)), 
				"mousedown": (next) => (this.event_mouse_down(next)), 
				"mousemove": (next) => (this.event_mouse_move(next)), 
				"mouseup": (next) => (this.event_mouse_up(next))
			};
		}
		sub(){
			return [(this.ZoomComponent()), (this.Controls())];
		}
	};
	($mol_mem(($.$roguerooms_zoomable.prototype), "event_wheel"));
	($mol_mem(($.$roguerooms_zoomable.prototype), "event_key"));
	($mol_mem(($.$roguerooms_zoomable.prototype), "event_mouse_down"));
	($mol_mem(($.$roguerooms_zoomable.prototype), "event_mouse_move"));
	($mol_mem(($.$roguerooms_zoomable.prototype), "event_mouse_up"));
	($mol_mem(($.$roguerooms_zoomable.prototype), "ZoomComponent"));
	($mol_mem(($.$roguerooms_zoomable.prototype), "ZoomInButton"));
	($mol_mem(($.$roguerooms_zoomable.prototype), "ZoomOutButton"));
	($mol_mem(($.$roguerooms_zoomable.prototype), "ZoomReset"));
	($mol_mem(($.$roguerooms_zoomable.prototype), "Controls"));
	($mol_mem(($.$roguerooms_zoomable.prototype), "zoom"));
	($mol_mem(($.$roguerooms_zoomable.prototype), "position"));

//# sourceMappingURL=zoomable.view.tree.js.map