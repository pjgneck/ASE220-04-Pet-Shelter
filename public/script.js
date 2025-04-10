let pets = [];
let pos = 0;

$(document).ready(function () {

  function getData() {
    $.ajax({
      url: "http://127.0.0.1:3000/api/jsonBlob/2798295899770556810",
      type: 'GET',
      success: function (response) {
        pets = response.data.pets;
        pos = 0;
        $('.mb-4').empty();
        loadmore();
      },
      error: function (xhr, status, error) {
        console.error('Error loading data:', error);
      }
    });
  }


  function putData() {
    const petData = {};
    for (let pet of pets) {
      petData[pet.name] = pet;
    }
    $.ajax({
      url: "http://127.0.0.1:3000/api/jsonBlob/2798295899770556810",
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(petData),
      success: function (response) {
        console.log("Updated:", response);
      },
      error: function (xhr, status, error) {
        console.error('Error saving data:', error);
      }
    });
  }

  function removeData(petName) {
    pets = pets.filter(p => p.name !== petName);
    putData();
    $('.mb-4').empty();
    pos = 0;
    loadmore();
  }

  function loadmore() {
    for (let i = pos; i < pos + 9 && i < pets.length; ++i) {
      const pet = pets[i];
      if (pet.gender == "Female" || pet.gender == "female") {
        var gendericon = "♀";
        var genderId = "female";
      } else {
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
          <button class="btn remover" data-name="${pet.name}">Delete</button>
        </div>`;
      $('.mb-4').append(card);
    }
    pos += 9;
    $("#loadmore").toggle(pos < pets.length);
  }

  $(document).on('click', '.view-details', function () {
    const petName = $(this).closest('.card').find('.card-title').text();
    const pet = pets.find(p => p.name === petName);
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

  $('#createPetBtn').on('click', function () {
    const modal = new bootstrap.Modal(document.getElementById('newPet'));
    modal.show();
  });

  $('#createPetForm').on('submit', function (event) {
    event.preventDefault();

    const newPet = {
      name: $('#petName').val(),
      type: $('#petType').val(),
      gender: $('#petGender').val(),
      age: $('#petAge').val(),
      image: 'petsfolder/images/default.jpg',  // use a real image if needed
      short_description: $('#petDescription').val()
    };

    pets.push(newPet);

    $.ajax({
      url: "http://127.0.0.1:3000/api/jsonBlob/2798295899770556810",
      type: 'PUT',
      contentType: "application/json",
      data: JSON.stringify({ pets }),
      success: function () {
        $('.mb-4').empty();
        pos = 0;
        loadmore();
        bootstrap.Modal.getInstance(document.getElementById('newPet')).hide();
      },
      error: function () {
        alert("Failed to add pet.");
      }
    });
  });

  $(document).on('click', '.remover', function () {
    const name = $(this).data('name');
    removeData(name);
  });

  $('#loadMoreButton').on('click', function () {
    loadmore();
  });

  // INIT
  getData();
});
