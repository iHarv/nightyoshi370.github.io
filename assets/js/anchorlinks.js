export default function (elements) {
	for (let element of elements) {
		if (element.hasAttribute('noAnchor'))
			continue;

		if (!element.getAttribute('id'))
			element.setAttribute("id", encodeURIComponent(element.innerHTML.toLowerCase().replace(/ /g, "_")))

		let anchor = document.createElement("a");
		anchor.innerHTML = '<span class="sr-only">Permalink</span><i class="fa fa-link"></i>';
		anchor.setAttribute('title', "Permalink");
		anchor.setAttribute('href', '#' + element.getAttribute("id"));
		anchor.classList.add('header-link');
		anchor.classList.add('anchor');
		element.insertAdjacentElement('afterbegin', anchor);
	};
}