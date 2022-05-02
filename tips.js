//generate this from output of python script
const tips = [
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
    }
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
	mega_html += `<p class="share text-right" onclick="navigator.clipboard.writeText('https://moc.industries/tips#${category.category.replace(' ', '_')}')">📋 Share</p>`
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
