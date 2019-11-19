exports.main = function(req,res) {
	let Datastore = require('nedb')
	db = new Datastore({ filename: 'lvivold.json', autoload: true })
	db.find({ table: "arctype" }, (err, arctypes) => {
		console.log(arctypes)
		
		res.render(path + 'index', {types:arctypes})
	})
}

exports.listObjects = (req, res) => {
	let tpId = parseInt(req.params.id)
	let Datastore = require('nedb')
	db = new Datastore({ filename: 'lvivold.json', autoload: true })
	db.find({ table: "arcobj", type_id: tpId },(err, listObj) => {
		db.findOne({table:"arctype", id:tpId},(err, arcType) => {
			res.render(path + '/objects', { type: arcType.typeName, objects:  listObj, typeId:tpId})
		})
	})
}

exports.arcObject = (req,res) => {
	objId = parseInt(req.params.id)
	let Datastore = require('nedb')
	db = new Datastore({ filename: 'lvivold.json', autoload: true })
	db.findOne({table:"arcobj", id:objId},(err, arcObj) => {
		type_id = arcObj.type_id
		db.findOne({table:"arctype", id:type_id},(err, arcType) => {
			res.render(path + '/arcObject', { type: arcType, object: arcObj})
	})
})
}

exports.error404 = (req, res) => {
	res.sendFile(path + 'error.html')
}