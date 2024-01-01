const { connect } = require("../database/database");

const addTodo = ( request, response ) => {

    const { title, description } = request.body;

    if ( !title && !description ) return response.status(400).send(
        {
            message:" Fields are required "
        }
    )

    if ( !title ) return response.status(400).send(
        {
            message: "Title is required"
        }
    )

    const stmt = "insert into todos ( title, description ) values ( ?, ? )";

    connect().query( stmt, [ title, description ], ( err, result ) => {

        if ( err ) return response.status(400).send(
            {
                message: "An error occured, Please try again"
            }
        )

        response.status(200).send(
            {
                message: "Added Successfully"
            }
        )

    })


}

module.exports = {
    addTodo
}