
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
 
    Animals.prototype.render = function () {
        let $animalClone = $('#photo-template').clone();

        $animalClone.find('h2').text(this.title);
        $animalClone.find('img').attr('src', this.image_url);
        $animalClone.find('p').text(this.description);

       
        $animalClone.addClass(this.keyword);
        $animalClone.removeAttr('id');
        $animalClone.attr('id', this.title);
        $('main').append($animalClone);
     
    }

    Animals.prototype.runderOptions = function () {
      let $animalOption = $('<option></option>').text(this.title);
      $animalOption.attr('value',this.keyword)
      $('select').append($animalOption); 
        
  }
  
    
    const readJson = () => {
        $.ajax('data/page-1.json', { method: 'GET', dataType: 'JSON' }).then(data => {
            data.forEach(animal => {
                let animalObj = new Animals(animal);
                animalObj.render();
                animalObj.runderOptions();
            });
        });
    };
    readJson();
    


            let $SelectedAnimal = $('select');
            $SelectedAnimal.on('change', function () {
                let $SelectedValue = $(this).val();
                $('section').hide();
                // section.havattr($SelectedValue)
                $(`.${$SelectedValue}`).show();


            });
console.log($SelectedValue);

});


// https://www.samanthaming.com/tidbits/76-converting-object-to-array/
// var keywordArr=[];
// for (var objj in Animals.all) {
//     if(objj.hasOwnProperty(keyword)){
//         keywordArr.push(Animals.all.values(keyword));
//     }
//   }

//  console.log(keywordArr);

// $('option').on('click',function(){
  //   var x=$('option').val
  //   if($this.(value)!==x){
  //   x.hide()
  // }
  // });