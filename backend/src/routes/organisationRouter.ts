import { Router } from "express";
import { getAllOrganisation, getUserByOrganisation } from "../controllers/organisationController.js";

export const organisationRouter=Router()
organisationRouter.get("/:organisationId",getUserByOrganisation)
organisationRouter.get("/",getAllOrganisation);