import { Request, Response } from "express";

class StatusController{

  public helth(req:Request, res:Response) {
    return res.json({
      service: process.env.SERVICE_NAME,
      version: process.env.SERVICE_VERSION,
      status: process.env.SERVICE_STATUS,
      root: process.env.SERVICE_INPUT,
      output: process.env.SERVICE_OUTPUT
    });
  }
}

export const statusController = new StatusController();