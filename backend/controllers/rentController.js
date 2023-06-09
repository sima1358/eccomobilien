import Rent from "../models/rentModel.js";
import { StatusCodes } from "http-status-codes";

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const addNewHomeForRent = async (req, res) => {
  try {
    const addRentHome = await Rent.create({
      title: req.body.title,
      propertyType: req.body.propertyType,
      pricePerMonth: req.body.pricePerMonth,
      deposit: req.body.deposit,
      floor: req.body.floor,
      room: req.body.room,
      bathroom: req.body.bathroom,
      terras: req.body.terras,
      elevator: req.body.elevator,
      garden: req.body.garden,
      parking: req.body.parking,
      warehouse: req.body.warehouse,
      area: req.body.area,
      postalCode: req.body.postalCode,
      city: req.body.city,
      province: req.body.province,
      description: req.body.description,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "New Home for rent is added", addRentHome });
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const listOfRentHome = async (req, res) => {
  try {
    const rents = await Rent.find();
    return res.status(StatusCodes.OK).json(rents);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const updateOfRentHome = async (req, res) => {
  try {
    const updateHomeForRent = await Rent.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        propertyType: req.body.propertyType,
        pricePerMonth: req.body.pricePerMonth,
        deposit: req.body.deposit,
        floor: req.body.floor,
        room: req.body.room,
        bathroom: req.body.bathroom,
        terras: req.body.terras,
        elevator: req.body.elevator,
        garden: req.body.garden,
        parking: req.body.parking,
        warehouse: req.body.warehouse,
        area: req.body.area,
        postalCode: req.body.postalCode,
        city: req.body.city,
        province: req.body.province,
        description: req.body.description, 
    });
    return res.status(StatusCodes.OK).json(updateHomeForRent);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
