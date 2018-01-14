// var listEmail = [
//     ['tandd.dev@gmail.com','password'],
//     'tandddev@gmail.com',
//     'tan.dddev@gmail.com',
//     'tan.dd.dev@gmail.com',
//     'throne.rush.dt01@gmail.com',
//     'throne.rush.dt03@gmail.com',
//     'throne.rush.dt04@gmail.com',
//     'throne.rush.dt05@gmail.com',
//     'throne.rush.dt06@gmail.com',
//     'throne.rush.dt07@gmail.com',
//     'throne.rush.dt08@gmail.com',
//     'throne.rush.dt09@gmail.com',
//     'thronerushdt01@gmail.com',
//     'thronerushdt03@gmail.com',
//     'thronerushdt04@gmail.com',
//     'thronerushdt05@gmail.com',
//     'thronerushdt06@gmail.com',
//     'thronerushdt07@gmail.com',
//     'thronerushdt08@gmail.com',
//     'thronerushdt09@gmail.com'
// ]

$(document).ready(function () {
    start();
   // $("#submit-btn").click(start);
   //  $.each(listEmail,function (index, value) {
   //      $('#list-email').append('<option value="'+value+'">'+value+'</option>');
   //  })

})
function start(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{start:true},function (response) {
            $('#display').html(response.message);
        })
    })
}













