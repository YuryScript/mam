	($.$ys_main_demo) = class $ys_main_demo extends ($.$mol_book2_catalog) {
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		Lighter(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		Omc_demo(){
			const obj = new this.$.$ys_omc();
			(obj.style) = () => ({"min-width": "800px"});
			return obj;
		}
		Body(){
			return ["Пример тела страницы"];
		}
		Page_demo(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ("Пример заголовка");
			(obj.body) = () => ([(this.Body())]);
			(obj.style) = () => ({"min-width": "800px"});
			return obj;
		}
		Nes_demo(){
			const obj = new this.$.$ys_theme_nes_demo();
			(obj.title) = () => ("NES тема");
			return obj;
		}
		Win7_demo(){
			const obj = new this.$.$ys_theme_win7_demo();
			(obj.title) = () => ("Windows 7 тема");
			return obj;
		}
		Zoomable_instance(){
			const obj = new this.$.$ys_zoomable();
			(obj.content) = () => (["Пример текста"]);
			return obj;
		}
		Zoomable_demo(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ("Zoomable");
			(obj.body) = () => ([(this.Zoomable_instance())]);
			return obj;
		}
		MathDarts_instance(){
			const obj = new this.$.$ys_mathDarts();
			return obj;
		}
		MathDarts_demo(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ("Math Darts");
			(obj.body) = () => ([(this.MathDarts_instance())]);
			return obj;
		}
		plugins(){
			return [(this.Theme())];
		}
		menu_title(){
			return "YuryScript's Apps";
		}
		menu_tools(){
			return [(this.Lighter())];
		}
		spreads(){
			return {
				"omc_demo": (this.Omc_demo()), 
				"page_demo": (this.Page_demo()), 
				"nes_demo": (this.Nes_demo()), 
				"win7_demo": (this.Win7_demo()), 
				"zoomable_demo": (this.Zoomable_demo()), 
				"mathDarts_demo": (this.MathDarts_demo())
			};
		}
	};
	($mol_mem(($.$ys_main_demo.prototype), "Theme"));
	($mol_mem(($.$ys_main_demo.prototype), "Lighter"));
	($mol_mem(($.$ys_main_demo.prototype), "Omc_demo"));
	($mol_mem(($.$ys_main_demo.prototype), "Page_demo"));
	($mol_mem(($.$ys_main_demo.prototype), "Nes_demo"));
	($mol_mem(($.$ys_main_demo.prototype), "Win7_demo"));
	($mol_mem(($.$ys_main_demo.prototype), "Zoomable_instance"));
	($mol_mem(($.$ys_main_demo.prototype), "Zoomable_demo"));
	($mol_mem(($.$ys_main_demo.prototype), "MathDarts_instance"));
	($mol_mem(($.$ys_main_demo.prototype), "MathDarts_demo"));
	($.$ys_main) = class $ys_main extends ($.$ys_main_demo) {};

//# sourceMappingURL=ys.view.tree.js.map