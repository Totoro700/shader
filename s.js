const msg = document.getElementById("msg");
switch(Math.floor(Math.random() * 6)) {
	case 0:
		msg.innerHTML = "Rickrolled!";
		window.open("https://totoro700.github.io/shader.html", '_blank').focus();
		window.location.href = "https://www.youtube.com/watch?v=f9qgAOi9Q9E"; 
		break;
	case 1:
		msg.innerHTML = "Coconut malled!";
		window.open("https://totoro700.github.io/shader.html", '_blank').focus();
		window.location.href = "https://youtu.be/cGw-8FrRT1E"; 
		break;
	case 2:
        msg.innerHTML = "IndiHomed!";
		window.open("https://totoro700.github.io/shader.html", '_blank').focus();
		window.location.href = "https://youtu.be/_IneeB-UDFA?t=60"; 
		break;
	case 3:
		msg.innerHTML = "Craziest thing ever seen on planet earth";
		window.open("https://totoro700.github.io/shader.html", '_blank').focus();
		window.location.href = "https://www.youtube.com/shorts/yxkNfJk2cHA"; 
		break;
	case 4:
		msg.innerHTML = "Funniest thing ever seen on planet earth";
		window.open("https://totoro700.github.io/shader.html", '_blank').focus();
		window.location.href = "https://www.youtube.com/watch?v=12rT3uotaqk"; 
		break;
	default:
		msg.innerHTML = "Trolled!"
		window.open("https://totoro700.github.io/shader.html", '_blank').focus();
		window.location.href = "https://youtu.be/gkTb9GP9lVI?t=4";
		break;
}