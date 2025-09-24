namespace $ {
	export class $club_main extends $mol_page {
		
		/**
		 * ```tree
		 * head /
		 * 	<= Title
		 * 	<= Lighter
		 * ```
		 */
		head() {
			return [
				this.Title(),
				this.Lighter()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * body / <= Scll
		 * ```
		 */
		body() {
			return [
				this.Scll()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Title $mol_paragraph title \Вастрик Клуб
		 * ```
		 */
		@ $mol_mem
		Title() {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => "Вастрик Клуб"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Lighter $mol_lights_toggle
		 * ```
		 */
		@ $mol_mem
		Lighter() {
			const obj = new this.$.$mol_lights_toggle()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Pag1 $mol_paginator value? <=> page_number?
		 * ```
		 */
		@ $mol_mem
		Pag1() {
			const obj = new this.$.$mol_paginator()
			
			obj.value = (next?: any) => this.page_number(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * item_title* \
		 * ```
		 */
		item_title(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * Item*0 $mol_link
		 * 	arg * post <= item_url*
		 * 	title <= item_title*
		 * ```
		 */
		@ $mol_mem_key
		Item(id: any) {
			const obj = new this.$.$mol_link()
			
			obj.arg = () => ({
				post: this.item_url(id)
			} as Record< string, any >)
			obj.title = () => this.item_title(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * list_items / <= Item*0
		 * ```
		 */
		list_items() {
			return [
				this.Item("0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Items $mol_list rows <= list_items
		 * ```
		 */
		@ $mol_mem
		Items() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.list_items()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Pag2 $mol_paginator value? <=> page_number?
		 * ```
		 */
		@ $mol_mem
		Pag2() {
			const obj = new this.$.$mol_paginator()
			
			obj.value = (next?: any) => this.page_number(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Scroll $mol_list rows /
		 * 	<= Pag1
		 * 	<= Items
		 * 	<= Pag2
		 * ```
		 */
		@ $mol_mem
		Scroll() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Pag1(),
				this.Items(),
				this.Pag2()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Scll $mol_scroll sub / <= Scroll
		 * ```
		 */
		@ $mol_mem
		Scll() {
			const obj = new this.$.$mol_scroll()
			
			obj.sub = () => [
				this.Scroll()
			] as readonly any[]
			
			return obj
		}
	}
	
}

