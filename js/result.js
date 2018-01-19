$(document).ready(function(){
	init();

});
function init(){
	resultstitle.classList.add('hide');
	// bodyarea.classList.add('hide');
	cover0.classList.add('hide');
	cover1.classList.add('hide');
	cover2.classList.add('hide');
	cover3.classList.add('hide');
	cover4.classList.add('hide');
	cover5.classList.add('hide');
	cover6.classList.add('hide');
	cover8.classList.add('hide');
	cover9.classList.add('hide');

	byline.classList.add('hide');
	byline1.classList.add('hide');
	byline2.classList.add('hide');
	byline3.classList.add('hide');
	byline4.classList.add('hide');
	byline5.classList.add('hide');
	byline6.classList.add('hide');
	byline7.classList.add('hide');
	byline8.classList.add('hide');
	byline9.classList.add('hide');
	bodyarea.classList.add('hide');

};
function getBook() {
 	resultstitle.classList.remove('hide');
 	// showmorebtn.classList.remove('hide');
	byline.classList.remove('hide');
	byline1.classList.remove('hide');
	byline2.classList.remove('hide');
	byline3.classList.remove('hide');
	byline4.classList.remove('hide');
	byline5.classList.remove('hide');
	byline6.classList.remove('hide');
	byline7.classList.remove('hide');
	byline8.classList.remove('hide');
	byline9.classList.remove('hide');

	cover0.classList.remove('hide');
	cover1.classList.remove('hide');
	cover2.classList.remove('hide');
	cover3.classList.remove('hide');
	cover4.classList.remove('hide');
	cover5.classList.remove('hide');
	cover6.classList.remove('hide');
	cover8.classList.remove('hide');
	cover9.classList.remove('hide');

	bodyarea.classList.remove('hide');

   	var openlibraryAPI = $("#q").val();
   	console.log(openlibraryAPI)
   	openlibraryAPI = "http://openlibrary.org/search.json?q=" + openlibraryAPI;
   	console.log(openlibraryAPI)
	$.getJSON(openlibraryAPI, function (json) {

	    // Set the variables from the results array
	    var cover = json.docs[0].isbn[0];
	    cover = "http://covers.openlibrary.org/b/isbn/"+cover+"-M.jpg";
	    coverimg = document.getElementById('cover0');
		coverimg.src = cover;
		var Title = json.docs[0].title_suggest;
	    var Author = json.docs[0].author_name;
	    
	    var coverhere1 = json.docs[1].isbn[0];
	    coverhere1 = "http://covers.openlibrary.org/b/isbn/"+coverhere1+"-M.jpg";
		coverimg1 = document.getElementById('cover1');
		coverimg1.src = coverhere1;
		var Title1 = json.docs[1].title_suggest;
		var Author1 = json.docs[1].author_name;
		var cover1 = json.docs[1].isbn[0];

	    var coverhere2 = json.docs[2].isbn[0];
	    coverhere2 = "http://covers.openlibrary.org/b/isbn/"+coverhere2+"-M.jpg";
		coverimg2 = document.getElementById('cover2');
		coverimg2.src = coverhere2;
		var Title2 = json.docs[2].title_suggest;
		var Author2 = json.docs[2].author_name;
		var cover2 = json.docs[2].isbn[0];

	    var coverhere3 = json.docs[3].isbn[0];
	    coverhere3 = "http://covers.openlibrary.org/b/isbn/"+coverhere3+"-M.jpg";
		coverimg3 = document.getElementById('cover3');
		coverimg3.src = coverhere3;
		var Title3 = json.docs[3].title_suggest;
		var Author3 = json.docs[3].author_name;
		var cover3 = json.docs[3].isbn[0];		

	    var coverhere4 = json.docs[4].isbn[0];
	    coverhere4 = "http://covers.openlibrary.org/b/isbn/"+coverhere4+"-M.jpg";
		coverimg4 = document.getElementById('cover4');
		coverimg4.src = coverhere4;
		var Title4 = json.docs[4].title_suggest;
		var Author4 = json.docs[4].author_name;
		var cover4 = json.docs[4].isbn[0];

	    var coverhere5 = json.docs[5].isbn[0];
	    coverhere5 = "http://covers.openlibrary.org/b/isbn/"+coverhere5+"-M.jpg";
		coverimg5 = document.getElementById('cover5');
		coverimg5.src = coverhere5;
		var Title5 = json.docs[5].title_suggest;
		var Author5 = json.docs[5].author_name;
		var cover5 = json.docs[5].isbn[0];

	    var coverhere6 = json.docs[6].isbn[0];
	    coverhere6 = "http://covers.openlibrary.org/b/isbn/"+coverhere6+"-M.jpg";
		coverimg6 = document.getElementById('cover6');
		coverimg6.src = coverhere6;
		var Title6 = json.docs[6].title_suggest;
		var Author6 = json.docs[6].author_name;
		var cover6 = json.docs[6].isbn[0];

	    var coverhere7 = json.docs[7].isbn[0];
	    coverhere7 = "http://covers.openlibrary.org/b/isbn/"+coverhere7+"-M.jpg";
		coverimg7 = document.getElementById('cover7');
		coverimg7.src = coverhere7;
		var Title7 = json.docs[7].title_suggest;
		var Author7 = json.docs[7].author_name;
		var cover7 = json.docs[7].isbn[0];

	    var coverhere8 = json.docs[8].isbn[0];
	    coverhere8 = "http://covers.openlibrary.org/b/isbn/"+coverhere8+"-M.jpg";
		coverimg8 = document.getElementById('cover8');
		coverimg8.src = coverhere8;
		var Title8 = json.docs[8].title_suggest;
		var Author8 = json.docs[8].author_name;
		var cover8 = json.docs[8].isbn[0];

	    var coverhere9 = json.docs[9].isbn[0];
	    coverhere9 = "http://covers.openlibrary.org/b/isbn/"+coverhere9+"-M.jpg";
		coverimg9 = document.getElementById('cover9');
		coverimg9.src = coverhere9;
		var Title9 = json.docs[9].title_suggest;
		var Author9 = json.docs[9].author_name;
		var cover9 = json.docs[9].isbn[0];

	    // Set the table td text
	    $('#Title').text(Title);
	    $('#Author').text(Author);
	    $('#Title1').text(Title1);
	    $('#Author1').text(Author1);
	    $('#Title2').text(Title2);
	    $('#Author2').text(Author2);
	    $('#Title2').text(Title3);
	    $('#Author2').text(Author4);	    	    
	    $('#Title2').text(Title4);
	    $('#Author2').text(Author4);
	    $('#Title2').text(Title5);
	    $('#Author2').text(Author5);
	    $('#Title2').text(Title6);
	    $('#Author2').text(Author6);
	    $('#Title2').text(Title7);
	    $('#Author2').text(Author7);
	    $('#Title2').text(Title8);
	    $('#Author2').text(Author8);
	    $('#Title2').text(Title9);
	    $('#Author2').text(Author9);
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
};
