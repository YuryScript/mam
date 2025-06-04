namespace $.$$ {
	
	export class $ys_zoomable extends $.$ys_zoomable {
		constructor() {
			super()
			this.log()
		}

		destructor(): void {}

		@ $mol_mem
		position(next = [0, 0]) {
			return next
		}

		@ $mol_mem
		size(next = [
			// @ts-ignore
			this.dom_node_actual().offsetWidth,
			// @ts-ignore
			this.dom_node_actual().offsetHeight,
		]) {
			return next
		}

		@ $mol_mem
		isDragging(next = false) {
			return next
		}

		@ $mol_mem
		dragStartPos(next = [0, 0]) {
			return next
		}

		@ $mol_mem
		center() {
			return [
				this.size()[0] / 2,
				this.size()[1] / 2
			]
		}

		@ $mol_mem
		zoom(next = 1) {
			return next
		}

		@ $mol_mem
		move_step(next = 20) {
			return next
		}

		@ $mol_mem
		zoomLimits(next = [0.4, 10]) {
			return next
		}

		@ $mol_action
		zoomIn() {
			const [min, max] = this.zoomLimits()
			const currentZoom = this.zoom()
			const newZoom = Math.min(max, currentZoom * 1.2)
			this.zoom(newZoom)
		}

		@ $mol_action
		zoomOut() {
			const [min, max] = this.zoomLimits()
			const currentZoom = this.zoom()
			const newZoom = Math.max(min, currentZoom / 1.2)
			this.zoom(newZoom)
		}

		@ $mol_action
		reset() {
			this.position([0, 0])
			this.zoom(1)
		}

		@ $mol_mem
		styleForZoomComponent(): { [key: string]: string | number; } {
			const pos = this.position()

			return {
				...this.style(),
				left: (pos[0] * this.zoom()) + 'px',
				top: (pos[1] * this.zoom()) + 'px',
				transform: `scale(${this.zoom()})`,
			}
		}

		@ $mol_action
		event_wheel( event: WheelEvent ) {
			if( event.defaultPrevented ) return

			console.log(event)

			if(event.deltaY >= 0) {
				this.zoomOut()
			} else {
				this.zoomIn()
			}
		}

		event_key( event: KeyboardEvent ) {
			const step = this.move_step()
			const [x, y] = this.position()
			
			switch(event.code) {
				case 'KeyW':
					this.position([x, y + step])
					break
				case 'KeyS':
					this.position([x, y - step])
					break
				case 'KeyA':
					this.position([x + step, y])
					break
				case 'KeyD':
					this.position([x - step, y])
					break
			}
		}

		event_mouse_down(event: MouseEvent) {
			console.log(event)
			if (event.button === 1) { // Средняя кнопка мыши
				this.isDragging(true)
				this.dragStartPos([event.clientX, event.clientY])
			}
		}

		event_mouse_move(event: MouseEvent) {
			if (!this.isDragging()) return

			const movement = [event.movementX, event.movementY]

			const currentPos = this.position()
			this.position([
				currentPos[0] + movement[0] / this.zoom(),
				currentPos[1] + movement[1] / this.zoom()
			])
			return event
		}

		@ $mol_action
		event_mouse_up(event: MouseEvent) {
			if (event.button === 1) {
				this.isDragging(false)
			}
		}

		@ $mol_action
		event_mouse_leave(event: MouseEvent) {
			this.isDragging(false)
		}

		@ $mol_mem
		log() {
			// console.log(this.zoom())
			console.log(this.isDragging())
		}
	}
}
