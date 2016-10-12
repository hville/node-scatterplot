/* global Dygraph */
window.setData = setData

function setData(json) {
	new Dygraph(
		document.getElementById('dygraph'),
		JSON.parse(json),
		{ drawPoints: true, strokeWidth: 0.0, pointSize: 3, highlightCircleSize: 5, showRangeSelector: true, rangeSelectorHeight: 60 }
	)
}
