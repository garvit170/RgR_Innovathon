
module.exports.home = function(req,res){
    return res.send("Hello world");
}

module.exports.login = function(req,res){
    return res.render('signin');
}

module.exports.startups = function(req,res){
    return res.render('startups');
}