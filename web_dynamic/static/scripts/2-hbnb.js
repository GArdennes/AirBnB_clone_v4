$(document).ready(function () {
  const amenityList = {}; // Dictionary to store Amenity IDs

  $('input#check_amenity').change(function () {
    const checkboxId = $(this).attr('data-id');

    if (this.checked) {
      // If the checkbox is checked, store the Amenity ID in the dictionary
      amenityList[checkboxId] = $(this).attr('data-name');
    } else {
      // If the checkbox is unchecked, remove the Amenity ID from the dictionary
      delete amenityList[checkboxId];
    }

    // Update the h4 tag inside the div Amenities with the list of Amenities checked
    $('div.amenities h4').text(Object.values(amenityList).join(', '));
  });
});

$(function () {
  const apiUrl = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(apiUrl, function (data, status) {
    if (data.status === 'OK' && status === 'success') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
