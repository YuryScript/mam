	($.$roguerooms) = class $roguerooms extends ($.$mol_view) {
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		Header(){
			const obj = new this.$.$roguerooms_header();
			return obj;
		}
		Inventory(){
			const obj = new this.$.$roguerooms_inventory();
			return obj;
		}
		Blueprint(){
			const obj = new this.$.$roguerooms_blueprint();
			return obj;
		}
		Options(){
			const obj = new this.$.$roguerooms_options();
			return obj;
		}
		plugins(){
			return [(this.Theme())];
		}
		debug(next){
			if(next !== undefined) return next;
			return true;
		}
		sub(){
			return [
				(this.Header()), 
				(this.Inventory()), 
				(this.Blueprint()), 
				(this.Options())
			];
		}
	};
	($mol_mem(($.$roguerooms.prototype), "Theme"));
	($mol_mem(($.$roguerooms.prototype), "Header"));
	($mol_mem(($.$roguerooms.prototype), "Inventory"));
	($mol_mem(($.$roguerooms.prototype), "Blueprint"));
	($mol_mem(($.$roguerooms.prototype), "Options"));
	($mol_mem(($.$roguerooms.prototype), "debug"));
	($.$roguerooms_header) = class $roguerooms_header extends ($.$mol_view) {
		Title(){
			const obj = new this.$.$mol_paragraph();
			(obj.line_height) = () => (50);
			(obj.title) = () => ("Rogue Rooms");
			return obj;
		}
		sub(){
			return [(this.Title())];
		}
	};
	($mol_mem(($.$roguerooms_header.prototype), "Title"));
	($.$roguerooms_inventory) = class $roguerooms_inventory extends ($.$mol_view) {
		sub(){
			return ["Активы игрока"];
		}
	};
	($.$roguerooms_blueprint) = class $roguerooms_blueprint extends ($.$roguerooms_zoomable) {
		cursor(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		selected_path(next){
			if(next !== undefined) return next;
			return null;
		}
		content(){
			return ["Тут план здания"];
		}
	};
	($mol_mem(($.$roguerooms_blueprint.prototype), "cursor"));
	($mol_mem(($.$roguerooms_blueprint.prototype), "selected_path"));
	($.$roguerooms_options) = class $roguerooms_options extends ($.$mol_view) {
		sub(){
			return ["Тут например головоломка или мини игра"];
		}
	};

//# sourceMappingURL=roguerooms.view.tree.js.map