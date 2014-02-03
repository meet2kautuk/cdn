	fetchGalleryPage: function(page){		
		this.apiFilter.start = (this.apiFilter.limit * page);
		this.applyFolderControllerFilter();
		this.options.folderController.refetchCurrentList();
	},
