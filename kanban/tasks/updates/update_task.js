function(doc, req){
    var payload = JSON.parse(req.body);
	if (!doc){
        if ('status' in payload){
            // create new document
            return [
				{
					'_id': req['uuid'],
					'id': payload['id'],
					'title':payload['title'], 
					'description':payload['description'], 
					'status':payload['status'], 
					'doc_type':'task'
				}, JSON.stringify({"message":"Created"})]
        }
        // change nothing in database
        return [null, JSON.stringify({"error":"Task not created!"})]
    }
	
	doc["title"] = payload['title'];
	doc["description"] = payload['description']
	doc["status"] = payload['status']
	
    return [doc, JSON.stringify({"message":"Saved"})]
}