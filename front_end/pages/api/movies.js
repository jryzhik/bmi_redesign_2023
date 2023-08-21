import clientPromise from "../../lib/mongo/connect";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("sample_restaurants");

       const movies = await db
           .collection("neighborhoods")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();

       res.json(movies);
   } catch (e) {
       console.error(e);
   }
};