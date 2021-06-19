// Remove duplicates in place from linked list

class LinkedList {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

function removeDuplicatesFromLinkedList(linkedList) {
	let current = linkedList
	while (true) {
		let next = current.next
		if (!next) break
		if (current.value === next.value) current.next = next.next
		else current = next
	}
	return linkedList
}
