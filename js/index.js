console.clear()

// The function generates files matching the specified parameters.
function generateCharScripts() {
	console.log("Building started...")
	var zip = new JSZip();

	var tempValue0 = document.getElementById("tempValue0").value;	// File name
	var tempValue1 = document.getElementById("tempValue1").value;	// Loaded code
	var tempValue2 = document.getElementById("tempValue2").value;	// File extension

	var tempValue3 = document.getElementById("tempValue3").value;	// Range from
	var tempValue4 = document.getElementById("tempValue4").value;	// Range to

	var A = tempValue3;
	while (A <= tempValue4) {
		var tempValue5 = tempValue1.replace(/%num/g, "" + A);
		zip.file(tempValue0 + A + "." + tempValue2, tempValue5);
		console.log("- Compiled file " + A)
		++A;
	};

	zip.generateAsync({
		type: "blob"
	}).then(function (content) {
		saveAs(content, "charscripts.zip");
		console.log("All files compiled, zip download has started...")
	});
};

// Reads a file and displays it in a field.
var openFile = function (event) {
	var input = event.target;
	var reader = new FileReader();

	reader.onload = function () {
		var tempValue0 = reader.result;
		var tempValue1 = document.getElementById('tempValue1');
		tempValue1.textContent = tempValue0;
		console.log("Code file readed")
	};

	reader.readAsBinaryString(input.files[0]);
};