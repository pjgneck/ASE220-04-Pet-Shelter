const pets = [
  { name: "Disco", type: "Dog", gender: "Male", age: "3 Years", image: "petsfolder/images/Disco.jpg", short_description: "Get ready to boogie with Disco Pug, the king of the dance floor! With his signature head bobs and wiggle-worthy tail spins, he brings the party wherever he goes. Disco Pug loves groovy walks, strutting his stuff under the disco lights (your living room lamp), and snuggling up after a long night of funky fun. He's great with kids, pets, and anyone who can keep up with his pawsome moves. If you're ready to dance through life with the coolest pug around, Disco Pug is your funky friend!"},
  { name: "James Bond", type: "Cat", gender: "Male", age: "4 Years", image: "petsfolder/images/JamesBond.jpg", short_description: "The name's Bond... James Bond Cat. With fur as smooth as a tailored tuxedo and eyes that see straight into your secrets, I’m the ultimate suave feline agent. My missions? Stealthily swiping snacks, evading laser pointers with precision, and charming every human I meet. I excel at high-speed chases (down hallways) and have a license to purr. Always ready for a daring adventure—or a classy nap in a luxurious sunbeam. Ready to become my partner in crime? Let's save the world… one cuddle at a time." },
  { name: "King Pug", type: "Dog", gender: "Male", age: "6 Year", image: "petsfolder/images/KingPug.jpg", short_description: "All hail King Pug, Ruler of Cuddles and Protector of Snacks! With a crown-like wrinkle formation on his noble brow and a tail curled with majesty, King Pug commands your heart with a single glance. He enjoys grand parades through the neighborhood (on leash walks), feasting upon gourmet treats (kibble), and holding court on the comfiest throne (your couch). His royal decree? Endless belly rubs and unconditional loyalty." },
  { name: "Mr. Whiskers", type: "Dog", gender: "Male", age: "4 Years", image: "petsfolder/images/Mr.Whiskers.jpg", short_description: "Meet Mr. Whiskers, the most convincing pug in feline disguise you've ever met! With his curled tail tucked behind and a charming \"meow\" impression (well, sort of), he's got a unique personality that's a blend of playful pug mischief and lazy cat lounging. Mr. Whiskers enjoys cozy window naps, pretending to stalk toy mice, and snuggling up for cuddles. He's wonderful with kids and gentle with other pets. If you're looking for a quirky companion who can bring laughter and joy to your home, Mr. Whiskers is your perfect match!" },
  { name: "Queen Cat", type: "Cat", gender: "Female", age: "5 Years", image: "petsfolder/images/QueenCat.jpg", short_description: "Bow before Queen Cat, Sovereign of Whiskers and Ruler of the Sunlit Kingdom! With fur as soft as moonlight and a gaze that commands respect, she reigns supreme. Her royal hobbies include surveying her kingdom from atop majestic cat towers, engaging in diplomatic play sessions with her subjects (humans), and gracing laps with her regal presence. Queen Cat seeks a loyal companion willing to treat her with the reverence she deserves. Kneel… or at least bring treats." },
  { name: "Trixie", type: "Cat", gender: "Female", age: "8 Years", image: "petsfolder/images/Trixie.jpg", short_description: "Roarrr! Meet Trixie the \"Catasaurus Rex,\" a feisty Bengal who is convinced she descended from the mighty dinosaurs. With her powerful pounce and fierce tail flicks, Trixie rules her Jurassic jungle (aka your living room). She loves scaling furniture \"mountains,\" ambushing unsuspecting toys, and performing \"dino roars\" (adorably loud meows). Despite her prehistoric vibes, she’s incredibly affectionate and enjoys curling up for naps when her \"dino adventures\" are done. If you're ready for a wild and loving companion, Trixie is ready to stomp into your life!" },
  { name: "Bella", type: "Dog", gender: "Female", age: "2 Years", image: "petsfolder/images/genaricDog3.jpg", short_description: "Bella is a playful and affectionate pup who loves to run around and cuddle up for naps." },
  { name: "Milo", type: "Cat", gender: "Male", age: "3 Years", image: "petsfolder/images/genaricCat1.jpg", short_description: "Milo is an adventurous cat who enjoys climbing high places and exploring new spaces." },
  { name: "Luna", type: "Dog", gender: "Female", age: "1 Year", image: "petsfolder/images/genaricDog2.jpg", short_description: "Luna is a young and energetic dog who loves playing fetch and making new friends." },
  { name: "Max", type: "Cat", gender: "Male", age: "4 Years", image: "petsfolder/images/genaricCat2.jpg", short_description: "Max is a calm and loving cat who enjoys lounging by the window and being petted." },
  { name: "Charlie", type: "Dog", gender: "Male", age: "5 Years", image: "petsfolder/images/genaricDog1.jpg", short_description: "Charlie is a loyal and protective dog who loves going on long walks and playing with his toys." },
  { name: "Daisy", type: "Cat", gender: "Female", age: "6 Months", image: "petsfolder/images/genaricCat3.jpg", short_description: "Daisy is a curious and playful kitten who loves chasing after toy mice and climbing furniture." },
  { name: "Rocky", type: "Dog", gender: "Male", age: "2 Years", image: "petsfolder/images/genaricDog3.jpg", short_description: "Rocky is a brave and strong dog who enjoys running outdoors and playing tug-of-war." },
  { name: "Shadow", type: "Cat", gender: "Male", age: "3 Years", image: "petsfolder/images/genaricCat2.jpg", short_description: "Shadow is a mysterious and independent cat who prefers quiet spaces and nighttime adventures." },
  { name: "Coco", type: "Dog", gender: "Female", age: "4 Years", image: "petsfolder/images/genaricDog1.jpg", short_description: "Coco is a sweet and gentle dog who loves belly rubs and spending time with her family." },
  { name: "Simba", type: "Cat", gender: "Male", age: "2 Years", image: "petsfolder/images/genaricCat1.jpg", short_description: "Simba is a majestic and curious cat who loves climbing trees and exploring new places." },
  { name: "Bailey", type: "Dog", gender: "Female", age: "3 Years", image: "petsfolder/images/genaricDog1.jpg", short_description: "Bailey is a friendly and energetic dog who enjoys running in the park and meeting new friends." },
  { name: "Oliver", type: "Cat", gender: "Male", age: "4 Years", image: "petsfolder/images/genaricCat3.jpg", short_description: "Oliver is a wise and affectionate cat who enjoys lounging in sunny spots and purring softly." },
  { name: "Maggie", type: "Dog", gender: "Female", age: "5 Years", image: "petsfolder/images/genaricDog3.jpg", short_description: "Maggie is a gentle and kind dog who loves belly rubs and spending time with her family." },
  { name: "Toby", type: "Dog", gender: "Male", age: "6 Years", image: "petsfolder/images/genaricDog1.jpg", short_description: "Toby is a protective and loyal dog who enjoys playing fetch and watching over his family." }
];

