
'use strict';

$(document).ready(function () {
    function Animals(animalObj) {
        this.image_url = animalObj.image_url;
        this.title = animalObj.title;
        this.description = animalObj.description;
        this.keyword = animalObj.keyword;
        this.horns = animalObj.horns;
        // Animals.all.push(this);
    }
    Animals.all = [];
    console.log(Animals.all);

    console.log('16', Animals.all);

    Animals.prototype.render = function () {
        let $animalClone = $('#photo-template').html();
        var rendered = Mustache.render($animalClone, this);
        $('#photoCon').append(rendered);
    };

    console.log('24', Animals.all);

    Animals.prototype.runderOptions = function () {
        let $animalOption = $('<option></option>').text(this.title);
        $animalOption.attr('value', this.keyword)
        $('select').append($animalOption);

    }
    console.log('32', Animals.all);

    function pages() {
        $('#btn1').on('click', function () {
            $('#photoCon').html("");
            readJson(1);

        })


        $('#btn2').on('click', function () {
            $('#photoCon').html("");
            readJson(2);
        })
    }
    pages();
    console.log('48', Animals.all);

    const readJson = (page$no) => {
        $.ajax(`data/page-${page$no}.json`, { method: 'GET', dataType: 'JSON' }).then(data => {
            data.forEach(animal => {
                window.animalObj = new Animals(animal);
                Animals.all.push(animal);
                animalObj.render();
                animalObj.runderOptions();
            });
        });
    };
    readJson(1);


    console.log('62', Animals.all);





    let $SelectedAnimal = $('select');
    $SelectedAnimal.on('change', function () {
        let $SelectedValue = $(this).val();
        $('section').hide();
        $(`.${$SelectedValue}`).show();


    });
    console.log($SelectedAnimal);


    console.log('mmmmm', Animals.all);



    function sortBy(array, property) {
        array.sort((a, b) => {
            let Item1 = a[property];
            let Item2 = b[property];
            if (property === 'title') {
                Item1 = Item1.toUpperCase();
                Item2 = Item2.toUpperCase();
            }

            if (Item1 > Item2) {
                return 1;

            } else if (Item1 < Item2) {
                return -1;
            } else { return 0; }


        })
        $('#photoCon').html('');
        // animalObj.render();
        Animals.all.forEach(animal => {
            let animalObj = new Animals(animal);
            animalObj.render();
        
        });
    }

    console.log('m1', Animals.all);

    $("#radio1").on('click', e => {
        // if (e.target.id === 'radio12') {
        console.log('11111', Animals.all);

        if (e.target.id === 'radio1') {
            sortBy(Animals.all, 'title')
        } else if (e.target.id === 'radio2') {
            sortBy(Animals.all, 'horns')
        }
        // }

    })

    $("#radio2").on('click', e => {
        // if (e.target.id === 'radio12') {
        console.log('222', Animals.all);

        if (e.target.id === 'radio1') {
            sortBy(Animals.all, 'title')
        } else if (e.target.id === 'radio2') {
            sortBy(Animals.all, 'horns')
        }
        // }

    })









});