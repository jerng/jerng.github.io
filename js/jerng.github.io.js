/*var init = function()
{
  init = 
}
//*/


$(document).ready(function()
{
  $('div:not(:first-child)').click(function(e)
  {
    var group = $(this).attr('group')
    
    $(this) .toggleClass('selected')
    if ($(this).hasClass('selected')) 
      {
        $('section[group="'+group+'"]').fadeIn()
      } 
    else
      {
        $('section[group="'+group+'"]').fadeOut()
      }
  })
})
