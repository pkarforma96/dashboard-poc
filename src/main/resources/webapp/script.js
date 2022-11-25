function myFunction(item) {
	const nodes = item.getElementsByTagName("td");
	if (nodes[1].innerHTML == "STARTED") {
		nodes[1].innerHTML = "<p style=\"color:#50C878\"><span class=\"dot_green\"></span>  Deployed</p>";
	}
	else if (nodes[1].innerHTML == "UNDEPLOYED") {
		nodes[1].innerHTML = "<p style=\"color:#FF5733\"><span class=\"dot_red\"></span>  Undeployed</p>";
	}
	else if (nodes[1].innerHTML == "DEPLOYING") {
		nodes[1].innerHTML = "<p style=\"color:#FFBF00\"><span class=\"dot_amber\"></span>  Deploying</p>";
	}
	else {}
}

function setStatusIcon() {
	const trTags = document.getElementsByTagName("tr");
	for (var i = 1; i < trTags.length; i++) {
		myFunction(trTags[i]);
	}
}

function fun1() {
	console.log("blablabla")
}