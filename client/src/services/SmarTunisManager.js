export default {
	STORAGE_KEY: 'vue-stm',
	set: function(payload) {
		console.log(payload)
		console.log("in set function")
		localStorage.setItem(this.STORAGE_KEY, JSON.stringify(payload))
	},
	get: function() {
		return JSON.parse(localStorage.getItem(this.STORAGE_KEY))
	},
	isEmpty: function() {
		return !this.get();
	},
	clear: function() {
		localStorage.clear();
	},
	init: function() {
		if (this.isEmpty()) {
			return this.set([]);
		}
	}
}
