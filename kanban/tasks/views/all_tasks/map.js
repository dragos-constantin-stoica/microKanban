function(doc) {
	if (doc.doc_type == "task") {
		emit(doc._id, 
				{
					"_id": doc._id,
					"_rev": doc._rev,
					"id":doc.id, 
					"title": doc.title, 
					"description":doc.description, 
					"status": doc.status
				}
		);
	}
} 