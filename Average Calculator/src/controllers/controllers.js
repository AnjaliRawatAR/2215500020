const { fetchStoreNumbers, Average } = require("../services/service");
let number = []; 

exports.handleNumber = async (req, res) => {
  const { numberId } = req.params;
  try {
    const prevState = [...number];
    number = await fetchStoreNumbers(numberId, number);

    const average = Average(numbersStore);

    res.json({
      windowPrevState: prevState,
      windowCurrState: numbersStore,
      numbers: number.slice(-10), 
      ang: parseFloat(average.toFixed(2)), 
    
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};