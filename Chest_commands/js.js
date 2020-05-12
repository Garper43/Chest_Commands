var menu = document.getElementById( 'menu' );
var m = {
	rows: menu.childNodes[3],
	name: menu.childNodes[5],
	command: menu.childNodes[7],
	auto_refresh: menu.childNodes[9],

};
var menu_settings = {
	rows: '1',
	name: 'name', //
	command: 'menu',
	auto_refresh: '5.0',
	open_action: ' ',
	open_with_item: {
		id: ' ',
		left_click: 'true',
        right_click: 'true',
	},

};
var chest = document.getElementById( 'chest-wrapper' );
var column = chest.getElementsByClassName( 'column' );
//rows
m.rows.addEventListener( 'keydown' , function(ev) {
	if ( ev.key == 'Enter' ) {
		var c = Number(m.rows.childNodes[1].value);
		var l = column.length;
		if ( c > l ) {
			for ( i = 0 ; i < c - l ; i++ ) {
				console.log( i );
				chest.innerHTML += "<div class='column' ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";
			}
		} else if ( c < l ) {
			for ( i = l ; i > c ; i-- ) {
				console.log(i);
				chest.removeChild(column[i-1]);
			}
		}
	}
	menu_settings.rows = m.rows.childNodes[1].value;
})
//name
m.name.addEventListener( 'keydown' , function(ev) {
	if ( ev.key == 'Enter' ) {
		menu_settings.name = m.name.childNodes[1].value;
	}
} )
//command
m.name.addEventListener( 'keydown' , function(ev) {
	if ( ev.key == 'Enter' ) {
		menu_settings.command = m.command.childNodes[1].value;
	}
} )
//auto-refresh
m.name.addEventListener( 'keydown' , function(ev) {
	if ( ev.key == 'Enter' ) {
		menu_settings.auto_refresh = m.auto_refresh.childNodes[1].value;
	}
} )
