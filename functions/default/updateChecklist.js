module.exports = function(req, request, webhook, icon){
	let jso = {}
	if(req.body.action.data.old.name){
		jso = {
			"text": "",
			"attachments": [
				{
					"author_link": req.body.model.url,
					"color": Colors.edit,
	        "author_name": "Trello: "+req.body.model.name,
					"author_icon": icon,
					"title": `${req.body.action.memberCreator.fullName} renomeu a lista de afares de \"${req.body.action.data.old.name}\" para \"${req.body.action.data.checklist.name}\"`,
					"title_link": req.body.model.url,
					"thumb_url": req.body.action.memberCreator.avatarHash ? "https://trello-avatars.s3.amazonaws.com/"+req.body.action.memberCreator.avatarHash+"/170.png" : undefined,
					"text": `**Membro**: ${req.body.action.memberCreator.fullName} (${req.body.action.memberCreator.username})`
				}
			]
		}
	}
	request.post(webhook+"/slack")
	.set("User-Agent", Config.useragent)
	.send(jso)
	.end((err2, res3)=>{
		return res3;
	})
}