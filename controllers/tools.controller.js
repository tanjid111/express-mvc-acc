let tools = [
    { id: 1, name: "Hammer" },
    { id: 2, name: "Hammer2" },
    { id: 3, name: "Hammer3" },
];


module.exports.getAllTools = (req, res, next) => {
    const { ip, query, params, body, headers } = req
    // console.log(ip, query, params, body, headers)
    // res.download(__dirname + "/tools.controller.js")
    // res.json({ "name": "tj" })
    // res.redirect("/login")
    const { limit, page } = req.query;
    console.log(limit, page);
    res.json(tools.slice(0, limit))
};

module.exports.saveATool = (req, res) => {
    console.log(req.body)
    console.log(req.query)
    tools.push(req.body)
    res.send(tools)
}

module.exports.getToolDetail = (req, res) => {
    const { id } = req.params;
    console.log(id);
    // const filter = {_id: id};
    const foundTool = tools.find(tool => tool.id === Number(id));
    console.log(foundTool);
    res.status(200).send({
        success: true,
        message: "Success",
        data: foundTool
    })
    // res.status(500).send({
    //     success: false,
    //     message: "Internal Server Error"
    // })
}

module.exports.updateTool = (req, res) => {
    // const newData = req.body;
    const { id } = req.params;
    const filter = { _id: id };

    const newData = tools.find(tool => tool.id === Number(id))
    newData.id = id;
    newData.name = req.body.name;

    res.send(newData)
}

module.exports.deleteTool = (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };

    tools = tools.filter(tool => tool.id !== Number(id));
    res.send(tools)
}