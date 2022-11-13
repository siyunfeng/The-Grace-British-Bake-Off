const bakery = [
  {
    name: 'Fall Chocolate Chunk Cookies',
    price: 15,
    quantity: 100,
    imageUrl:
      'https://cloudfront-us-east-1.images.arcpublishing.com/tronc/462PHXBW2ZEDRLXNILK6TMSNLY.jpg',
    description: `When it comes to fall spices, we're here for timely, deep flavors of ginger, nutmeg, clove, cinnamon and molasses — because pumpkin isn't the only fall flavor to love. This rich, seasonal cookie is sure to delight thanks to nuanced flavors freckled with melty Valrhona chocolate. It's crispy, it's ooey-gooey, and it's only here for the season, so don't sleep on this one. `,
  },
  {
    name: 'Dark Chocolate Peanut Butter Chip Cookies',
    price: 15,
    quantity: 100,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0100/4575/1377/products/Levain_PDP_DCPBC_Carousel_2_2000x.jpg?v=1659706339',
    description: `Sweet, savory and perfectly balanced, these cookies satisfy cravings for peanut butter and chocolate lovers. Dark chocolate cookie dough is packed with soft, smooth peanut butter chips to create the perfect cookie confection. `,
  },
  {
    name: 'Oatmeal Rasin Cookies',
    price: 15,
    quantity: 100,
    imageUrl:
      'https://californiaraisins.ca/wp-content/uploads/2019/11/Recipe-Crops-Oatmeal-Raisin-Cookies.png',
    description: `Weighing in at six ounces each, these rich and buttery cookies are golden brown on the outside, moist on the inside, and full of plump sweet raisins. `,
  },
  {
    name: `Paul Hollywood's S'mores`,
    price: 15,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2022/09/Smores_1125_V1.jpg',
    description: `In the 1920s in the USA, girl scouts on camp called for more melty, sandwiched marshmallow "Some more!" and s'mores were born. These digestive biscuits are treacly with brown sugar and the marshmallows fragrant with vanilla. `,
  },
  {
    name: `Steph's Zest & Spice Hot Cross Buns`,
    price: 15,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/10/Hot_Cross_Buns_1024x450.png',
    description: `Packed with orange and lemon zest and loads of fruit, these are the perfect Easter treat, although you could omit the crosses and make them for any time of year! `,
  },
  {
    name: `David's Cinnamon Swirls`,
    price: 15,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/09/Cinnamon-Swirls-1024x450-1.png',
    description: `These super-sticky, cinnamon-packed buns are well worth making as a special treat to serve with a cup of strong coffee, the buttercream guilds the lily but the buns are just as nice without it.`,
  },
  {
    name: `Prue Leith's Ginger Biscuits`,
    price: 9,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2017/10/171013_065_Prues_GingerBiscuits_450.jpg',
    description: `The ginger biscuit is one of Britain's favorite biscuits. It makes the perfect partner to a hot cup of tea, as once cooled after cooking, it becomes super hard and so it's the perfect dunking biscuit. `,
  },
  {
    name: 'Strawberry Rose Meringues',
    price: 12,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/12/BIB_Strawberry_Meringues_1125_2.png',
    description: `A hint of rose extract and fresh strawberries give these simple French meringues a delicate yet distinctive flavour, perfect for a stylish afternoon tea.`,
  },
  {
    name: `Kim-Joy's Monster Meringues`,
    price: 9,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/10/Kim_Joy_-Monster_Meringues_1024x450_3.png',
    description: `Perfect for a children's Halloween party, these colourful monster meringues are easy to make and super-effective.`,
  },
  {
    name: `Crystelle's Chai Sunflower Cakes`,
    price: 15,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/11/211014_051C_EP10_ChaiSunflowerCakes-1024x450.jpg',
    description: `Bring a little sunshine and spice to your afternoon tea with these adorable individual sponge cakes. They are intensely aromatic with a beautiful blend of cardamom, cloves and breakfast tea, paired with a sweet and tangy cream cheese frosting.`,
  },
  {
    name: `Paul Hollywood's Caramel Biscuit Bars`,
    price: 20,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/11/newCaramel-Biscuit-bars-1024x450.jpg',
    description: `If there's one thing we deserve after a freezing-cold walk, it's a sweet hit with a hot mug of tea or, even better, hot chocolate. These biscuit bars are just the thing, crisp shortbread biscuit topped with shiny set caramel and coated in smooth milk chocolate. `,
  },
  {
    name: `Paul Hollywood's Jammy Biscuits`,
    price: 20,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/09/Jammy-dodgers_V2-1-1024x450.jpg',
    description: `We all know that ripe, summer raspberries produce the most delicious jam, here it's sandwiched with a buttercream filling between crisp biscuits. `,
  },
  {
    name: `Rahul's Spiced Firework Biscuits`,
    price: 15,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/11/Rahul_fireworkbiscuits_forweb.jpg',
    description: `Sure to be met with plenty of ooohs and aaahs, these fragrant, spiced biscuits, decorated to look like fireworks, are the perfect treat for a bonfire night party.`,
  },
  {
    name: 'Mini Pork Pies',
    price: 15,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/07/BIB_PorkPies_1024x450-1024x450.png',
    description: `These mini pork pies are fun to put together and are a good introduction to working with hot water crust pastry. Use the best ingredients so you can get the best flavour.`,
  },
  {
    name: 'Apple Pie',
    price: 25,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/10/new210914_030B_EP6_ApplePie-1024x450.jpg',
    description: `Our classic apple pie combines tart brambley apples and sweeter dessert apples with a pinch of spice and a crown of buttery spelt pastry. Perfect with a big scoop of vanilla ice cream.`,
  },
  {
    name: `Chig's Chicken, Leek & Mushroom 'Clock' Pies`,
    price: 25,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/11/211007_049B_EP10_ChickenLeekMushroomPies-1024x450.jpg',
    description: `Comfort food meets picnic food with these mini chicken pies, which are flavoured with thyme and tarragon and encased in buttery shortcrust pastry.`,
  },
  {
    name: `Vegan Millionaire's Shortbread`,
    price: 25,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/11/new210915_034B_EP7_VeganMillionaireShortbread-1024x450.jpg',
    description: `With a crumbly shortbread base and fudgy caramel filling, these chocolate-topped bars make a perfect afternoon treat.`,
  },
  {
    name: `Crystelle's Curried Chicken & Potato Terrine Pie`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/10/new210914_031_EP6_CurriedChickenPotatoTerrine-1024x450.jpg',
    description: `Packed full of flavour, this twist on the traditional hand-raised picnic pie is sure to impress your friends and family. Sweet and tangy curried chicken is layered between an aromatic potato curry, with slices of sweet potato, and encased in a spiced hot-water crust.`,
  },
  {
    name: `Herry's Apple & Cinnamon Streusel`,
    price: 35,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/09/Apple-and-Cinnamon-Streusel-1024x450-3.png',
    description: `This moist cake is absolutely packed with apples and pecans. The salted caramel drizzle and streusel topping makes it feel like the perfect coffee-time snack.`,
  },
  {
    name: `Kate's Sticky Toffee Apple Caramel Cake`,
    price: 35,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/09/Sticky_Toffee_Apple_1024x450.png',
    description: `All the elements of a sticky-toffee pudding plus toffee apples in one cake! The sponge layers are made with dates, spices and pieces of dried apple.`,
  },
  {
    name: `Kim-Joy's 'Cosy by the Fire' Winter Scene Biscuit Box`,
    price: 25,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2022/01/Biscuit_Shadow_Box_1024_v2-1024x450.png',
    description: `Get this festive winter wonderland centrepiece with Kim Joy's 'Cosy by the Fire' biscuit shadow box. It's beautiful and perfect with a cup of tea.`,
  },
  {
    name: 'Gingerbread House',
    price: 35,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/12/Gingerbread_house_1024-1024x450.png',
    description: `This beautiful, festive gingerbread house is the perfect way to get the whole family involved in baking for Christmas.`,
  },
  {
    name: 'Christmas Gingerbread Cake',
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/12/201104_053B_GingerXmasCake-1024x450.jpg',
    description: `This ginger-sponge alternative to a traditional fruit Christmas cake doubles as a brilliant activity to keep the whole family occupied as the excitement of the Big Day mounts. `,
  },
  {
    name: 'Chocolate Fudge Cake',
    price: 35,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/11/211014_052B_EP10_ChocFudgeCake-1024x450.jpg',
    description: `This is a decadent celebration cake to satisfy even the most ardent chocoholic.`,
  },
  {
    name: `Rahul's Chocolate, Orange & Ginger Surprise Cake`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/10/Rahul_Surprise_Cake_1125x1125_2.png',
    description: `Cut into this flavourful cake and a cascade of sweets will come tumbling out but don't tell anyone beforehand and let the experience be a surprise.`,
  },
  {
    name: 'Raspberry Chocolate Layer Cake',
    price: 35,
    quantity: 100,
    imageUrl:
      'https://cakebycourtney.com/wp-content/uploads/2021/02/Facetune_31-01-2021-20-11-39-scaled.jpg',
    description: `This Raspberry Chocolate Layer Cake is super moist and layered with smooth chocolate ganache and raspberry filling, all covered in a fudgy chocolate frosting! It's rich, full of chocolate and heavenly!`,
  },
  {
    name: `Ruby's Woo Woo Sandwich Cake`,
    price: 30,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/08/victoria-sponge-cake-1024x450-1024x450.png',
    description: `This classic vanilla sponge is filled with Ruby's homemade strawberry jam and a decadent mascarpone and cream filling topped with fresh peach. It's certainly woo-woo if you soak the peaches in vodka first!`,
  },
  {
    name: `Jürgen's Triple Chocolate Apricot Layer Cake`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/11/new210917_041B_EP8_TripleChocolateApricotLayerCake-1024x450.jpg',
    description: `Inspired by the Austrian speciality sachertorte, this cake is a chocaholic's dream. White, milk and dark chocolate gluten-free sponge layers are sandwiched with slightly tart apricot jam. Shades of white, milk and dark chocolate buttercream create stripes around the outside of the cake that mirror the layers inside.`,
  },
  {
    name: `Giuseppe's Amarene Cherry Cake`,
    price: 35,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/10/Amarene-and-Almond-Gugelhupf-2new-1024x450.jpg',
    description: `A yeasted bundt-style cake, in this case studded with rum-spiked cherries and filled with a vanilla custard, a Gugelhupf was traditionally served at weddings and other celebrations.`,
  },
  {
    name: `Amanda's Rum, Plum & Raisin Cake`,
    price: 35,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/10/Rum-Plum-Pflaumenkuchen-2new-1024x450.jpg',
    description: `This yeasted cake is studded with fragrant, spiced plums and rum-soaked raisins. It's beautiful and warming all at once, and perfect with a cup of tea. `,
  },
  {
    name: `Maggie's Chocolate & Orange Mini Rolls`,
    price: 25,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/09/210814_016B_EP1_ChocolateOrangeMiniRolls-1024x450.jpg',
    description: `Light chocolate sponge, creamy buttercream with a hint of orange and a rich, chocolate ganache coating,`,
  },
  {
    name: `Crystell's 'Kiwi Lime Pie' Pavlova`,
    price: 35,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/10/210814_019A_EP4_Key-wiLimePavlova-1024x450.jpg',
    description: `This vibrant pavlova conjures up memories of exotic holidays and is ideal for a summer barbecue party.`,
  },
  {
    name: `Jürgen's Schwarzwald Mini Rolls`,
    price: 30,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/09/210814_020_EP1_SchwarzwaldRolls-1024x450.jpg',
    description: `Transport yourself to the Black Forest with these German-inspired mini rolls. The tart cherries offset the rich chocolate to perfectly balance out the flavours. Unutterably moreish!`,
  },
  {
    name: `Ruby's Boozy Chai, Cherry & Chocolate Panettones`,
    price: 30,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/12/201014_044B_Panatone-1024x450.jpg',
    description: `Packed with liqueur-laden fruit, these mini panettones are gorgeous! It's beautiful and warming all at once, and perfect with a cup of tea. `,
  },
  {
    name: `Rosie's Date, Cranberry & Mace Panettones`,
    price: 20,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/12/201104_052B_GingerbreadPannetone-1024x450.jpg',
    description: `A delightful seasonal display of snowy panettone hilltops topped with winter-wonderland gingerbread houses. Fluffy and delicious, this decorative twist on an Italian festive classic contains all the traditional flavours of the season.`,
  },
  {
    name: `Hermine's Salmon & Leek, Spinash & Mushrrom Quiches`,
    price: 30,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/11/201009_028_SalmonMushrromQuiches-1024x450.jpg',
    description: `These rich and delicious individual tarts are very filling, each is perfect with salad for lunch. There are two flavours, one for salmon-lovers, and another that is just right for veggies.`,
  },
  {
    name: `Mark's Gimme S'more Brownies`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/10/200905_017B_GimmeSmore-1024x450.jpg',
    description: `Rich and decadent, Mark's wedges of brownie baked on a biscuit base have a final flourish in the Italian meringue topping that turns them from treat to heavenly dessert - truly s'mores in cake form. You can serve the brownies with cream or ice cream if you like.`,
  },
  {
    name: `Freya's Flower Potty Cake`,
    price: 85,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2021/09/210913_026A_Reshoot_EP1_FlowerPottyCake-1024x450.jpg',
    description: `This celebration cake is sure to steal the show at your next get-together - and makes the perfect showpiece for a garden-enthusiast. It has layers of moist chocolate sponge, homemade cherry jam and a liqueur-spiked buttercream, and is also vegan.`,
  },
  {
    name: `David's Fancy Custard Tarts`,
    price: 30,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/09/david-fancy-tarts-forweb-S10E04.jpg',
    description: `These generous-sized tartlets would look perfectly at home in a posh pâtisserie. `,
  },
  {
    name: `Rosie's Salted Caramel, Chocolate & Raspberry Stack`,
    price: 35,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/10/Still-1024x450.png',
    description: `Swirls of salted caramel are baked into the meringue, which is sandwiched with curd, cream and raspberries, and topped with chocolate. `,
  },
  {
    name: `Henry's Tomato & New Potato Tarte Tatin with Crab Salad`,
    price: 35,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/10/Crab_Tomato_Tart_Tatin_1024x450_1.png',
    description: `Potatoes, tomatoes and caramel may sound like an unusual combination of flavours, but topped with a crab salad this makes a fabulous supper. For a light meal serve with a green salad, too.`,
  },
  {
    name: `Steph's Black Forest Chocolate Cake`,
    price: 35,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/10/Black_Forest_Choc_Cake_1024x450_3.png',
    description: `Layers of kirsch-laced Chantilly cream and delicious homemade jam are encased in sponge covered with a rich chocolate ganache, making this a decadent marriage of chocolate cake and Black Forest gâteau. Gold-leaf decorated cherries make it feel extra-special.`,
  },
  {
    name: `Terry's Penguin & Snowmen Cake Pops`,
    price: 20,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/12/Carousel_Cake_Pops_1024_2-1024x450.png',
    description: `What could be cuter for a winter-themed party than these little penguin and snowmen cake pops. Laced with advocaat and with eggnog-flavoured icing, you might even argue that any leftovers make a perfect morning-after treat.`,
  },
  {
    name: `Yan's Christmas Memories Cake Pops`,
    price: 20,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/12/Christmas_Past_Cake_Pops_1024-1024x450.png',
    description: `These cute cake pops would make the perfect sweet treat for a Christmas party or fun alternative to a full-on Christmas cake.`,
  },
  {
    name: `Dave's Chocolate Espresso Martini Battenberg`,
    price: 25,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/09/Chocolate-Espresso-Martini-Battenberg.jpg',
    description: `Almond and mocha sponges are spread with espresso 'jam' that has been laced with vodka and coffee liqueur to give a sophisticated twist to a classic teatime treat.`,
  },
  {
    name: `Peter's Gluten-Free Chocolate Orange Battenberg`,
    price: 25,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/09/GF-Chocolate-Orange-Battenberg.jpg',
    description: `This moist cake gets its flavour from a whole cooked orange`,
  },
  {
    name: `Helena's Wicked Witch Fingers`,
    price: 15,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/09/Witches-Fingers-1024x450-2.png',
    description: `Crisp biscuit, soft caramel, and chocolate - these are so moreish, you'll want to eat not just a finger, but a handful! `,
  },
  {
    name: `Jane's 12 Days of Decorating Biscuits`,
    price: 20,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/05/Xmas_12_Days_Biscuits_1024x450-1024x450.png',
    description: `Crisp Christmas decoration biscuits will last for at least two to three weeks, making them ideal Christmas gifts.`,
  },
  {
    name: `Michelle's Bakewell Bars`,
    price: 30,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/09/Bakewell-Bars-1024x450-2.png',
    description: `These beautiful bars are the smartest confectionery you will ever have - they are very rich and sweet. `,
  },
  {
    name: `Herry's Coffee, Cardamom & HazelNut Bars`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/09/Coffee-Cardamon-Bars-1024x450.png',
    description: `Rich, coffee mousse, crunchy biscuit and lots of hazelnuts make these biscuit bars an irresistible combination. The subtle cardamom spice provides a delicious flavour twist.`,
  },
  {
    name: `Ruby's 'Fit for a Queen' Pie`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/06/Queen_Pie_1024x450.png',
    description: `For lovers of pie and lovers of curry, there is nothing better! Serve this extravaganza with a few green vegetables on the side.`,
  },
  {
    name: `Kim-Joy's Two-Tier Lavender & Lemon Curd Fox Cake`,
    price: 85,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/06/Fox_Cake_1024x450.png',
    description: `This humdinger of a vegan celebration cake requires a bit of skill, but is sure to impress. Aquafaba is the drained water from a can of chickpeas.`,
  },
  {
    name: `Briony's Nana Pat Kagekone`,
    price: 30,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/06/Nana_Pat_Kagekone_1024x450.png',
    description: `These Danish pastries are topped with dried blueberries`,
  },
  {
    name: `Kim-Joy's Choux Au Craquelin Religieuse`,
    price: 9,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/06/Orange_Religieuse_1024x450_1-1024x450.png',
    description: `These delicious pastries with orange creme diplomat are impressive enough to be found in a Parisienne bakery, and are so good served with a cup of strong coffee.`,
  },
  {
    name: `Michelle's Ty Tylwyth Teg (Fairy's House)`,
    price: 85,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/08/Fairy-House-1024x450-1024x450.png',
    description: `This carrot and walnut cake is the perfect woodland-themed celebration cake.`,
  },
  {
    name: `Alice's Chocolate & Coconut New Zealand Lamb Cake`,
    price: 50,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/09/NZLamb-1024x450.png',
    description: `Not the meaty kind, but the biscuit kind - this incredible illusion sheep is really a biscuit ball dotted with maracons - ideal for sharing at a party.`,
  },
  {
    name: `Steph's 'Cho-ffee' Lava Bombe Cake`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/09/Choffee_Bombe_1024x450.png',
    description: `This is a chocoholics dream. The rich, dark chocolate mousse hides a coffee-mousse centre all robed in a chocolate mirror glaze and served with almond brittle.`,
  },
  {
    name: `Rowan's Chocolate & Cherry Tribute to Marie Antoinette Cake`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/09/Marie-Antoinette-Cake.jpg',
    description: `This cake, inspired by Rowan's bust of Marie Antoinette is rich, kirsch-soaked chocolate sponge, filled with coffee-flavoured mascarpone and spread with a delicious chocolate ganache. `,
  },
  {
    name: `Briony's Santa's Train Station Gingerbread`,
    price: 35,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/01/Gingerbread_Train_1024_2-1024x450.png',
    description: `When is a gingerbread house not a house? When it's a train station (complete with train), of course!`,
  },
  {
    name: `Peter's Blackberry & Lemon Tart`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/10/201008_025B_BlackberryLemonTart-1024x450.jpg',
    description: `Peter's sharp citrus and berry tart is perfect for a dinner party dessert.`,
  },
  {
    name: `Marc's Retro Ice Cream Parlour Cake`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/11/201010_031B_SweetNuttyIceCreamCake-1024x450.jpg',
    description: `The ice cream layers are to freeze and set perfectly. The Paradise pears are in season which makes this cake even more delicious! `,
  },
  {
    name: `Dave's Celebration of Chocolate Cube Cake`,
    price: 55,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/11/201012_040B_CelebrationChocCubeCake-1024x450.jpg',
    description: `A celebration cake of individual cake cubes, each with a delicious filling and stacked on an edible biscuit stand - this bake has something for everyone!`,
  },
  {
    name: `Jame's Cola Cake`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/12/201106_060C_ColaCake-1024x450.jpg',
    description: `This reimagined version of James's 'Cola Ham & All The Trimmings' illusion cake is no less impressive. The sponges are a cross between a sponge and a brownie, there are four layers to this cake.`,
  },
  {
    name: `Laura's Rainbow Dessert Cake`,
    price: 45,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2020/11/201012_041B_RainbowCake-1024x450.jpg',
    description: `This delicious carrot cake will taste better 24 hours after baking.`,
  },
  {
    name: `Jon's Family Ginger Cake`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/06/Ginger_Family_Cake_1024x450.png',
    description: `This light and fluffy cake is perfect for a family gathering, or even to serve as a Christmas cake.`,
  },
  {
    name: `Flo's Spiced Treacle & Ginger Biscuits`,
    price: 9,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/05/Xmas_Treacle_Biscuits_1024x450_3-1024x450.png',
    description: `These dark and spicy biscuits have a real snap. They keep well for Christmas`,
  },
  {
    name: `Jame's Steamed Orange & Ginger Pudding`,
    price: 20,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/11/Orange_Ginger_Pudding_1125.png',
    description: `Just the thing for a wintery day. Served with an orange and ginger compote and spiced chocolate custard.`,
  },
  {
    name: `Tom's Gilded Pear & Cardamom Cake`,
    price: 40,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/11/Guilded_Pear_1125.png',
    description: `This spiced sponge, layered with fruit compote and cardamom buttercream, is topped with a golden pear.`,
  },
  {
    name: `Flo's Gin Jam Butties Biscuits`,
    price: 15,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/11/Gin_Jams_1125.png',
    description: `These are cute, crisp and buttery shortbread-like biscuits in the shape of bread slices, sandwiched together with a simple buttercream and homemade jam and laced with raspberry gin.`,
  },
  {
    name: `Kate's Blueberry Buns`,
    price: 9,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/09/Blueberry_Teacakes_1024x450.png',
    description: `Serve these teacakes warm with cinnamon butter and fresh blueberry compote.`,
  },
  {
    name: `Yan's Mango Coconut Fruit Hat Pudding`,
    price: 20,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/11/Mango_Coconut_Pudding_1125.png',
    description: `This light sponge is flavoured with lime and ginger, surrounded by fresh mangoes and decorated with crunchy caramelised coconut. The tropical theme continues with coconut custard to serve.`,
  },
  {
    name: `Triple Chocolate Mini Cakes`,
    price: 30,
    quantity: 100,
    imageUrl:
      'https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2022/09/Triple_Chocolate_Mini_Cakes_1125_V1.jpg',
    description: `Ripe banana provides deep, honeyed-sweetness in these little cakes, which works well with the bitterness in the double hit of dark chocolate from both the frosting and the ganache.`,
  },
];

module.exports = bakery;
