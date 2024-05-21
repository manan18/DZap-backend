import { Router, response } from "express";
import {convertCurrency,getAllCurrencies} from "../controllers/currency.controller.js"


const currencyRouter = Router();

currencyRouter.get("/getAll", getAllCurrencies);

currencyRouter.get("/convert",convertCurrency);

export default currencyRouter;
