const check = require('@skiddph/domain-checker');

async function start() {
  const query = "skidd-app.app";
  console.log('Vendors:', Object.keys(check(query)))
  await check(query)['google']()
    .then(e => {
      console.log(
        `\tvendor: ${e.title}\n`,
        `\twebsite: ${e.website}\n`
      )
      e.result.forEach(
        ({available, sld, tld, currency, price}) => 
          console.log(available, sld+tld, `${currency} ${price}`));
    })
}

start()