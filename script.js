console.log("Hello!!")
$('#submit-btn').click(function(e){

    let roll = $('#roll').val();
    let name = $('#name').val();
    let marks = $('#marks').val();

    e.preventDefault();

    if(roll===""||name===""||marks===""){
        alert("Hey!! your have left a field unfilled");
    }else{

        let items = '<ul class="details-display"> <li>'+ roll +'</li> <li>'+ name +'</li> <li>'+ marks +'</li> </ul>';

        $('#display-container').append(items);

        // console.log(roll, name, marks);
        $('#roll').val("");
        $('#name').val("");
        $('#marks').val("");

    }

});