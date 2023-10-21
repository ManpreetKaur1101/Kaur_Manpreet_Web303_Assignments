/*
    Assignment 05
    Name : Manpreet kaur
    Student Id : 0812152
*/
$(document).ready(function () {

    class ContentItem {

        // constructor
        constructor(id,name,description,categoryGenre){
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
          }

        //methods
        updateContentItem(id,name,description,categoryGenre){
            if((this.id == id) && (name != null) && (description != null) && (categoryGenre != null)){
                this.name = name;
                this.description = description;
                this.categoryGenre = categoryGenre;
            }
        }
        tostring() {
            $('#content-item-list').append(
                '<div class ="content-item-wrapper"id= "content-item-ID' +this.id +'">'+
                 '<h2>Name:- '+ this.name+'</h2>'+
                 '<p>Description :- '+ this.description+' </p>'+
                 '<div>categoryGenre :- '+ this.categoryGenre+' </div>'+
                  '</div>');
         
        }
    }
            //unsuccssfull button click
            $('#unsuccessful-button').click(function(){
              updateContentItemUnsuccessfully();
          });
             
      //succssfull button click
      $('#successful-button').click(function(){
        updateContentItemSuccessfully();
    });
    let allitems = [
        {
        id : '1',
        name : 'Diljit Dosanjh',
        description : 'Singer,Actor',
        categoryGenre : 'Action' 
      },
      {
        id : '2',
        name : 'Garry Sandhu',
        description : 'Actor',
        categoryGenre : 'Romantic' 
      },
      {
        id : '3',
        name : 'Amrinder Gill',
        description : 'Actor,Singer',
        categoryGenre : 'Religious' 
    },
      {
        id : '4',
        name : 'Sidhu Mosse Vala',
        description : 'Actor and Singer',
        categoryGenre : 'Pop' 
    },
      {
        id : '5',
        name : 'Jassi Gill',
        description : 'Singer & actor',
        categoryGenre : 'Jazz' 
      }
    ] 
    for(i = 0; i < allitems.length; i++){
      $('#content-item-list').append(
  '<div class ="content-item-wrapper"id= "content-item-' +allitems[i].id + '">'+
   '<h4>Name:- '+ allitems[i].name+'</h4>'+
   '<p>Description :- '+ allitems[i].description+' </p>'+
   '<div> CategoryGenre :- '+ allitems[i].categoryGenre+' </div>'+
    '</div>'); 
  };

});
