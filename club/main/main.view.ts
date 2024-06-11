interface Root {
  version: string;
  title: string;
  home_page_url: string;
  feed_url: string;
  next_url: string;
  items: Item[];
}

interface Item {
  id: string;
  url: string;
  title: string;
  content_text: string;
  date_published: string;
  date_modified: string;
  authors: Author[];
  _club: Club;
}

interface Club {
  type: string;
  slug: string;
  coauthors: any[];
  comment_count: number;
  view_count: number;
  upvotes: number;
  is_public: boolean;
  is_commentable: boolean;
}

interface Author {
  name: string;
  url: string;
  avatar: string;
}

namespace $.$$ {
	
	export class $club_main extends $.$club_main {
		@ $mol_mem
		page_number(next?: number) {
			const n = next === undefined ? undefined : next < 1 ? '1' : next.toString()
			const arg = this.$.$mol_state_arg.value('page', n)
			return arg === null ? 1 : Number(arg)
		}
		// @ $mol_mem
		// a(next?: number) { return this.$.$mol_state_arg.value('page', next) ?? 0 }
		// @ $mol_mem
		// b(next = 1) {
		// 	if(next) $mol_state_arg.value('page', next.toString() )
		// 	console.log(Number($mol_state_arg.value('page')))
		// 	return Number($mol_state_arg.value('page'))
		// }

		url() {
			return `https://vas3k.club/all/new/feed.json?page=${this.page_number()}` 
		}

		@ $mol_mem
		feed(next?: Root): Root {
			return next || ($mol_fetch.json(this.url() ) as Root)
		}

		posts() {
			return this.feed().items
		}

		list_items() {
			return this.feed().items.map((_, i) => this.Item(i))
		}

		@ $mol_mem_key
		item_title( id: number ) {
			return this.posts()[id].title
		}

		@ $mol_mem_key
		item_url( id: number ) {
			const url = this.posts()[id].url
			return url.slice(0, url.length - 1)
		}
	}
}
