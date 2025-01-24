"use strict"
// Shirt Order Customizer
// Step 1: Store user information (Variables and Data Types)
let customerName = "Sarah";    // --> String: Who is ordering the shirts
let shirtQuantity = 3;        //--> Number: How many shirts they want
let isRushDelivery = true;    // --> Boolean: Whether they want fast delivery
let shirtMessage = null;      //--> Null: No custom message yet
let giftWrap;                 // --> Undefined: Gift wrap option not set yet


// Step 2: Calculate pricing (Arithmetic Operators)
let basePrice = 9.99;         //--> Base cost per shirt
let customizationFee = 4.50;  //--> Extra cost for custom design
let rushDeliveryFee = 5.99;   //--> Extra cost for fast delivery
let subtotal = (basePrice + customizationFee) * shirtQuantity;
let totalPrice = isRushDelivery ? subtotal + rushDeliveryFee : subtotal;

// Step 3: Check order conditions (Comparison and Logical Operators)
let isBulkOrder = shirtQuantity >= 5;
let canGetDiscount = isBulkOrder && !isRushDelivery;

// Step 4: Create order messages (Template Literals and String Concatenation)
let orderConfirmation = `Thank you for your order, ${customerName}!`;
let priceMessage = `Total cost: $${totalPrice.toFixed(2)}`;

// Step 5: Handle quantity calculations (Type Coercion)
let standardPrice = shirtQuantity + " shirts"; //--> String concatenation
let discountedItems = shirtQuantity + 1;       //--> Numeric addition

// Step 6: Check order status (Conditional/Ternary Operator)
let deliveryType = isRushDelivery ? "Express" : "Standard";
let qualifiesForFreeShipping = shirtQuantity > 10 || isRushDelivery;

// Step 7: Display order details (Console Output)
console.log(orderConfirmation);  //-->  string value
console.log(priceMessage);//--> string value
console.log(`Delivery Method: ${deliveryType}`);//--> string value
console.log(`Free Shipping: ${qualifiesForFreeShipping}`);//--> string value
console.log(`Discount Applied: ${canGetDiscount}`);//--> string value

const newNumber = 3