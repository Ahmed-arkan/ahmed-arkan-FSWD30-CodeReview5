	

    var Persons = [
                        {
      name: 'Max',
      surname: 'Green',
      favoritePerformers: ["Justin Timberlake", "Linkin park", "Evanescence"],
      age: 24,
        myPhoto: "img/male1.jpg",  
      likes: 9   
      },

 {
      name: 'Leo',
      surname: 'Rose',
      favoritePerformers: ["Linkin park", "Ed Sheeran", "Lana del ray"],
      age: 28,
        myPhoto: "img/male2.jpg",  
      likes: 8   
      },

{
      name: 'Lila',
      surname: 'Willhamson',
      favoritePerformers: ["Evanescence", "30 Seconds to Mars", "Emma Watson"],
      age: 25,
        myPhoto: "img/female2.jpg",  
      likes: 5   
      },

 {
      name: 'Nirmen',
      surname: 'Hardy',
      favoritePerformers: ["Justin Timberlake", "katy perry", "KISS"],
      age: 30,
        myPhoto: "img/proimg.jpg",  
      likes: 4   
      },
      
];






var i = 0
         
         document.writeln("<section>");

    for (i = 0; i < Persons.length; i++) {


      var like = Persons[i].likes ;
      
         document.writeln("<article>");
        
         
         document.writeln('<div class="card ' +i+'">');
        document.writeln("<img src=" + '"'+ Persons[i].myPhoto +'"' + "style=100%>");
        document.writeln("<h1>" + Persons[i].name + "</h1>");
        document.writeln("<h1>" + Persons[i].surname + "</h1>");
        document.writeln("<p> Age: " + Persons[i].age + "</p>");

        document.writeln("<div>");

        document.writeln('<button id= "like'+i+'" >LIKE</button>');
        
        document.writeln('<p> <span class="out" id="likeout'+i+'">' + Persons[i].likes + '</span> <span><i class="fa fa-heart fa-2x" aria-hidden="true"></i></span></p>');
        
        document.writeln('</div>');
        
        document.writeln(' <a href="https://www.facebook.com/" ><p><button>Contact by <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></button></p> </a>');

        
        document.writeln("</div>");
        
          document.writeln("</article>");
          
        
    };

    document.writeln("</section");



 
  
  $('#like0').on('click',function (){


    $('#likeout0').text( Persons[0].likes + 1);

    $('#like0').css('background-color' , ('blue'));

    $('#like0').text('LIKED');


  });

    $('#like1').on('click',function (){


    $('#likeout1').text( Persons[1].likes + 1);

    $('#like1').css('background-color' , ('blue'));

    $('#like1').text('LIKED');


  });

      $('#like2').on('click',function (){


    $('#likeout2').text( Persons[2].likes + 1);

    $('#like2').css('background-color' , ('blue'));

    $('#like2').text('LIKED');


  });

        $('#like3').on('click',function (){


    $('#likeout3').text( Persons[3].likes + 1);

    $('#like3').css('background-color' , ('blue'));

    $('#like3').text('LIKED');


  });


