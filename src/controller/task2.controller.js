const setData = async (req, res) => {
  try {
    let { data } = req.body;
    var month = [
        "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    let monthsNames = []
    let monthsIndex =[]
    let dataLabels=[]
    let uniqueMonths=[]
    let dataSets=[]
    data.forEach(element => {
        monthsIndex.push(new Date(element.date).getMonth()+1)    
        dataLabels.push(element.campaignMatch.supplier.name)
    });    
    let monthSortedarray= monthsIndex.sort(function(a,b){return a-b});
    monthSortedarray.forEach(ele=>{
        if(!monthsNames.includes(month[ele])){
            monthsNames.push(month[ele])   
            uniqueMonths.push(ele)  
            monthsNames.push(ele)       
        }
    })
    dataLabels.forEach(ele=>{
        let monthReach = [];
        if(!dataSets.some(ele2=>ele2.label == ele)){
            dataSets.push({label:ele,"fill": false}) 
            
            data.forEach(element => {

                if(element.campaignMatch.supplier.name == ele){
                    console.log(element);
                    uniqueMonths.forEach(monthreach2 =>{
                        if((new Date(element.date)-1) == monthreach2  ){
                            console.log(element);
                            
                        }
                    })
                }
            });    
        
        
        }
    })
    let dataLabelsSortedarray= dataLabels.sort(function(a,b){return a-b});
    
    let outputdata = {}
    outputdata.monthLabels= monthsNames;
    outputdata.datasets= dataSets;
    res.status(201).send({
      status_code: 201,
      message: "data successfully",
      data: outputdata
    });
  } catch (error) {
    res.status(400).send({
      status_code: 400,
      message: error.message
    });
  }
};

module.exports = {setData}