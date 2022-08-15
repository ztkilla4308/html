// Return Negative
function makeNegative(num) {
    if (num > 0) {
      num = -num
    }
    return num
  }

//   Grasshopper - Messi goals function
  function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }

//   Grasshopper - Terminal game move function
  function move (position, roll) {
    return position + (roll*2)
  }

// Grasshopper - Personalized Message
  function greet (name, owner) {
    if(name === owner){
       message = 'Hello boss' 
    }else{
       message = 'Hello guest'
    }
    return message
  }

//   Keep Hydrated!
  function litres(time) {
    return Math.floor(0.5 * time)
  }
//   Opposites Attract
  function lovefunc(flower1, flower2) {
    if ((flower1 / 2) % 1) {
      flower1 = 'odd'
    } else {
      flower1 = 'even'
    }
  
    if ((flower2 / 2) % 1) {
      flower2 = 'odd'
    } else {
      flower2 = 'even'
    }
  
    if (flower1 == flower2) {
      return false
    } else {
      return true
    }
  }