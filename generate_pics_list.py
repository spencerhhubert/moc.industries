# uhh basically I don't want to use node.js or php or something, so this generates a list that you then put in the javascript file for all the pics on the tips page.
import os
import json

def deunderscore(string):
	return string.replace('_', ' ')

mega_output = []
root = "images/tips/"
categories = os.listdir(root)
for category in categories:
	category_object = {}
	category_path = os.path.join(root, category)
	pics = os.listdir(category_path)
	category_object["category"] = deunderscore(category.title())
	category_object["path"] = category
	category_object["pics"] = []
	for pic in pics:
		pic_object = {}
		pic_object["name"] = pic
		pic_object["credit"] = ""
		category_object["pics"].append(pic_object)
	mega_output.append(category_object)

print(json.dumps(mega_output, indent=4))
	
