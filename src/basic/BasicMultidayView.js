
fcViews.basicMultiday = BasicMultidayView;

function BasicMultidayView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'basicMultiday');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDates = calendar.formatDates;
	
	
	
	function render(date, delta) {
		var daysInMultiday = opt('daysinmultiday')
		if (delta) {
			addDays(date, delta * daysInMultiday);
		}
		var start = addDays(cloneDate(date), 0);
		var end = addDays(cloneDate(start), daysInMultiday);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		t.title = formatDates(
			visStart,
			addDays(cloneDate(visEnd), -1),
			opt('titleFormat')
		);
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;
		renderBasic(1, 1, daysInMultiday, false);
	}
	
	
}
