let referrer = params;  // Get referral ID from link
let user_id = user.telegramid;

// Check if the user has been referred already
if (!user.getProperty("referred_by")) {
  user.setProperty("referred_by", referrer, "string");

  // Reward the referrer
  if (referrer) {
    let referrerBalance = Libs.ResourcesLib.anotherUserRes("balance", referrer);
    referrerBalance.add(10);  // Reward 10 points
    Bot.sendMessageToChatWithId(referrer, "🎉 You've referred a new user! +10 points");
  }
}

Bot.runCommand("/menu");
