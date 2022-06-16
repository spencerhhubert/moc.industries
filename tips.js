//generate this from output of python script
const tips = [
    {
        "category": "Circles",
        "path": "circles",
        "pics": [
            {
                "name": "circles02.png",
                "credit": ""
            },
            {
                "name": "circles.png",
                "credit": ""
            },
            {
                "name": "circles01.png",
                "credit": ""
            }
        ]
    },
    {
        "category": "Round Walls",
        "path": "round_walls",
        "pics": [
            {
                "name": "1x2_round_plates.png",
                "credit": ""
            }
        ]
    },
    {
        "category": "Slopes",
        "path": "slopes",
        "pics": [
            {
                "name": "cheese_graders_and_brackets_slope.png",
                "credit": ""
            },
            {
                "name": "cheese_slope_brackets_and_headlights.png",
                "credit": ""
            }
        ]
    },
    {
        "category": "Stud Inversion",
        "path": "stud_inversion",
        "pics": [
            {
                "name": "1x1_modified_plate_inversion.png",
                "credit": ""
            },
            {
                "name": "brackets_inversion.png",
                "credit": ""
            },
            {
                "name": "cheese_slope_plate.png",
                "credit": ""
            },
            {
                "name": "headlight_inversion.png",
                "credit": ""
            },
            {
                "name": "1x2_round_plate.png",
                "credit": ""
            },
            {
                "name": "jumper_inversion.png",
                "credit": ""
            }
        ]
    },
    {
        "category": "Trees",
        "path": "trees",
        "pics": [
            {
                "name": "technic_connectors.png",
                "credit": ""
            },
            {
                "name": "grass_stems.png",
                "credit": ""
            },
            {
                "name": "animal_pieces_tree01.png",
                "credit": ""
            },
            {
                "name": "animal_pieces_tree02.png",
                "credit": ""
            }
        ]
    },
    {
        "category": "Water",
        "path": "water",
        "pics": [
            {
                "name": "gradient_and_tiles02.png",
                "credit": ""
            },
            {
                "name": "studs_stacked.png",
                "credit": ""
            },
            {
                "name": "gradient_and_tiles03.png",
                "credit": ""
            },
            {
                "name": "gradient_and_tiles.png",
                "credit": ""
            }
        ]
    },
]

let contents = []
let mega_html = ""
mega_html += "<h3>Table of Contents</h3><ul>"
for (let i=0; i<tips.length; i++) {
	name = tips[i].category
	contents.push(name)
	mega_html += `<li><a href="#${name.replace(' ', '_')}">${name}</a></li>`
}
mega_html += "</ul>"

for (let i=0; i<tips.length; i++) {
	let category = tips[i]
	mega_html += `<div class="row align-items-center">`
		mega_html += `<div class="col-9">`
			mega_html += `<h3 id="${category.category.replace(' ', '_')}">${category.category}</h3>`
		mega_html += `</div>`
		mega_html += `<div class="col">`
			mega_html += `<p class="share text-right" onclick="share('https://moc.industries/tips#${category.category.replace(' ', '_')}', this)">📋 Share</p>`
		mega_html += `</div>`
	mega_html += `</div>`
	for (let j=0; j<category.pics.length; j++) {
		let tip = category.pics[j]
		let file = tip.name
		let name = (tip.name.slice(0, tip.length-4)).replace('_', ' ')
		mega_html += `<div class="row justify-content-center">`
		mega_html += `<img src="images/tips/${category.path}/${file}" alt="LEGO Technique ${category.category} ${name}">`
		if (tip.credit != "") {
			mega_html += "By person"
		}
		mega_html += `</div>`
	}
}
let node = document.getElementById("tips")
node.innerHTML += mega_html

function share(link, node) {
	navigator.clipboard.writeText(link)
	let previous_content = node.innerHTML
	node.innerHTML = "✅ Copied!"
	setTimeout(function() {
		node.innerHTML = previous_content
	}, 1500)
}
