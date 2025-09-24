	($.$taxes) = class $taxes extends ($.$mol_page) {
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		plugins(){
			return [(this.Theme())];
		}
		body(){
			return ["123"];
		}
	};
	($mol_mem(($.$taxes.prototype), "Theme"));

//# sourceMappingURL=taxes.view.tree.js.map