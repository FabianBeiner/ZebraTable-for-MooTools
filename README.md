[DEPRECATED] ZebraTable
=========

**This repository is outdated. Please use [HtmlTable.Zebra](http://mootools.net/docs/more/Interface/HtmlTable.Zebra) of MooTools More instead.**

ZebraTable allows for quick and easy table row highlighting. ZebraTable also allows for different color highlighting during mouseenter and click events.

![Screenshot](http://davidwalsh.name/dw-content/zebra-table-git.png)

How to Use
----------

ZebraTable can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.

### CSS
	.highlight			{ background:#d5fcdc; }
	.even				{ background:#fff; }
	.mo					{ background:#e3f1fb; }
	.odd				{ background:#eee; }

### Javascript
	var zebraTables = new ZebraTable({
		elements: 'table.list-table',
		cssEven: 'even',
		cssOdd: 'odd',
		cssHighlight: 'highlight',
		cssMouseEnter: 'mo'
	});
	

For specific usage and options, please read the documentation or visit http://davidwalsh.name/mootools-zebra-table-plugin
