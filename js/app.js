
'use strict';

$(document).ready(function () {
    function Animals(animalObj) {
        this.image_url = animalObj.image_url;
        this.title = animalObj.title;
        this.description = animalObj.description;
        this.keyword = animalObj.keyword;
        this.horns = animalObj.horns;
        Animals.all.push(this);
    }
     Animals.all = [];  
     console.log(Animals.all);
 
    

    Animals.prototype.render = function() {
        let $animalClone = $('#photo-template').html();
        var rendered = Mustache.render($animalClone, this);
        $('main').append(rendered);
    };



    Animals.prototype.runderOptions = function () {
      let $animalOption = $('<option></option>').text(this.title);
      $animalOption.attr('value',this.keyword)
      $('select').append($animalOption); 
        
  }
  
    
    
    

    const readJson = (page$no) => {
        $.ajax(`data/page-${page$no}.json`, { method: 'GET', dataType: 'JSON' }).then(data => {
            data.forEach(animal => {
                            let animalObj = new Animals(animal);
                            animalObj.render();
                            animalObj.runderOptions();
                        });
                    });
                };
                readJson(1);
  



    var bt1 = $('#btn1');
  bt1.on('click', function(){
    $('main').hide();
    readJson1()});

    var bt2 = $('#btn2');
  bt2.on('click',function() {
    $('main').hide();
    readJson2()});




            let $SelectedAnimal = $('select');
            $SelectedAnimal.on('change', function () {
                let $SelectedValue = $(this).val();
                $('section').hide();
                // section.havattr($SelectedValue)
                $(`.${$SelectedValue}`).show();


            });
console.log($SelectedValue);

});


