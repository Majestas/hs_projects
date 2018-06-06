$(document).ready(function() {
	document.getElementById('info').innerHTML = "<h4>Schrödinger: Furthering our Understanding of the Atom</h4> Click on any image you want to see the information. Then click on this box before clicking the next image.";
	//Click on life
	$('#life').click(function() {
		$('#life').css("border-color","#FFFF00");
		$('#life').css("border-width","4px");
		$('#school').css("margin-left","97px");
		document.getElementById('info').innerHTML = "<h4>Schrödinger's Life</h4> <p>Erwin Schrödinger was born in 1887 in Veinna, Austria. He was homeschooled until age 11. After that, he went to a school in order to get into the University of Vienna, where he got his PhD in physics. During his life, he lived in Austria, Ireland, and Germany. Schrödinger died in 1961 at age 74.</p>";
		$('#info').click(function() {
			$('#life').css("border-color","#000000");
			$('#life').css("border-width","2px");
			$('#school').css("margin-left","101px");
			document.getElementById('info').innerHTML = "<h4>Schrödinger: Furthering our Understanding of the Atom</h4> <p>Click another image!</p>";
		});
	});
	//Click on Bio
	$('#bio').click(function() {
		$('#bio').css("border-color","#FFFF00");
		$('#bio').css("border-width","4px");
		$('#achieve').css("margin-left","97px");
		document.getElementById('info').innerHTML = "<h4>Schrödinger's Biography</h4> <p>Schrödinger as an artillery officer in WW1. In 1918, he tried to take up philosophy, but the university he wished to attend was not longer considered to be in Austria after WW1, so he remained a physcisist. He recieved a Nobel Prize in physics in 1933.</p>";
		$('#info').click(function() {
			$('#bio').css("border-color","#000000");
			$('#bio').css("border-width","2px");
			$('#achieve').css("margin-left","101px");
			document.getElementById('info').innerHTML = "<h4>Schrödinger: Furthering our Understanding of the Atom</h4> <p>Click another image!</p>";
		});
	});
	//Click on Achieve
	$('#achieve').click(function() {
		$('#achieve').css("border-color","#FFFF00");
		$('#achieve').css("border-width","4px");
		$('#cat').css("margin-left","97px");
		document.getElementById('info').innerHTML = "<h4>Schrödinger's Achievements</h4> <p>Schrödinger came up with the experiment known now as Schrödinger's cat. This was part of his equation that can predict the location of an electron. Because of his improvements on the atomic model, he recieved the nobel prize in physics.</p>";
		$('#info').click(function() {
			$('#achieve').css("border-color","#000000");
			$('#achieve').css("border-width","2px");
			$('cat').css("margin-left","101px");
			document.getElementById('info').innerHTML = "<h4>Schrödinger: Furthering our Understanding of the Atom</h4> <p>Click another image!</p>";
		});
	});
	//Click on Cat
	$('#cat').click(function() {
		$('#cat').css("border-color","#FFFF00");
		$('#cat').css("border-width","4px");
		document.getElementById('info').innerHTML = "<h4>Schrödinger's Cat</h4> <p><a href='http://www.youtube.com/watch?v=QisnPsu7_Uk'>Schrödinger's cat</a> is a hypothetical experiment in which a cat is placed in a box. This box has a sealed vial of posion that will break open at a random time. Since one cannot see into the box, it is impossible to know if the cat is dead or alive. Thusly, the cat can be considered both dead and alive. This concept can be applied to an electron.</p>";
		$('#info').click(function() {
			$('#cat').css("border-color","#000000");
			$('#cat').css("border-width","2px");
			document.getElementById('info').innerHTML = "<h4>Schrödinger: Furthering our Understanding of the Atom</h4> <p>Click another image!</p>";
		});
	});
	//Click on Equation
	$('#equation').click(function() {
		$('#equation').css("border-color","#FFFF00");
		$('#equation').css("border-width","4px");
		$('#movement').css("margin-left","90px");
		document.getElementById('info').innerHTML = "<h4>Schrödinger's Equation</h4> <p>Schrödinger's equation shows how an electron may move as a wave. However, this is not 100% accurate because there are some variables that cannot be measured exactly, but can be estimated.</p>";
		$('#info').click(function() {
			$('#equation').css("border-color","#000000");
			$('#equation').css("border-width","2px");
			$('#movement').css("margin-left","94px");
			document.getElementById('info').innerHTML = "<h4>Schrödinger: Furthering our Understanding of the Atom</h4> <p>Click another image!</p>";
		});
	});
	//Click on Movement
	$('#movement').click(function() {
		$('#movement').css("border-color","#FFFF00");
		$('#movement').css("border-width","4px");
		$('#particle').css("margin-left","90px");
		document.getElementById('info').innerHTML = "<h4>Movement of An Electron</h4> <p>Schrödinger figured out that an electron moves as a wave. This movement is predicted with his equation. This also explins how much energy an electron may have based on the orbital it is in.</p>";
		$('#info').click(function() {
			$('#movement').css("border-color","#000000");
			$('#movement').css("border-width","2px");
			$('#particle').css("margin-left","94px");
			document.getElementById('info').innerHTML = "<h4>Schrödinger: Furthering our Understanding of the Atom</h4> <p>Click another image!</p>";
		});
	});
	//Click on Particle
	$('#particle').click(function() {
		$('#particle').css("border-color","#FFFF00");
		$('#particle').css("border-width","4px");
		$('#model').css("margin-left","90px");
		document.getElementById('info').innerHTML = "<h4>The Electron as a Particle</h4> <p>While an electron is a wave, it is also a particle. When looking at the electron, if you look at it at one specific moment, it is a particle. When looking at the movement, it is a wave.</p>";
		$('#info').click(function() {
			$('#particle').css("border-color","#000000");
			$('#particle').css("border-width","2px");
			$('#model').css("margin-left","94px");
			document.getElementById('info').innerHTML = "<h4>Schrödinger: Furthering our Understanding of the Atom</h4> <p>Click another image!</p>";
		});
	});
	//Click on Model
	$('#model').click(function() {
		$('#model').css("border-color","#FFFF00");
		$('#model').css("border-width","4px");
		document.getElementById('info').innerHTML = "<h4>Schrödinger's Model</h4> <p>Overall, the <a href='http://www.youtube.com/watch?v=znHrQShMp_I'>Schrödinger model</a>, has some new additions. The electrons are housed in orbital that have different shapes and energies. These orbitals have different wave functions. Electrons change sporadically.</p>";
		$('#info').click(function() {
			$('#model').css("border-color","#000000");
			$('#model').css("border-width","2px");
			document.getElementById('info').innerHTML = "<h4>Schrödinger: Furthering our Understanding of the Atom</h4> <p>Click another image!</p>";
		});
	});
});
