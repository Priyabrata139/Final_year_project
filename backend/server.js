const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");
const PORT = process.env.PORT || 4000;

// UncaughtException Error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  /// bot code
  const { Telegraf } = require("telegraf");
  const { message } = require("telegraf/filters");
  const bot = new Telegraf("6054329525:AAHvM4zI1cqp3xWbshhvxinqm1KW9gOJi9s");
 
  const commandsString = `
/start
/Product_Inquiry
/Order_Tracking
/Returns_Refunds
/Shipping_Information
/Payment_Options
/Order_Processing
/Account_and_Security
/Customer_Support
`;
const Customer_Support=`
/How_can_I_contact_your_customer_support_team?

/What_are_your_customer_support_hours?

/Do_you_have_a_live_chat_or_phone_support_option?

/How_long_does_it_typically_take_to_receive_a_response_from_customer_support?

`;
const cs1=`You can contact our customer support team through multiple channels. You can reach out to us via email at [priyabratamaji139@gmail.com], call our toll-free number at 9749518128, or use the live chat feature on our website. Our support team is available [days/hours] to assist you with any questions or concerns.`;
const cs2=`Our customer support team is available to assist you [days/hours]. Please note that our support hours may vary during weekends and holidays. For the most accurate information, please refer to our Contact Us page on our website.`;
const cs3=`Yes, we offer both live chat and phone support options for your convenience. You can access the live chat feature by clicking on the chat icon on our website, or you can call our toll-free number 9749518128 to speak directly with a customer support representative.`;
const cs4=`We strive to provide timely responses to all customer inquiries. Our goal is to respond to your queries within 24 hours during our customer support hours. However, response times may vary depending on the volume of inquiries received. Rest assured, we are committed to assisting you as quickly as possible.`;

const Account_and_Security=`
/How_do_I_create_an_account_on_your_website?

/How_can_I_reset_my_password_if_I_forget_it?

/Is_my_personal_information_secure_on_your_website?

/Can_I_update_my_account_details_or_shipping_address?
`;
const as1=`To create an account on our website, click on the "Sign Up" or "Register" button located on the top-right corner of our homepage. Fill in the required information, such as your name, email address, and password. Once submitted, your account will be created, and you can start enjoying the benefits of being a registered user.`;
const as2=`If you forget your password, you can click on the "Forgot Password" link on the login page. Follow the instructions provided, and a password reset link will be sent to your registered email address. Click on the link to set a new password for your account.`;
const as3=`Yes, we take the security and privacy of your personal information seriously. We employ industry-standard security measures, such as encryption and secure protocols, to protect your data during transmission and storage. Please refer to our Privacy Policy for more details on how we handle and safeguard your information.`;
const as4=`Absolutely! You can update your account details, including your shipping address, by logging into your account and navigating to the account settings or profile section. From there, you can make the necessary changes and save the updated information.`;

const Product_Inquiry=`
/Can_I_get_more_details_about_a_specific_product?

/Are_the_product_images_on_your_website_accurate?

/Do_you_offer_product_warranties?

/Can_I_request_product_customization_or_personalization?
`;
const pi1=`Certainly! Please click on the product listing or product image to view more detailed information about the item. You will find specifications, features, dimensions, materials, and other relevant details to help you make an informed purchase decision.`;
const pi2=`Yes, we strive to provide accurate and high-quality product images on our website. However, please note that colors may vary slightly due to different monitor settings and lighting conditions. We recommend reading the product description and reviews to gather more information about the product.`;
const pi3=`Yes, we offer product warranties on select items. The warranty details can be found on the product page or in the product packaging. If you have any specific questions about a product's warranty, please reach out to our customer support team for further assistance.`;
const pi4=`Customization or personalization options may be available for certain products. Please check the product listing or contact our customer support team to inquire about the availability of customization options and any associated fees.`;

