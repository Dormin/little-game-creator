model.Game = function () { "use strict"
	var self = {}
	var levelList = model.LevelList()

	self.getLevelList = function () {
		return levelList
	}

	return self
}
