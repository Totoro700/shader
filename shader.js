const msg = document.getElementById("msg");
switch(Math.floor(Math.random() * 7)) {
	case 0:
		msg.innerHTML = "Rickrolled!";
		window.location.href = "https://www.youtube.com/watch?v=f9qgAOi9Q9E"; 
		break;
	case 1:
		msg.innerHTML = "Coconut malled!";
		window.location.href = "https://youtu.be/cGw-8FrRT1E"; 
		break;
	case 2:
        	msg.innerHTML = "IndiHomed!";
		window.location.href = "https://youtu.be/_IneeB-UDFA?t=60"; 
		break;
	case 3:
		msg.innerHTML = "Craziest thing ever seen on planet earth";
		window.location.href = "https://www.youtube.com/shorts/yxkNfJk2cHA"; 
		break;
	case 4:
		msg.innerHTML = "Funniest thing ever seen on planet earth";
		window.location.href = "https://www.youtube.com/watch?v=12rT3uotaqk"; 
		break;
	case 5:
		msg.innerHTML = "Marioed!";
		window.location.href = "https://www.youtube.com/shorts/zWcQ2PtEEfk";
		break;
	case 6:
		msg.innerHTML = "LMFAO";
		window.location.href = "https://youtu.be/BWeF4kP3DzM?t=17";
		break;
	case 7:
		msg.innerHTML = "oh heeeeeeeelll no";
		window.location.href = "https://youtu.be/LTvpkZ0U0rM?t=42";
		break;
	default:
		msg.innerHTML = "Trolled!"
		window.location.href = "https://youtu.be/gkTb9GP9lVI?t=4";
		break;
}