const orderingProcess = `
/How_do_I_place_an_order_on_your_website?

/Can_I_make_changes_to_my_order_after_it_has_been_placed?

/What_payment_methods_do_you_accept?

/Is_it_safe_to_enter_my_credit_card_information_on_your_website?
`;
const op1=`To place an order on our website, follow these steps:
Browse our products and select the item(s) you wish to purchase.
Add the selected item(s) to your cart.
Proceed to the checkout page and enter your shipping and billing information.
Review your order details and complete the payment process.
Once the order is successfully placed, you will receive an order confirmation via email.`;
const op2=`We understand that you may need to make changes to your order. Please contact our customer support team as soon as possible with your order number, and we will do our best to accommodate your request if the order hasn't been processed or shipped yet.`;
const op3=`We accept various payment methods, including credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and bank transfers. You can choose the most convenient option during the checkout process.`;
const op4=`Yes, it is safe to enter your credit card information on our website. We use industry-standard encryption and security measures to protect your personal and financial information during the payment process.`;

const Shipping_Information=`
/How_long_will_it_take_for_my_order_to_be_shipped?

/How_can_I_track_my_order?

/Do_you_offer_international_shipping?

/What_are_the_shipping_costs?
`;
 const sd1=`The shipping time depends on the destination and the availability of the product. Once your order is confirmed, we strive to process and ship it within [X] business days. You will receive a shipping confirmation email with tracking details once the order is on its way.`;
 const sd2=`To track your order, please visit the "Track Order" page on our website and enter your order number and email address. Alternatively, you can click on the tracking link provided in the shipping confirmation email.`;
 const sd3=`Yes, we offer international shipping to select countries. During the checkout process, you can enter your shipping address to see if we deliver to your location. Please note that international orders may be subject to customs fees and import duties, which are the responsibility of the recipient.`;
 const sd4=`Shipping costs vary depending on the weight, dimensions, and destination of the package. You can view the estimated shipping costs during the checkout process after entering your shipping address. We may also offer free shipping promotions for orders that meet certain criteria.`;

