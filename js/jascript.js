$(document).ready(function(){

    $('a,h1,p,i').addClass('text-dark')
  
    $('.btn-light').click(function(e){
        e.preventDefault()

        $('body').removeClass('bg-dark')
  
        $('body').addClass('bg-light')
        $('a,h1,p,i,.like,.unlike').addClass('text-dark')
        $('a,h1,p,i,.like,.unlike').removeClass('text-white')
  
    })
  
    $('.btn-dark').click(function(e){
        e.preventDefault()

        $('body').removeClass('bg-light')
   
        $('body').addClass('bg-dark')
        $('a,h1,p,i,.like,.unlike').addClass('text-white')
        $('a,h1,p,i,.like,.unlike').removeClass('text-dark')
    })
  
  })
  
  $(document).ready(function(){
      $('#like').click(function(e){
          e.preventDefault()
          let number = $('#gostei').attr('data-number')
          number = parseInt(number) + 1
            
          $('.unlike').html(0)
             $('.like').html(number)
      })
      $('#dislike').click(function(e){
        e.preventDefault()
        let number = $('#unlike').attr('data-number')
        number = parseInt(number) + 1
          
        
            $('.like').html(0)
           $('.unlike').html(number)   
               
    })
  })
  