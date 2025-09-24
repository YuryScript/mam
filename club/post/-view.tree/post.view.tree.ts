namespace $ {
	export class $club_post extends $mol_page {
		
		/**
		 * ```tree
		 * title <= post_title
		 * ```
		 */
		title() {
			return this.post_title()
		}
		
		/**
		 * ```tree
		 * body /
		 * 	<= Header
		 * 	<= Article
		 * 	<= CommentTitle
		 * 	<= Items
		 * ```
		 */
		body() {
			return [
				this.Header(),
				this.Article(),
				this.CommentTitle(),
				this.Items()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * DatePublished $mol_date value <= date_published
		 * ```
		 */
		@ $mol_mem
		DatePublished() {
			const obj = new this.$.$mol_date()
			
			obj.value = () => this.date_published()
			
			return obj
		}
		
		/**
		 * ```tree
		 * DateModified $mol_date value <= date_modified
		 * ```
		 */
		@ $mol_mem
		DateModified() {
			const obj = new this.$.$mol_date()
			
			obj.value = () => this.date_modified()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Header $mol_view sub /
		 * 	<= DatePublished
		 * 	<= DateModified
		 * ```
		 */
		@ $mol_mem
		Header() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.DatePublished(),
				this.DateModified()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Article $mol_text text <= text
		 * ```
		 */
		@ $mol_mem
		Article() {
			const obj = new this.$.$mol_text()
			
			obj.text = () => this.text()
			
			return obj
		}
		
		/**
		 * ```tree
		 * CommentTitle $mol_paragraph title @ \Комментарии
		 * ```
		 */
		@ $mol_mem
		CommentTitle() {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.$.$mol_locale.text( '$club_post_CommentTitle_title' )
			
			return obj
		}
		
		/**
		 * ```tree
		 * comment_text* \
		 * ```
		 */
		comment_text(id: any) {
			return ""
		}
		
		/**
		 * ```tree
		 * Item*0 $mol_link title <= comment_text*
		 * ```
		 */
		@ $mol_mem_key
		Item(id: any) {
			const obj = new this.$.$mol_link()
			
			obj.title = () => this.comment_text(id)
			
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
	}
	
}

