Handlebars.registerHelper("checkSpread", function (spread){
    var value = "data"
    var ret = ""
    if (spread.awaySpread > 0 )
    {
        return ret
    }
    else
    {
        return value
    }
});

