alert('Calcutalions incoming...');

function amount(){
  var bag = new Array();
  var trimmed = new Array();

  var bronze = 0;
  var silver = 0;
  var gold = 0;

  //Example 1-input
  bag[0] = 'coin 1';
  bag[1] = 'coin 2';
  bag[2] = 'coin 5';
  bag[3] = 'coin 10';
  bag[4] = 'coin 20';
  bag[5] = 'coin 50';
  bag[6] = 'coin 100';
  bag[7] = 'coin 200';
  bag[8] = 'coin 500';
  bag[9] = 'cigars 1';

  //Displaying the initial array
  for(var i=0; i<bag.length; i++){
    document.write('Values of the INITIAL array: ' + bag[i]+'<br>');
  }

      //Checking and assigning values to the new arrays
      for(var i=0; i<bag.length; i++){
        var coin_checker = bag[i].substr(0,4);
        var int_checker = bag[i].substr(5);
          if(coin_checker == 'coin' && int_checker % 1 === 0 ){
            trimmed[i] = bag[i];
          }
      }

      for(var i=0; i<trimmed.length; i++){
        document.write('Values of the TRIMMED array: ' + trimmed[i] + '<br>');
      }

        //Checking and output the amount of gold, silver, bronze
        for(var k=0; k<trimmed.length; k++){
          // digger is a var which takes the substr after 'coin', and parseInt so we can check what type is our coin
          var digger = parseInt(trimmed[k].substr(5));
            if(digger>0 && digger<10){
              bronze += digger;
            }else if(digger>9 && digger<100){
              silver += digger;
            }else{
              gold += digger;
            }
        }

        document.write('Amount of gold: ' + gold + '<br>' + 'Amount of silver: ' + silver + '<br>' + 'Amount of bronze: ' + bronze);


}
amount();
