(function(a){this.ZebraTable=new Class({Implements:[Event,Options],options:{elements:"table.list-table",cssEven:"even",cssOdd:"odd",cssHighlight:"highlight",cssMouseEnter:"mo"},initialize:function(b){this.setOptions(b);$$(this.options.elements).each(function(c){this.zebraize(c)},this)},zebraize:function(b){b.getElements("tr:nth-child(odd)").each(function(c){this.addZebra(c,this.options.cssOdd)},this);b.getElements("tr:nth-child(even)").each(function(c){this.addZebra(c,this.options.cssEven)},this)},addZebra:function(c,b){self=this;c.addClass(b).addEvents({mouseenter:function(){if(!c.hasClass(self.options.cssHighlight)){c.addClass(self.options.cssMouseEnter).removeClass(b)}},mouseleave:function(){if(!c.hasClass(self.options.cssHighlight)){c.removeClass(self.options.cssMouseEnter).addClass(b)}},click:function(){c.removeClass(self.options.cssMouseEnter,b).toggleClass(self.options.cssHighlight)}})}})})(document.id);
