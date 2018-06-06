$(document).ready(function() {
	document.getElementById('info').innerHTML= "<h5>The Lewis and Clark Expedition</h5> <p>Click Button #1 to get started!";
	$('#one').click(function() {
		$('#one').addClass('current');
		$('#one').removeClass('active');
		document.getElementById('info').innerHTML="<h5>The Adventure Begins</h5> <p>President Jefferson wanted more western expansion, but no one knew what was to the west. So Jefferson hired Lewis and Clarke to explore the west. These two men left with their party on May 21, 1804.</p> <p>Click Button #2 to continue.</p>";
		$('#two').click(function() {
			$('#one').addClass('done');
			$('#one').removeClass('current');
			$('#two').addClass('current');
			$('#two').removeClass('active');
			document.getElementById('info').innerHTML="<h5>The First Obstacle</h5> <p>Surrounded by new species of animals and plants, Lewis and Clarke continued down the Missouri river. Since they hoped to expand into this territory, the U.S. wanted good relations with the natives of the area. This was not to happen. The Teton Sioux thought their gift was insulting and drew weapons. This was the first of many obstacles to come.</p> <p>Click Button #3 to continue.</p>";
			$('#three').click(function() {
				$('#two').addClass('done');
				$('#two').removeClass('current');
				$('#three').addClass('current');
				$('#three').removeClass('active');
				document.getElementById('info').innerHTML="<h5>Settling Down for the Winter</h5> <p>Winter fast approached, freezing the river. With the river as the only mode of transportation, the expedition was forced to a halt. They quickly built a fort named Fort Mandan, since the local native tribes was the Mandan tribe. Here, the winter was spent. Guards were always posted. Here, they ran into another challenge. The party was running low on food. They had to use the land and the natives to gather the food for their men to eat.</p> Click Button #4 to continue.</p>";
				$('#four').click(function() {
					$('#three').addClass('done');
					$('#three').removeClass('current');
					$('#four').addClass('current');
					$('#four').removeClass('active');
					document.getElementById('info').innerHTML="<h5>The Continental Divide</h5> <p>The winter left the land, opening up the waterways for travel once more. After long, slow progress, Lewis and Clark finally made it to the continental divide. Waterfalls greatly slowed down the party, taking them a month just to get past them. But at last, they were on their way.</p> <p>Click Button #5 to continue.</p>";
					$('#five').click(function() {
						$('#four').addClass('done');
						$('#four').removeClass('current');
						$('#five').addClass('current');
						$('#five').removeClass('active');
						document.getElementById('info').innerHTML="<h5>The Pacific at Last</h5> <p>After countless hardships and many months, the group finally saw the pacific. With the winter again threatening them, they made a fort: Fort Clatsop. Again named after the natives, another winter was spent away from home. The expedition eagerly awaited a ship to come into the Columbus river. A ship did, however the natives did not tell the men this. So they waited out the winter.</p> <p>Click Button #6 to continue.</p>";
						$('#six').click(function() {
							$('#five').addClass('done');
							$('#five').removeClass('current');
							$('#six').addClass('current');
							$('#six').removeClass('active');
							document.getElementById('info').innerHTML="<h5>Lewis and Clark Split Up</h5> <p>Another winter passed and the party was ready to turn back around. Back over the mountains they went. Unfortunately, they had some trouble with the natives and they were forced to steal another boat so they could venture back. On the return, Clarke and Lewis split their party and went separate ways. Clark's groups lost many of its horses to the Crows, and Lewis was accidentally shot. Other than these mishaps, both parties made it back to the Missouri river where they once again united for their journey.</p> <p>Click Button #7 to continue.</p>";
							$('#seven').click(function() {
								$('#six').addClass('done');
								$('#six').removeClass('current');
								$('#seven').addClass('current');
								$('#seven').removeClass('active');
								document.getElementById('info').innerHTML="<h5>Fort Mandan (Again)</h5> <p>The tired party finally arrived back at their fort: Fort Mandan. Parting ways with many individuals, including Sacagawea, the expedition was on its home stretch. There was just one more hurdle to jump. The Teton Sioux were still stood between them and their homes.</p> <p>Click Button #8 to continue.</p>";
								$('#eight').click(function() {
									$('#seven').addClass('done');
									$('#seven').removeClass('current');
									$('#eight').addClass('current');
									$('#eight').removeClass('active');
									document.getElementById('info').innerHTML="<h5>Home Sweet Home</h5> <p>At long last, Lewis and Clark made it back to the United States. After two years, four months, and ten days, they party had been left for dead. Their surprising return renowned the as heroes in the land. They did the impossible and made their way across the entire United States. While they were not successful with good relations with every native tribe they came by, Lewis and Clarke had a huge legacy. They were the first to find a way to the Pacific and made some of the first maps of the western part of the continent. Western expansion was a direct result of this successful journey.</p>";
								});
							});
						});
					});
				});
			});
		});
	});
});
