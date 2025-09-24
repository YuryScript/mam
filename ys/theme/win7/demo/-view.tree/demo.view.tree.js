	($.$ys_theme_win7_demo) = class $ys_theme_win7_demo extends ($.$mol_theme_demo) {
		Theme(){
			const obj = new this.$.$ys_theme_win7();
			return obj;
		}
		Button1(){
			const obj = new this.$.$mol_button_major();
			return obj;
		}
		Button2(){
			const obj = new this.$.$mol_button_minor();
			return obj;
		}
		Button3(){
			const obj = new this.$.$mol_button_copy();
			return obj;
		}
		Button4(){
			const obj = new this.$.$mol_button_download();
			return obj;
		}
		Button5(){
			const obj = new this.$.$mol_button_open();
			return obj;
		}
		Button6(){
			const obj = new this.$.$mol_button_share();
			return obj;
		}
		Button7(){
			const obj = new this.$.$mol_button_typed();
			return obj;
		}
		items(){
			const obj = new this.$.$mol_list();
			(obj.sub) = () => ([
				(this.Button1()), 
				(this.Button2()), 
				(this.Button3()), 
				(this.Button4()), 
				(this.Button5()), 
				(this.Button6()), 
				(this.Button7())
			]);
			return obj;
		}
		plugins(){
			return [(this.Theme())];
		}
		sub(){
			return [(this.items()), ...(super.sub())];
		}
	};
	($mol_mem(($.$ys_theme_win7_demo.prototype), "Theme"));
	($mol_mem(($.$ys_theme_win7_demo.prototype), "Button1"));
	($mol_mem(($.$ys_theme_win7_demo.prototype), "Button2"));
	($mol_mem(($.$ys_theme_win7_demo.prototype), "Button3"));
	($mol_mem(($.$ys_theme_win7_demo.prototype), "Button4"));
	($mol_mem(($.$ys_theme_win7_demo.prototype), "Button5"));
	($mol_mem(($.$ys_theme_win7_demo.prototype), "Button6"));
	($mol_mem(($.$ys_theme_win7_demo.prototype), "Button7"));
	($mol_mem(($.$ys_theme_win7_demo.prototype), "items"));

//# sourceMappingURL=demo.view.tree.js.map