const db = require("../config/db");

exports.getProjects = (req,res)=>
{
    db.query(
        "SELECT * FROM projects",
        (err,result)=>
        {
            if(err)
            {
                return res.status(500).json(err);
            }

            res.json(result);
        }
    );
};

exports.addProject = (req,res)=>
{
    const {
        title,
        description,
        technologies,
        github_link,
        live_link
    } = req.body;

    const sql =
    `
    INSERT INTO projects
    (
        title,
        description,
        technologies,
        github_link,
        live_link
    )
    VALUES
    (?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            title,
            description,
            technologies,
            github_link,
            live_link
        ],
        (err,result)=>
        {
            if(err)
            {
                return res.status(500).json(err);
            }

            res.json({
                message:"Project Added"
            });
        }
    );
};

exports.updateProject = (req,res)=>
{
    const id = req.params.id;

    const {
        title,
        description,
        technologies,
        github_link,
        live_link
    } = req.body;

    const sql =
    `
    UPDATE projects
    SET
        title=?,
        description=?,
        technologies=?,
        github_link=?,
        live_link=?
    WHERE id=?
    `;

    db.query(
        sql,
        [
            title,
            description,
            technologies,
            github_link,
            live_link,
            id
        ],
        (err,result)=>
        {
            if(err)
            {
                return res.status(500).json(err);
            }

            res.json({
                message:"Project Updated"
            });
        }
    );
};

exports.deleteProject = (req,res)=>
{
    const id = req.params.id;

    db.query(
        "DELETE FROM projects WHERE id=?",
        [id],
        (err,result)=>
        {
            if(err)
            {
                return res.status(500).json(err);
            }

            res.json({
                message:"Project Deleted"
            });
        }
    );
};