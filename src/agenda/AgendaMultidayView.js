
fcViews.agendaMultiday = AgendaMultidayView;

function AgendaMultidayView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	AgendaView.call(t, element, calendar, 'agendaMultiday');
	var opt = t.opt;
	var renderAgenda = t.renderAgenda;
	var formatDates = calendar.formatDates;
	
	
	
	function render(date, delta) {
		var daysInMultiday = opt('daysinmultiday')
		if (delta) {
			addDays(date, delta * daysInMultiday);
		}
		var start = addDays(cloneDate(date), -1);
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
		renderAgenda(daysInMultiday);
	}
	

}
