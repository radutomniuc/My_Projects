$(document).ready(function(){
      
    $("#getWeather").click(function(){
              
              var city = $("#city").val();
          var key  = '4de3768c62b67fe359758977a3efc069';
          
          $.ajax({
            url:'http://api.openweathermap.org/data/2.5/weather',
            dataType:'json',
            type:'GET',
            data:{q:city, appid: key, units: 'metric'},

            success: function(data){
              var weather = '';
              
              $.each(data.weather, function(index, val){

                weather += '<p><b>' + data.name + '</b></br>'+ data.main.temp + '&deg;C ' 

              });
            
             $(".CityWeather").html(weather);
            }

          })

    });
  });