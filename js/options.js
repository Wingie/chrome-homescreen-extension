function save_options() {
	localStorage["favLinks"] = $("input:radio[checked=true]").val();
	
	var s = $("#txtLinks").val();
	var lines = s.split("\n");
	var sanatizedObject = new Array();
	
	for (var index in lines) {
		if (lines[index].trim() != "")  {
			line = lines[index].split("::");
		
			if (line.length == 2 && line[0] != "" && typeof(line[0]) != "undefined"
				 && line[1] != "" && typeof(line[1]) != "undefined") 
			{
				var obj = new Array(line[0], line[1]);
				sanatizedObject.push(obj);
			}
		
		}
	}
	localStorage["txtLinks"] = JSON.stringify(sanatizedObject);
	
	$("#status").html("Your options have been saved!");
	$("#status").show("slow");
}

function restore_options() {
	if (typeof(localStorage["favLinks"]) != "undefined" && localStorage["favLinks"] != "")
		$("input:radio[value="+localStorage["favLinks"]+"]").attr("checked", true);	
	else	
		$("input:radio[value=bmark_menu]").attr("checked", true);	//default 
	
	if (localStorage["txtLinks"] != "undefined" && localStorage["txtLinks"] != "" && localStorage["txtLinks"] != "[]") {
		txt = "";
		a =  JSON.parse(localStorage["txtLinks"]);
		for (var index in a) {
			txt += a[index][0] + "::" + a[index][1] + "\n";
		}
		$("#txtLinks").html(txt);
	} else {
		$("#txtLinks").html("Google::http://www.google.de/\nWikipedia::http://www.wikipedia.de/\n");	
	}
}