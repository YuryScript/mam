	($.$ys_zoomable) = class $ys_zoomable extends ($.$mol_view) {
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
		event_mouse_up(next){
			if(next !== undefined) return next;
			return null;
		}
		event_mouse_move(next){
			if(next !== undefined) return next;
			return null;
		}
		event_mouse_leave(next){
			if(next !== undefined) return next;
			return null;
		}
		styleForZoomComponent(){
			return null;
		}
		ZoomComponent(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.content()));
			(obj.style) = () => ((this.styleForZoomComponent()));
			return obj;
		}
		zoomIn(next){
			if(next !== undefined) return next;
			return null;
		}
		I(){
			const obj = new this.$.$mol_icon_magnify_plus_outline();
			return obj;
		}
		ZoomInButton(){
			const obj = new this.$.$mol_button();
			(obj.click) = (next) => ((this.zoomIn()));
			(obj.sub) = () => ([(this.I())]);
			return obj;
		}
		zoomOut(next){
			if(next !== undefined) return next;
			return null;
		}
		O(){
			const obj = new this.$.$mol_icon_magnify_minus_outline();
			return obj;
		}
		ZoomOutButton(){
			const obj = new this.$.$mol_button();
			(obj.click) = (next) => ((this.zoomOut()));
			(obj.sub) = () => ([(this.O())]);
			return obj;
		}
		reset(next){
			if(next !== undefined) return next;
			return null;
		}
		R(){
			const obj = new this.$.$mol_icon_backup_restore();
			return obj;
		}
		ZoomReset(){
			const obj = new this.$.$mol_button();
			(obj.click) = (next) => ((this.reset()));
			(obj.sub) = () => ([(this.R())]);
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
		attr(){
			return {"tabindex": 0};
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
				"mouseup": (next) => (this.event_mouse_up(next)), 
				"mousemove": (next) => (this.event_mouse_move(next)), 
				"mouseleave": (next) => (this.event_mouse_leave(next))
			};
		}
		content(){
			return [];
		}
		sub(){
			return [(this.ZoomComponent()), (this.Controls())];
		}
	};
	($mol_mem(($.$ys_zoomable.prototype), "event_wheel"));
	($mol_mem(($.$ys_zoomable.prototype), "event_key"));
	($mol_mem(($.$ys_zoomable.prototype), "event_mouse_down"));
	($mol_mem(($.$ys_zoomable.prototype), "event_mouse_up"));
	($mol_mem(($.$ys_zoomable.prototype), "event_mouse_move"));
	($mol_mem(($.$ys_zoomable.prototype), "event_mouse_leave"));
	($mol_mem(($.$ys_zoomable.prototype), "ZoomComponent"));
	($mol_mem(($.$ys_zoomable.prototype), "zoomIn"));
	($mol_mem(($.$ys_zoomable.prototype), "I"));
	($mol_mem(($.$ys_zoomable.prototype), "ZoomInButton"));
	($mol_mem(($.$ys_zoomable.prototype), "zoomOut"));
	($mol_mem(($.$ys_zoomable.prototype), "O"));
	($mol_mem(($.$ys_zoomable.prototype), "ZoomOutButton"));
	($mol_mem(($.$ys_zoomable.prototype), "reset"));
	($mol_mem(($.$ys_zoomable.prototype), "R"));
	($mol_mem(($.$ys_zoomable.prototype), "ZoomReset"));
	($mol_mem(($.$ys_zoomable.prototype), "Controls"));
	($mol_mem(($.$ys_zoomable.prototype), "zoom"));
	($mol_mem(($.$ys_zoomable.prototype), "position"));

//# sourceMappingURL=zoomable.view.tree.js.map