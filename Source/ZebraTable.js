(function($) {
	this.ZebraTable = new Class({
		Implements: [Event, Options],

		options: {
			elements: 'table.list-table',
			cssEven: 'even',
			cssOdd: 'odd',
			cssHighlight: 'highlight',
			cssMouseEnter: 'mo'
		},

		initialize: function(options) {
			this.setOptions(options);
			$$(this.options.elements).each(function(table) {
				this.zebraize(table);
			}, this);
		},

		zebraize: function(table) {
			table.getElements('tr:nth-child(odd)').each(function(tr) {
				this.addZebra(tr, this.options.cssOdd);
			},
			this);
			table.getElements('tr:nth-child(even)').each(function(tr) {
				this.addZebra(tr, 'cssEven');
			}, this);
		},

		addZebra: function(tr, cssValue) {
			self = this;
			tr.addClass(cssValue).addEvents({
				mouseenter: function() {
					if (!tr.hasClass(self.options.cssHighlight)) tr.addClass(self.options.cssMouseEnter).removeClass(cssValue);
				},
				mouseleave: function() {
					if (!tr.hasClass(self.options.cssHighlight)) tr.removeClass(self.options.cssMouseEnter).addClass(cssValue);
				},
				click: function() {
					tr.removeClass(self.options.cssMouseEnter, cssValue).toggleClass(self.options.cssHighlight);
				}
			});
		}
	});
})(document.id);
