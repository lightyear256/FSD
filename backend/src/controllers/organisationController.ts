import type { Request, Response } from "express";
import client from "../prismaClient.js";

export async function getUserByOrganisation(req: Request, res: Response) {
  const {organisationId} = req.params;
  if (!organisationId) {
    return res.status(400).json({ error: "organistaion is required" });
  }
  try {
    const organisation = await client.organisation.findUnique({
      where: {
        id: organisationId,
        
      },
      include:{
        users:{
          select:{
            id:true,
            name:true,
            email:true,
            batch:true,
          }
        }
      }
    });
    res.send({
      msg: "users found",
      users: organisation,
    });
  } catch (error) {
    res.status(500).send({
      msg: "internal server error",
      error: error,
    });
  }
}
export async function getAllOrganisation(req:Request,res:Response){
    try {
        const organisations=await client.organisation.findMany();
        res.send({
            msg:"organisations found",
            organisations
        })
    } catch (error) {
        res.status(500).send({
            msg:"internal server error"
        })
    }
}