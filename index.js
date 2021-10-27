$('.dababy-img').hide()

// no and yes 

$('.q-area__mcq').on('click', '.no-btn', function () {
   location.href = "./pages/no.html";
});

$('.q-area__mcq').on('click', '.yes-btn', function () {
   $('.q-area__h2').text("Do you like fish? ( not as a pet ) ");
   $('.mcq-1').css('display', 'inline-block').addClass('ymf').text("Yes my favorite");
   $('.mcq-2').css('display', 'inline-block').addClass('nbf').text("Not a big fan but i would eat it");
   $('.mcq-3').removeClass('yes-btn').addClass('hi').text("Hate it would rather swallow a raw egg");
   $('.mcq-4').removeClass('no-btn').addClass('veg').text("I am vegan or smth 🥦");
   let audio = new Audio('./assets/letsgo.mp3');
   audio.play();
   $('.dababy-img').toggle('slow')
   setTimeout(() => {
      $('.dababy-img').hide();
   }, 3000);
});

//  fish

$('.q-area__mcq').on('click', '.ymf', function () {
   $('.q-area__h2').text("A farmer has 666 apple trees in 26 of march 1996 and each of them make 450 apples per year how many apples does he have in 13th july 2002 assume each year has 365 days (no calc pls closest answer)");
   $('.mcq-1').removeClass('ymf').addClass('23').text("god knows 2.3 m maybe");
   $('.mcq-2').removeClass('nbf').addClass('16').text("1,677,023");
   $('.mcq-3').removeClass('hi').addClass('2').text("around 2 m");
   $('.mcq-4').removeClass('veg').addClass('15').text("like 1.5 m");
});

$('.q-area__mcq').on('click', '.nbf', function () {
   $('.q-area__h2').text("A farmer has 666 apple trees in 26 of march 1996 and each of them make 500 apples per year how many apples does he have in 13th july 2002 assume each year has 365 days (no calc pls closest answer)");
   $('.mcq-1').removeClass('ymf').addClass('23').text("god knows 2.3 m maybe");
   $('.mcq-2').removeClass('nbf').addClass('16').text("1,677,023");
   $('.mcq-3').removeClass('hi').addClass('2').text("around 2 m");
   $('.mcq-4').removeClass('veg').addClass('15').text("like 1.5 m");
});

$('.q-area__mcq').on('click', '.hi', function () {
   $('.q-area__h2').text("A farmer has 666 apple trees in 26 of march 1996 and each of them make 500 apples per year how many apples does he have in 13th july 2002 assume each year has 365 days (no calc pls closest answer)");
   $('.mcq-1').removeClass('ymf').addClass('23').text("god knows 2.3 m maybe");
   $('.mcq-2').removeClass('nbf').addClass('16').text("1,677,023");
   $('.mcq-3').removeClass('hi').addClass('2').text("around 2 m");
   $('.mcq-4').removeClass('veg').addClass('15').text("like 1.5 m");
});

$('.q-area__mcq').on('click', '.veg', function () {
   $('.q-area__h2').text("A farmer has 666 apple trees in 26 of march 1996 and each of them make 500 apples per year how many apples does he have in 13th july 2002 assume each year has 365 days (no calc pls closest answer)");
   $('.mcq-1').removeClass('ymf').addClass('23').text("god knows 2.3 m maybe");
   $('.mcq-2').removeClass('nbf').addClass('16').text("1,677,023");
   $('.mcq-3').removeClass('hi').addClass('2').text("around 2 m");
   $('.mcq-4').removeClass('veg').addClass('15').text("like 1.5 m");
});

// element

$('.q-area__mcq').on('click', '.23', function () {
   $('.q-area__h2').text("which one do you prefer?");
   $('.mcq-1').removeClass('23').addClass('water').text("water");
   $('.mcq-2').removeClass('16').addClass('snow').text("snow");
   $('.mcq-3').removeClass('2').addClass('air').text("air");
   $('.mcq-4').removeClass('15').addClass('grass').text("grass");
});

$('.q-area__mcq').on('click', '.16', function () {
   location.href = './pages/donkey.html'
});

$('.q-area__mcq').on('click', '.2', function () {
   $('.q-area__h2').text("which one do you prefer?");
   $('.mcq-1').removeClass('23').addClass('water').text("water");
   $('.mcq-2').removeClass('16').addClass('snow').text("snow");
   $('.mcq-3').removeClass('2').addClass('air').text("air");
   $('.mcq-4').removeClass('15').addClass('grass').text("grass");
});

