import task from "../../../models/Task";
import {dbConnect} from "../../../utils/dbconnection";

dbConnect();

export default async function handler(req, res) {
  const {method, body} = req

  switch (method) {
    case "GET":
      try {
        const tasks = await task.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(400).json({error: error.message})
      }

    case "POST":
      try {
        const newTask = new task(body)
        const savedTask = await newTask.save()
        return res.status(201).json(savedTask)
      } catch (error) {
        return res.status(400).json({error: error.message})
      }


    default:
      return res.status(400).json({msg: "Method not supported."})
  }
}

