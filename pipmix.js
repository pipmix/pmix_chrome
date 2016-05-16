var id = "alhkfkphfikpmoeicihjikjfdplkbpkn";


function pSendFunction(){
	

	//console.log('test');
	//console.log("test2");
	//chrome.tabs.create({},callback);
	
	
	chrome.tabs.getSelected(null,function(tab) { 
		var title = tab.title;
		var tablink = tab.url;
		console.log(title);
		console.log(tablink);
	});

	

}

//chrome.tabs.create({url:'http://www.pipmix.com'},callback);



function callback(data){
	
	console.log(data);
	
	
	
	
	
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendToPipmix').addEventListener('click', pSendFunction);
	    document.getElementById('reloadExtension').addEventListener('click', funcReloadExtension);
});







function funcReloadExtension(id) {
chrome.runtime.reload();
}



