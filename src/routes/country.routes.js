import { Router } from 'express';
import { methods as countryController } from './../controllers/country.controller';

const router = Router();

router.get("/",countryController.getCountrys);
router.get("/:id", countryController.getCountry);
router.post("/", countryController.addCountry);
router.put("/:id", countryController.updateCountry);
router.delete("/:id", countryController.deleteCountry);

export default router;