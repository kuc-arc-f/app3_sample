var express = require('express');
var models = require("../models");
var router = express.Router();

/* GET users listing. */
/* 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
/******************************** 
* 
*********************************/
router.get('/', function(req, res, next) {
    models.User.findAll().then((result) => {
        var items = result
        items.forEach( function (item) {
//                console.log( item.dataValues.name  );
                console.log( item.dataValues );
        });
        var param = {"result": result};
        res.json(param);
//        res.send('respond with a resource');
    });
    /* 
    var user_id = req.query.user_id;
    var name = req.query.name;
    models.User.findOrCreate(
      {"where": {"id": user_id}, 
       "defaults": {"id": user_id, "name": name}}
    ).spread(function(user, created){
      res.send({"user": user, "created": created});
    });
    */
});
/******************************** 
* 
*********************************/
router.get('/create', function(req, res, next) {
	models.User.create({
        name: 'yamada tarou',
	})
	.then((result) => {
        console.log('データ取得', result.dataValues);
        res.send('respond with a resource');
	});

});
/******************************** 
* 
*********************************/
router.get('/tst1', function(req, res, next) {
    //     models.User.findById(1)
    models.User.findOne({id : 1} )
    .then((result) => {
        console.log( result );
        var param = {"result": result};
        res.json(param);
    });  

});
/******************************** 
* 
*********************************/
router.get('/tst2', function(req, res, next) {
    models.User.update({
        // 更新したい Key・Value を指定する
        name: 'hoge2',
    }, {
        where: {
            id: 1
        },
        // 更新するフィールド名を指定する
        fields: [
            'name'
        ]
    }).then(() => { 
        res.send('respond with a resource');
    });    

});
/******************************** 
* 
*********************************/
router.get('/tst3', function(req, res, next) {
    // DELETE : 削除
    models.User.destroy({
        // 削除対象を指定する
        where: {
            id: 3
        }
    })
    .then(() => { 
        res.send('respond with a resource');
    });

});
/******************************** 
* 
*********************************/
router.get('/tst4', function(req, res, next) {
	models.Task.create({
        title: 't1a',
        content: 'c1',
	})
	.then((result) => {
        console.log('データ取得', result.dataValues);
        res.send('respond with a resource');
	});

});

module.exports = router;
