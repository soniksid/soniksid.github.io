let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		setTheme(mode)
		if(mode == 'dark'){
			this.dataset.mode = 'light'
		}
		if(mode == 'light'){
			this.dataset.mode = 'dark'
		}
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'css/style.css'
	}
	if(mode == 'dark'){
		document.getElementById('theme-style').href = 'css/dark.css'
	}
}