import server from "../config.js";

export const getAllCurrencies= async (req,res)=>{
    try {
        let response = await server.get("/assets");
        let data = response.data;
        const newlist=data.slice(0,499).map((item)=>{return item["asset_id"]})
        res.json(newlist);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export const convertCurrency = async(req,res)=>{
    try {
        const {from,to,amt} = req.query
        let response = await server.get(`/exchangerate/${from}/${to}`);
        response.data.amt= (response.data.rate*amt).toFixed(4)
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}