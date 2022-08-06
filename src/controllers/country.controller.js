import { getConnection } from "./../database/database";

//Read
const getCountrys = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idcountry, name, poblation FROM country");
        //console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

//Read :id
const getCountry = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT idcountry, name, poblation FROM country WHERE idcountry = ?", id);
        //console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

//Create
const addCountry = async (req, res) => {
    try {
        const { name, poblation } = req.body;

        if (name === undefined || poblation === undefined) {
            res.status(400).json({ message: "** Bad Request **" });
        }

        const country = { name, poblation };
        const connection = await getConnection();
        await connection.query("INSERT INTO country SET ?", country);
        res.json({ message: "** Country added **" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Update
const updateCountry = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, poblation } = req.body;

        if (id === undefined || name === undefined || poblation === undefined) {
            res.status(400).json({ message: "** Bad Request **" });
        }

        const country = { name, poblation };
        const connection = await getConnection();
        const result = await connection.query("UPDATE country SET ? WHERE idcountry = ?", [country, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

//Delete
const deleteCountry = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM country WHERE idcountry = ?", id);
        //console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

//exports to country.routes
export const methods = {
    getCountrys,
    getCountry,
    addCountry,
    updateCountry,
    deleteCountry
};