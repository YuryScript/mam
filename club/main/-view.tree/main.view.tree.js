	($.$club_main) = class $club_main extends ($.$mol_page) {
		Title(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ("Вастрик Клуб");
			return obj;
		}
		Lighter(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		Pag1(){
			const obj = new this.$.$mol_paginator();
			(obj.value) = (next) => ((this.page_number(next)));
			return obj;
		}
		item_title(id){
			return "";
		}
		Item(id){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ({"post": (this.item_url(id))});
			(obj.title) = () => ((this.item_title(id)));
			return obj;
		}
		list_items(){
			return [(this.Item("0"))];
		}
		Items(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.list_items()));
			return obj;
		}
		Pag2(){
			const obj = new this.$.$mol_paginator();
			(obj.value) = (next) => ((this.page_number(next)));
			return obj;
		}
		Scroll(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Pag1()), 
				(this.Items()), 
				(this.Pag2())
			]);
			return obj;
		}
		Scll(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Scroll())]);
			return obj;
		}
		head(){
			return [(this.Title()), (this.Lighter())];
		}
		body(){
			return [(this.Scll())];
		}
	};
	($mol_mem(($.$club_main.prototype), "Title"));
	($mol_mem(($.$club_main.prototype), "Lighter"));
	($mol_mem(($.$club_main.prototype), "Pag1"));
	($mol_mem_key(($.$club_main.prototype), "Item"));
	($mol_mem(($.$club_main.prototype), "Items"));
	($mol_mem(($.$club_main.prototype), "Pag2"));
	($mol_mem(($.$club_main.prototype), "Scroll"));
	($mol_mem(($.$club_main.prototype), "Scll"));

//# sourceMappingURL=main.view.tree.js.map