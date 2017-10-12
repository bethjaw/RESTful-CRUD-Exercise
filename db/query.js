var db = require('./connection');

function getAll() {
	// Get all cartoons and return them to the route
}

function getOne(id) {
	// Get one cartoon by the id and return it
}

function create(cartoon) {
	// Add a cartoon to the database
}

function update(id, cartoon) {
	// Update a cartoon with the specified id
}

function remove(id) {
	// Delete the specified cartoon
}

module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};
