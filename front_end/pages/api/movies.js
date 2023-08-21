import clientPromise from "../../lib/mongo/connect";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("masterdb");

       const movies = await db
           .collection("news")
           .find({})
           .sort({ name_of_date_field : 1})
           .limit(10)
           .toArray();

       res.json(movies);
   } catch (e) {
       console.error(e);
   }
};