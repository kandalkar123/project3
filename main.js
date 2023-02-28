function TEMPCON(){
    let val = document.getElementById("input_value");
    let result = document.getElementById("result");
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    val.addEventListener("keyup", TEMPCON);
    input.addEventListener("change", TEMPCON);
    output.addEventListener("change", TEMPCON);

    let inputValue = input.value;
    let outputValue = output.value;

    //Celsius
    if(inputValue === "celsius" && outputValue === "fahrenheit"){
      result.value = Number((val.value) * 9/5) + 32+" °F";
    }else if(inputValue === "celsius" && outputValue === "kelvin"){
      result.value = Number(val.value) + 273.15 +" °K";
    }else if(inputValue === "celsius" && outputValue === "celsius"){
      result.value = val.value+" °C";
    }else if(inputValue === 0 && outputValue === "celsius"){
      result.value = '0' +" °C";
    }



    //Fahrenheit
    if(inputValue === "fahrenheit" && outputValue === "celsius"){
      result.value = Number((val.value - 32) * 5) / 9 +" °C" ;
    }else if(inputValue === "fahrenheit" && outputValue === "kelvin"){
      result.value = Number((val.value - 32) * 5/9) + 273.15 +" °K";
    }else if(inputValue === "fahrenheit" && outputValue === "fahrenheit"){
      result.value = val.value+" °F";
    }


    //Kelvin
    if(inputValue === "kelvin" && outputValue === "celsius"){
      result.value = Number(val.value) - 273.15 +" °C";
    }else if(inputValue === "kelvin" && outputValue === "fahrenheit"){
      result.value = Number((val.value - 273.15) * 9/5) + 32+" °F";
    }else if(inputValue === "kelvin" && outputValue === "kelvin"){
      result.value = val.value +" °K" ;
    }


  }

  function reset(){
  TEMPCON();
  }