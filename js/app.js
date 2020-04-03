
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
        $('#photoCon').append(rendered);
    };



    Animals.prototype.runderOptions = function () {
      let $animalOption = $('<option></option>').text(this.title);
      $animalOption.attr('value',this.keyword)
      $('select').append($animalOption); 
        
  }
  
    
  function pages() {
    $('#btn1').on('click', function() {
        $('#photoCon').html("");
        readJson(1);
      
    })

    
    $('#btn2').on('click', function() {
        $('#photoCon').html("");
        readJson(2);
    })
}
pages();
    

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
  



  



            let $SelectedAnimal = $('select');
            $SelectedAnimal.on('change', function () {
                let $SelectedValue = $(this).val();
                $('section').hide();
                $(`.${$SelectedValue}`).show();


            });
console.log($SelectedValue);

});


