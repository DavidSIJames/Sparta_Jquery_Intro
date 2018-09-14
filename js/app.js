$(function(event){

  const ul = $('<ulclass="list-class"></ul>');
  for (var i = 0; i < 10; i++) {
    const li = $(`<li id="${i}">This is list item ${i}</li>`);
    ul.append(li);
  }
  $('body').append(ul);

  $('#header').on('click',function(){
    $('#header').css('color','blue');
    $('#header').css({
      'font-size':'50px',
      'font-family':'sans-serif',
      'text-transform':'uppercase'
    });
  })

  $('.image').each(function(index,image){
    $(image).click(function(e){
      $(image).attr('src','https://placecage.com/c/300/300').animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      },3000);
    })
    $(image).dblclick(function(){
      $(image).fadeOut(2000);
    })
    console.log(index);
    console.log(image);

  })
  $('li').each(function(index,listItem){
    $(listItem).hover(function(){
      $(listItem).text(`The text of ${index} has now changed!`);
      $(listItem).addClass('bigText');
    })
  })
})
