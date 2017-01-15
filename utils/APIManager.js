export default {
  get: (params, callback) => {
    $.ajax({
        url: "https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=" +params,
        type: "GET",
        dataType: "json",
        data: {
          "$limit" : 5000,
          "$$app_token" : "m4U4eF0nAwRHj1G3um8B6jMZm"
        },
        error: function(err){
          callback(err, null)
          return
        },
        success: function(response) {
          callback(null, response)
        }
    })
  }
}