$('.q-area__mcq').on('click', '.15', function () {
   $('.q-area__h2').text("which one do you prefer?");
   $('.mcq-1').removeClass('23').addClass('water').text("water");
   $('.mcq-2').removeClass('16').addClass('snow').text("snow");
   $('.mcq-3').removeClass('2').addClass('air').text("air");
   $('.mcq-4').removeClass('15').addClass('grass').text("grass");
});

//  animal

$('.q-area__mcq').on('click', '.water', function () {
   $('.q-area__h2').text("There is a roberry taking place in a sea museum and you can save one art piece which one would it be?");
   $('.mcq-1').removeClass('water').addClass('octopus').text("finger painting of an octopus");
   $('.mcq-2').removeClass('snow').addClass('shark').text("statue of a shark");
   $('.mcq-3').removeClass('air').addClass('whale').text("hand stiched wool of a whale");
   $('.mcq-4').removeClass('grass').addClass('puffer-fish').text("pufferfish sand art");
});

$('.q-area__mcq').on('click', '.snow', function () {
   $('.q-area__h2').text("its 2050 global warming has increased alot south and north pole are melting you can save one animal from there which one would it be?");
   $('.mcq-1').removeClass('water').addClass('penguin').text("penguin");
   $('.mcq-2').removeClass('snow').addClass('polar-bear').text("polar bear");
   $('.mcq-3').removeClass('air').addClass('seal').text("seal");
   $('.mcq-4').removeClass('grass').addClass('arctic-fox').text("arctic fox");
});

$('.q-area__mcq').on('click', '.air', function () {
   $('.q-area__h2').text("its the year 2200 and these 4 birds are going extinct because of aliens which one would u save?");
   $('.mcq-1').removeClass('water').addClass('owl').text("owl");
   $('.mcq-2').removeClass('snow').addClass('eagle').text("eagle");
   $('.mcq-3').removeClass('air').addClass('ostrich').text("ostrich");
   $('.mcq-4').removeClass('grass').addClass('parrot').text("parrot");
});

$('.q-area__mcq').on('click', '.grass', function () {
   $('.q-area__h2').text("there is a fire in the zoo you have come to visit which animal would you want to save first?");
   $('.mcq-1').removeClass('water').addClass('monkey').text("Monkey");
   $('.mcq-2').removeClass('snow').addClass('lion').text("Lion");
   $('.mcq-3').removeClass('air').addClass('panda').text("Panda");
   $('.mcq-4').removeClass('grass').addClass('elephant').text("elephant");
});

// spirit animal

$('.q-area__mcq').on('click', '.panda', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/panda.png")
   $('.animal-text').text("A PANDA")
});


$('.q-area__mcq').on('click', '.elephant', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/elephant.png")
   $('.animal-text').text("AN ELEPHANT")
});

$('.q-area__mcq').on('click', '.lion', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/lion.png") 
   $('.animal-text').text("A LION")
});

$('.q-area__mcq').on('click', '.monkey', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/monkey.png") 
   $('.animal-text').text("A MONKEY")
});

$('.q-area__mcq').on('click', '.puffer-fish', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/puffer-fish.png") 
   $('.animal-text').text("A PUFFER FISH")
});

$('.q-area__mcq').on('click', '.shark', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/shark.png") 
   $('.animal-text').text("A SHARK")
});

$('.q-area__mcq').on('click', '.octopus', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/octopus.png") 
   $('.animal-text').text("AN OCTOPUS")
});

$('.q-area__mcq').on('click', '.whale', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/whale.png") 
   $('.animal-text').text("A WHALE")
});

$('.q-area__mcq').on('click', '.parrot', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/parrot.png") 
   $('.animal-text').text("A PARROT")
});

$('.q-area__mcq').on('click', '.eagle', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/eagle.png") 
   $('.animal-text').text("AN EAGLE")
});

$('.q-area__mcq').on('click', '.owl', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/owl.png") 
   $('.animal-text').text("AN OWL")
});

$('.q-area__mcq').on('click', '.ostrich', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/ostrich.png") 
   $('.animal-text').text("AN OSTRICH")
});

$('.q-area__mcq').on('click', '.penguin', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/penguin.png") 
   $('.animal-text').text("A PEGUIN")
});

$('.q-area__mcq').on('click', '.polar-bear', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/polar-bear.png") 
   $('.animal-text').text("A POLAR BEAR")
});

$('.q-area__mcq').on('click', '.seal', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/seal.png") 
   $('.animal-text').text("A SEAL")
});

$('.q-area__mcq').on('click', '.arctic-fox', function () {
   $('.body').css('display', 'none')
   $('.body-1').css('display', 'flex')
   $('.animal-img').attr("src", "./assets/arctic-fox.png") 
   $('.animal-text').text("An ARCTIC-FOX")
});






