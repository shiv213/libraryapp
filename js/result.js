$(document).ready(function(){
	// The Google Geocoding API url used to get the JSON data
	var openlibraryAPI = "http://openlibrary.org/search.json?q=lord+of+the+rings";

	$.getJSON(openlibraryAPI, function (json) {

	    // Set the variables from the results array
	    var Title = json.docs[0].title_suggest;
	    console.log('Title : ', Title);
	    
	    var Author = json.docs[0].author_name;
	    console.log('Author : ', Author);
	    
	    var fulltext = json.docs[0].has_fulltext;
	    console.log('Fulltext? : ', fulltext);

	    // Set the table td text
	    $('#Title').text(Title);
	    $('#Author').text(Author);
	    $('#fulltext').text(fulltext);
	});

	// Caching the link jquery object
	var $myLink = $('a.myLink');

	// Set the links properties
	$myLink.prop({
	    href: openlibraryAPI,
	    title: 'Click on this link to open in a new window.'
	}).click(function (e) {
	    e.preventDefault();
	    window.open(this.href, '_blank');
	});
});