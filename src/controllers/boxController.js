const Box = require('../models/box');

class BoxController {
   async store(req, res) {
       const box = await Box.create({title: req.body.title});
        return res.json(box);
    }

    async show(req, res) {
        const box  = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {
                sort: {createdAt: 1}
            }
        });
        return res.json(box);
    }
}

// new por que eh uma classe, sem o new nao eh possivel acessar os metodos
module.exports = new BoxController();