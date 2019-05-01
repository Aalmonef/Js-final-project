$(document).ready(function(){
$('#temple').hide();
$('.cato').hide();


 $('.button').on('click',function(event){
     event.preventDefault();
     var show=$('#showName').val();

    $.ajax({
        method: 'GET',
        url: 'http://api.tvmaze.com/singlesearch/shows?q='+show+'',
        //http://api.tvmaze.com/search/shows?q=
        success: function(item){
            $('#search').hide();
            $('#temple').show();
            var img=$('<img>');
            img.attr('src',item.image.medium);
            img.appendTo('#temple').css('align-item','center');

            
            $('<h3>').appendTo('#temple').text(item.name).css('text-align','center');
            $('<p>').appendTo('#temple').text('Rate: '+item.rating.average);
            $('<p>').appendTo('#temple').text('Genre: '+item.genres[0]);
            $('<p>').appendTo('#temple').text('Language: '+item.language);
            $('<button>').addClass('button home').appendTo('#temple').text('Home');

            $('.home').on('click',function(event){
                event.preventDefault();
                $('#temple').empty();
                $('#search').show();
                $('#showName').val('');
                
           })
           $('h1').on('click',function(event){
            event.preventDefault();
            $('#temple').empty();
            $('#search').show();
            $('#showName').val('');
            
       })

        },
        error: function(error){
            console.log(error)
        }
    })
    

 })

 $('.list').on('click',function(event){
     console.log('hi');
    event.preventDefault();
    var show=$('#showName').val();

    
    $.ajax({
        method: 'GET',
        url:'http://api.tvmaze.com/search/shows?q='+show+'',
        success: function(items){
            $('#search').hide();
            $('#temple').hide();
            $('.cato').show();
            $('.container').css('height','50%');
            items.forEach(function(item) {
                var img=$('<img>');
                if(item.show.image){
                    img.attr('src', item.show.image.medium);

                }
        
            img.appendTo('.tempelet')

            $('<h3>').appendTo('.tempelet').text(item.show.name).css('text-align','center');
            
            $('<p>').appendTo('.tempelet').text('Rate: '+item.show.rating.average);
            $('<p>').appendTo('.tempelet').text('Genre: '+item.show.genres[0]);
            $('<p>').appendTo('.tempelet').text('Language: '+item.show.language);
            });
            $('<button>').addClass('list').appendTo('.tempelet').text('Home');
            
            

            $('.list').on('click',function(event){
                event.preventDefault();
                $('#temple').empty();
                $('.cato').empty();
                $('#search').show();
                $('#showName').val('');
                window.location.href = 'index.html'

           })
           $('h1').on('click',function(event){
            event.preventDefault();
            $('#temple').empty();
            $('.cato').empty();
            $('#search').show();
            $('.container').css('height','50%');
            $('#showName').val('');
            window.location.href = 'index.html'

            
       })
       
        },
        error: function(error){
            console.log(error);
           }
        
    })
 })
});