namespace $.$$ {
	// One Million Checkboxes

	export class $ys_omc extends $.$ys_omc {


		
	}

	export class $ys_omc_chunk {
		@ $mol_mem
		chunkArray(){
			const size = 10;
			let next = [];
			for(let i = 0; i < size * size; i++){
				const checkbox = new $mol_check_box()
				checkbox.checked(true);
				next[i] = checkbox
			}
			return next
		}

		@ $mol_mem
		sub() {
			
			return [...this.chunkArray()]
		}
	}
}
