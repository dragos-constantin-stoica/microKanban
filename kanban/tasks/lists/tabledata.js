function (head, req) {
    // specify that we're providing a JSON response
    provides('json', function() {
        // create an array for our result set
        var results = [];

        while (row = getRow()) {
            results.push({
                _id: row.value._id,
                _rev: row.value._rev,
				id: row.value.id,
				title:row.value.title,
				description:row.value.description,
				status:row.value.status
            });
        }

        // make sure to stringify the results :)
        send(JSON.stringify(results));
    });
}