const normal_paypal_html = `
<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="2WAAR8Y979PYS">
<input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`
//there's a thing in the button code that lets you add a textbox type thing. we're going to do this for the coupon code tracking
const discount_paypal_html = ``
const pickup_paypal_html = ``
const discount_and_pickup_html = ``

//beginning state
let paypal_state = normal_paypal_html
changePaypalState(normal_paypal_html)

//yes you can just read them
//use them all to make sure they work why don't you
valid_promos = ["rebellug", "Real Monkey Business"]

function tryApplyDiscount() {
	status_node = document.getElementById("promo_status")
	price_node = document.getElementById("price");
	code_node = document.getElementById("promo_code");
	if (valid_promos.includes(code_node.value)) {
		price_node.innerHTML = "$13.00"
		price_node.style.color = "Green"
		status_node.innerHTML = '✅'
		changePaypalState(discount_paypal_html)
	} else {
		status_node.innerHTML = '❌'
		changePaypalState(normal_paypal_html)
	}
//load the discount html...
}
function changePickupStatus() {
	changePaypalState(pickup_paypal_html)
}

function changePaypalState(desired_state) {
	paypal_state = desired_state
	paypal_node = document.getElementById("paypal_html")
	paypal_node.innerHTML = paypal_state
}
