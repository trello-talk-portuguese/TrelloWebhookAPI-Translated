/*
 This file is part of Turquoise.
 Copyright © Snazzah 2016 - 2019
 Copyright © Yamboy1 (and contributors) 2019 - 2020
 Copyright © Lobo Metalurgico 2019 - 2020
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

module.exports = function(req, request, webhook, icon){
	request.post(webhook+"/slack")
	.set("User-Agent", Config.useragent)
	.send({
		"text": "",
		"attachments": [
			{
				"author_link": req.body.model.url,
		        "color": Colors.lite.edit,
		        "author_name": "Trello: "+req.body.model.name,
		        "author_icon": icon,
		        "title": `${req.body.action.memberCreator.fullName} ${req.body.action.data.voted ? "added" : "removed"} vote to card ${req.body.action.data.card.name}`,
						"title_link": `https://trello.com/c/${req.body.action.data.card.shortLink}`,
						"thumb_url": req.body.action.memberCreator.avatarHash ? "https://trello-avatars.s3.amazonaws.com/"+req.body.action.memberCreator.avatarHash+"/170.png" : undefined,
						"text": `**Member**: ${req.body.action.memberCreator.fullName} (${req.body.action.memberCreator.username})
**Card**: [${req.body.action.data.card.name}](https://trello.com/c/${req.body.action.data.card.shortLink})`
    	}
    ]
	})
	.end((err2, res3)=>{
		return res3;
	})
}
