$(document).ready(function(){

$getMessage = $("#getMessage");  
  
$getMessage.on("click", function(){
      $getMessage.html("New Quote");
  
       var url = 'https://api.forismatic.com/api/1.0/?format=jsonp&jsonp=?&method=getQuote&lang=en';

        $.getJSON(url, function(data){
          var authorBold = "<strong>"  + data.quoteAuthor + "</strong>";
          var author = data.quoteAuthor.replace(/\s/g, '');
          var quote = data.quoteText;
          var tweet = "https://twitter.com/intent/tweet?&hashtags="+encodeURI(author)+"%2Cfamousquotes&text=" + encodeURI(quote);
          $("#tweet").attr("href",tweet);
          $(".message").html("\"" + data.quoteText + "\"" + "</br>"+ authorBold);
        });        
  }); 
 });
//9b6d6264ea94bf1f1e4abde6c32750d1