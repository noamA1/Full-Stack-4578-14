const submit = document.querySelectorAll('form[name="uName"] input[type="button"]');
const paragraph = document.querySelector('#paragraph');

submit[0].addEventListener('click', function (){
    const userName = document.querySelector( 'input[type = "text"]').value;
    const str = "Your name start with ' " + userName[0] + "'  and ends with '" + 
                userName[userName.length-1] + "'";
    paragraph.innerHTML = str;
});