ww = 2

var toggle = 0
function men() {
    toggle++
    var ok = $('#ok')[0]
    switch(toggle) 
    {
        case 1:
            ok.innerHTML = 'BRO, YOU JUST POSTED CRINGE';
            break;
        case 2:
            ok.innerHTML = 'ur stupid.';
            break;
        case 3:
            ok.innerHTML = ':(';
            break;
        default:
            ok.innerHTML = 'ok nvm';
            toggle = 0
            break;
        
    } 
};