const Returns_Refunds=`/What_is_your_return_policy?

/How_do_I_initiate_a_return_or_exchange?

/How_long_does_it_take_to_process_a_refund?

/Are_there_any_items_that_cannot_be_returned?
`;
const rf1=`Our return policy allows you to return eligible products within [X] days of receiving them. The items must be in their original condition, unused, and in their original packaging. Please refer to our Returns and Refunds page on our website for detailed instructions and requirements.`;
const rf2=`To initiate a return or exchange, please contact our customer support team with your order number and details of the item(s) you wish to return or exchange. Our team will provide you with further instructions and assist you throughout the process.`;
const rf3=`Once we receive the returned item(s) and confirm that they meet our return policy requirements, we will initiate the refund process. The time it takes for the refund to be processed and reflected in your account may vary depending on the payment method used. Typically, it takes [X] business days for the refund to be processed.`;
const rf4=`For hygiene and safety reasons, certain items such as personal care products, intimate apparel, and perishable goods are non-returnable. Please refer to our Returns and Refunds page or contact our customer support team for specific details regarding the eligibility of a particular item for return.`;

  try {

    bot.start((ctx) =>
      ctx.reply(
        "Hello!\n" + " Welcome to Ekiethel.\n" + " How can I assist you today?"
      )
    );

   
    bot.on(message("sticker"), (ctx) => ctx.reply("hiiiii"));
    bot.hears('hi', (ctx) => ctx.reply('Hey there'));
    bot.command("Product_Inquiry", (ctx) =>
      ctx.reply(Product_Inquiry)
    );
    bot.command("Order_Tracking", (ctx) =>
    ctx.reply("To track your order, please provide me with your order number, and I will check it for you.")
  );
  bot.command("Returns_Refunds", (ctx) =>
    ctx.reply(Returns_Refunds)
  );
  bot.command("Shipping_Information", (ctx) =>
    ctx.reply(Shipping_Information)
  );
  bot.command("Payment_Options", (ctx) =>
    ctx.reply("We accept various payment methods, including credit cards, debit cards, PayPal, and bank transfers. You can choose the most convenient option during the checkout process.")
  );
  bot.command("Order_Processing", (ctx) =>
    ctx.reply(orderingProcess)
  );
  bot.command("Account_and_Security", (ctx) =>
    ctx.reply(Account_and_Security)
  );
  bot.command("Customer_Support", (ctx) =>
  ctx.reply(Customer_Support)
);
bot.command("How_can_I_contact_your_customer_support_team", (ctx) =>
  ctx.reply(cs1)
);
bot.command("What_are_your_customer_support_hours", (ctx) =>
  ctx.reply(cs2)
);
bot.command("Do_you_have_a_live_chat_or_phone_support_option", (ctx) =>
  ctx.reply(cs3)
);
bot.command("How_long_does_it_typically_take_to_receive_a_response_from_customer_support", (ctx) =>
  ctx.reply(cs4)
);
bot.command("How_do_I_place_an_order_on_your_website", (ctx) =>
  ctx.reply(op1)
);
bot.command("Can_I_make_changes_to_my_order_after_it_has_been_placed", (ctx) =>
  ctx.reply(op2)
);
bot.command("What_payment_methods_do_you_accept", (ctx) =>
  ctx.reply(op3)
);
bot.command("Is_it_safe_to_enter_my_credit_card_information_on_your_website", (ctx) =>
  ctx.reply(op4)
);
bot.command("How_long_will_it_take_for_my_order_to_be_shipped", (ctx) =>
  ctx.reply(sd1)
);
bot.command("How_can_I_track_my_order", (ctx) =>
  ctx.reply(sd2)
);
bot.command("Do_you_offer_international_shipping", (ctx) =>
  ctx.reply(sd3)
);
bot.command("What_are_the_shipping_costs", (ctx) =>
  ctx.reply(sd4)
);
bot.command("How_do_I_initiate_a_return_or_exchange", (ctx) =>
  ctx.reply(rf2)
);
bot.command("What_is_your_return_policy", (ctx) =>
  ctx.reply(rf1)
);
bot.command("How_long_does_it_take_to_process_a_refund", (ctx) =>
  ctx.reply(rf3)
);
bot.command("Are_there_any_items_that_cannot_be_returned", (ctx) =>
  ctx.reply(rf4)
);
bot.command("Can_I_get_more_details_about_a_specific_product", (ctx) =>
  ctx.reply(pi1)
);
bot.command("Are_the_product_images_on_your_website_accurate", (ctx) =>
  ctx.reply(pi2)
);
bot.command("Do_you_offer_product_warranties", (ctx) =>
  ctx.reply(pi3)
);
bot.command("Can_I_request_product_customization_or_personalization", (ctx) =>
  ctx.reply(pi4)
);
bot.command("How_do_I_create_an_account_on_your_website", (ctx) =>
  ctx.reply(as1)
);
bot.command("How_can_I_reset_my_password_if_I_forget_it", (ctx) =>
  ctx.reply(as2)
);
bot.command("Is_my_personal_information_secure_on_your_website", (ctx) =>
  ctx.reply(as3)
);
bot.command("Can_I_update_my_account_details_or_shipping_address", (ctx) =>
  ctx.reply(as4)
);
    // bot.on(message("text"), ctx => ctx.reply("bestie bee plz use commands only\n"+ commandsString));
    bot.on(message("text"), (ctx) => {
      const text_message = ctx.update.message.text;
      console.log(ctx.update.message.text);
      if (text_message == "my orders") {
        ctx.reply("order list:...");
      } else if (text_message == "laptop" || text_message == "Laptop") {
        ctx.reply(`
     
Within laptops we have 'Apple M2 Pro'.

                            ...It's freathers...
                            
10‑core CPU, 16‑core GPU and 16‑core Neural Engine
16GB unified memory
512GB SSD storage
67W USB-C Power Adapter
35.97 cm (14.2-inch) Liquid Retina XDR display²
Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port
Backlit Magic Keyboard with Touch ID - US English
        `);
      } else if (text_message == "Mobile" || text_message == "mobile") {
        ctx.reply(`
     
Within Mobiles we have 'Redmi Note 11'.

                            ...It's freathers...
                            
        Horizon Blue, 6GB RAM, 128GB Storage)|90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included
        `);
      } else ctx.reply("plz use commands only\n" + commandsString);
    });
    // bot.command('hipster', Telegraf.reply('λ'));

    bot.launch();
  } catch (err) {
    console.log("unexpexted command");
    console.log(err);
  }
  ///bot code
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
