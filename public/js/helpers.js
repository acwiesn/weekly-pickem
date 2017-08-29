function fillSpreads()
{
    for(var i=0;i<32;i++){
        $(".spread")[i].value = Math.floor(Math.random()*10)+1;
    }
    
}
function fillScores()
{
    for(var i=0;i<32;i++){
        $(".score")[i].value = Math.floor(Math.random()*50)+2;
    }
    
}

function deleteScores()
{
        for(var i=0;i<32;i++){
        $(".score")[i].value = "";
    }
}

function deleteSpreads()
{
        for(var i=0;i<32;i++){
        $(".spread")[i].value = "";
    }
}

function checkBadSpread()
{
    if(parseInt($('.spreadHide .spreadInt').html())<0){$('.spreadHide').hide()}
}

