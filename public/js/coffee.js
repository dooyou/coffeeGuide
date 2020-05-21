  function whatcoffee(value) {
    function coffeeOrder({ coffee }){
      switch (coffee) {
        case 'espresso':
          return ['Espresso'];
          break;
        case 'doppio':
          return ['Two Espresso shots'];
          break;
        case 'americano':
          return ['Espresso', 'Hot Water'];
          break;
        case 'latte':
          return ['Espresso', 'Milk', 'Milk foam'];
          break;
        case 'cappuchino':
          return ['Espresso', 'Milk', 'Cream'];
          break;
        case 'caramelmacchiato':
          return ['Espresso', 'Caramel', 'Milk', 'Milk foam'];
          break;
        case 'amaretto':
          return ['Espresso', 'Amaretto', 'Cream'];
          break;
        case 'conpanna':
          return ['Espresso', 'Cream'];
          break;
        case 'flatwhite':
          return ['Espresso', 'Milk'];
          break;
        case 'hawaiian':
          return ['Espresso', 'Coconut Milk'];
          break;
        case 'irish':
          return ['Espresso', 'Whisky', 'Cream'];
          break;
        case 'loungo':
          return ['Espresso'];
          break;
        case 'macchiato':
          return ['Espresso', 'Milk foam'];
          break;
        case 'milkpunch':
          return ['Milk', 'Honey', 'Whisky'];
          break;
        case 'short':
          return ['Espresso', 'Milk', 'Cream'];
          break;

        default:
          return 'What do you want ?';
      }//END switch
    }//END coffeeOrder


  document.getElementById('like').innerHTML = coffeeOrder({coffee:value});
  }//END whatcoffee