$(document).ready(function(){
var pos = 0;



function loadmore(){
  for(var i = pos; i < pos+9 && i < pets.length; ++i){
    
    var pet = pets[i]
    if(pet.gender == "Female" || pet.gender == "female"){
      var gendericon = "♀";
      var genderId = "female";
    }else{
      var gendericon = "♂";
      var genderId = "male";
    }

    const card = `
      <div class="col-md-4 mb-3">
        <div class="card view-details">
          
          <img src="${pet.image}" class="card-img-top" alt="${pet.name}">
          
          <div class="card-body">
            <h4 class="card-title">${pet.name}</h4>
            <p class="card-text">Type: ${pet.type}</p>
            <p class="card-text">Gender: <span class="gender-icon" id="${genderId}">${gendericon}</span></p>
            <p class="card-text">Age: <span class="age-label">${pet.age}</span></p>
          </div>
          
          
        </div>
        <button class="btn remover">Delete</button>
      </div>
    `;
    $('.mb-4').append(card);
  }
  pos = pos+9
  if(pos >= pets.length){
    $("#loadmore").hide();
  }else{
    $("#loadmore").show();
  }
}


$(document).on('click', '.view-details', function() {
  const petName = $(this).closest('.card').find('.card-title').text();
  const pet = pets.find(pets => pets.name === petName);
  $('.modal-content').html(`
        <div class="modal-header">
          <h3 class="modal-title">${pet.name}</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <img src="${pet.image}" class="img-fluid mb-1" alt="${pet.name}">
          <div class="modal-body">
              <p>Type: ${pet.type}</p>
              <p>Gender: ${pet.gender}</p>
              <p>Age: ${pet.age}</p>
              <p>Short Description: ${pet.short_description}</p>

          </div>
  `);
  const modal = new bootstrap.Modal(document.getElementById('modal'));
  modal.show();
});


$('#createPetBtn').on('click', function() {
  const modal = new bootstrap.Modal(document.getElementById('newPet'));
  modal.show();
});

$('#createPetForm').on('submit', function(event) {
  event.preventDefault();
  const newPet = {
    name: $('#petName').val(),
    type: $('#petType').val(),
    gender: $('#petGender').val(),
    age: $('#petAge').val(),
    image: 'images/default.jpg',
    short_description: $('#petDescription').val()
  };
  pets.push(newPet);
  $('.mb-4').empty();
  pos = 0;
  loadmore();
  bootstrap.Modal.getInstance(document.getElementById('newPet')).hide();
  });

$(document).on('click', '.remover', function() {
  $(this).closest('.col-md-4').remove();
});



  
  $('#loadMoreButton').on('click', function() {
    loadmore();
  });
  loadmore();
});