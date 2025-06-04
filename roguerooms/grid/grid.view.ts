namespace $ {
	export class $roguerooms_grid extends $mol_object {
		@ $mol_mem
		position(next = [0, 0]) {
			return next
		}

		@ $mol_mem
		size(next = [100, 100]) {
			return next
		}

		@ $mol_mem
		rotation(next = 0) {
			return next
		}

		@ $mol_mem
		style() {
			return {
				position: 'absolute',
				left: this.position()[0] + 'px',
				top: this.position()[1] + 'px',
				width: this.size()[0] + 'px',
				height: this.size()[1] + 'px',
				transform: `rotate(${this.rotation()}deg)`,
			}
		}

		@ $mol_action
		rotate(degrees: number) {
			this.rotation(this.rotation() + degrees)
		}

		@ $mol_action
		move(dx: number, dy: number) {
			const [x, y] = this.position()
			this.position([x + dx, y + dy])
		}

		@ $mol_action
		resize(width: number, height: number) {
			this.size([width, height])
		}

		@ $mol_action
		reset() {
			this.position([0, 0])
			this.size([100, 100])
			this.rotation(0)
		}
	}
}
