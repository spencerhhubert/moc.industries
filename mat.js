const normal_paypal_html = `
<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="3RVTR58FG855Q">
<input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
`
//there's a thing in the button code that lets you add a textbox type thing. we're going to do this for the coupon code tracking
const discount_paypal_html = `
<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="7K2HGHPJESK52">
<table>
<tr><td><input type="hidden" name="on0" value="Discount Reason"></td></tr><tr><td><input id="paypal_discount_reason" type="hidden" name="os0" maxlength="200"></td></tr>
</table>
<input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

`
const pickup_paypal_html = discount_paypal_html

const discount_and_pickup_html = `
You may only choose onnne!
`

let discount_code = ""

//beginning state
let paypal_state = normal_paypal_html
changePaypalState(normal_paypal_html)

let pickup_state = false
let discount_state = false

//yes you can just read them
//use them all to make sure they work why don't you
valid_codes = ["rebellug", "brickworld"]

function changeVisualDiscount() {
	price_node = document.getElementById("price");
	if (discount_state) {
		price_node.innerHTML = "$20.00"
		price_node.style.color = "Black"
		discount_state = false
	} else {
		price_node.innerHTML = "$16.00"
		price_node.style.color = "Green"
		discount_state = true
	}
}

function changePickupState(code) {
	if (pickup_state) {
		pickup_state = false
		changeVisualDiscount()
		changePaypalState(normal_paypal_html)
	} else {
		pickup_state = true
		changeVisualDiscount()
		changePaypalState(pickup_paypal_html)
		document.getElementById("paypal_discount_reason").value = code
	}
}

function sendDiscountCode() {
	status_node = document.getElementById("promo_status")
	code_node = document.getElementById("promo_code")
	tryAppleDiscount(code_node.value)
}

function sendPickup(name) {
	tryApplyDiscount(name)
}

function tryApplyDiscount(code) {
	if (valid_promos.includes(code)) {
		status_node.innerHTML = '✅'
		discount_state = true
		changeVisualDiscount()
		changePaypalState(discount_paypal_html)
		discount_code = code
	} else {
		status_node.innerHTML = '❌'
		discount_state = false
		changeVisualDiscount()
		changePaypalState(normal_paypal_html)
	}
}

function changePaypalState(desired_state) {
	paypal_state = desired_state
	paypal_node = document.getElementById("paypal_html")
	paypal_node.innerHTML = paypal_state
}
