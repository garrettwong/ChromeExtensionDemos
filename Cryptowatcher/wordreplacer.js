window.replacements = [
	{
		toReplace: /\byanghong49\b/g,
		replaceWith: 'My Butt'
	},
	{
		toReplace: /\wesbc\b/g,
		replaceWith: 'My Butt'
	},
	{
		toReplace: /\yeee\b/g,
		replaceWith: 'My Butt'
	},
]


walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	try {
		if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea') {
			return;
		}
	} catch (e) { }

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

	for (var i = 0; i < replacements.length; i++) {
		v = v.replace(replacements[i].toReplace, replacements[i].replaceWith);
	}

	textNode.nodeValue = v;
}