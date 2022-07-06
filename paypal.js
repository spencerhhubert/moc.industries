function updateQuantity(tierId, readoutId, multiplier=1) {
	let node1 = document.getElementById(tierId)
	let node2 = document.getElementById(readoutId)
	node2.innerHTML = `$${calculateAmount(tierId).item_total} + $${calculateAmount(tierId).shipping} Shipping`
}

function calculateAmount(tierId) {
  let node = document.getElementById(tierId)
  let quantity = node.value
  let item = items[tierId]
  let total = {
    "item_total": item.price * quantity,
    "shipping": item.shipping_per_unit * quantity
  }
  if (tierId == "tier1") {
	total.shipping = item.shipping_per_unit
  }
  return total
}

paypal.Buttons({
  fundingSource: paypal.FUNDING.PAYPAL,
  createOrder: function(data, actions) {
    // Set up the transaction
    return actions.order.create({
      purchase_units: [{
        amount: {
            currency_code: "USD",
            value: calculateAmount("tier1").item_total + items["tier1"].shipping_per_unit,
            breakdown: {
              item_total: {
                value: calculateAmount("tier1").item_total,
                currency_code: "USD",
              },
              shipping: {
                value: items["tier1"].shipping_per_unit,
                currency_code: "USD",
              },
          }
        }
      }]
    });
  }
}).render('#paypal-button-container1');

paypal.Buttons({
  fundingSource: paypal.FUNDING.PAYPAL,
  createOrder: function(data, actions) {
    // Set up the transaction
    return actions.order.create({
      purchase_units: [{
        amount: {
            currency_code: "USD",
            value: calculateAmount("tier1").item_total + calculateAmount("tier2").shipping,
            breakdown: {
              item_total: {
                value: calculateAmount("tier1").item_total,
                currency_code: "USD",
              },
              shipping: {
                value: calculateAmount("tier2").shipping,
                currency_code: "USD",
              },
          }
        }
      }]

    });
  }
}).render('#paypal-button-container2');
