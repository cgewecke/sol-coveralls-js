module.exports.ifs = function ifs(){
  var x = 0;
  var y = 0;

  // Takes simple branch
  if (x == 0) y+=1;
  if (x == 0){y+=1;}
  if (x == 0){
    y+=1;
  }

  // Takes else branch (else sameline)
  if (x==1) y+=1;
  else y+=1;

  // Takes else branch (else multiline)
  if (x==1) y+=1;
  else 
    y+=1;

  // Doesn't visit simple branch
  if (x==1) y+=1;
  if (x==1) {y+=1;}
  if (x==1) {
    y+=1;
  }

  // Doesn't visit multi-branch
  if(x==1) y;
  else if (x==2) y+=1;
  else if (x==3) y+=1;
  else if (x==4) y+=1;
  else if (x==0) y+=1;
  else y;

  //Doesn't visit multi-branch (some brackets)
  if(x==1){
    y+=1;
  } else if (x==2) {
    y+=1;
  } else if (x==3) {
    y+=1;
    y+=2;
    y+=3;
  } 
  else if (x==4) y+=1;
  else if (x==5) y+=1;
  else y+=1;
}

module.exports.fors = function fors(){
  var x = 0;
  var y = 0;

  // Loops 10X (brackets, sameline)
  for(x = 0; x < 10; x++){ y+=1; }
  // Loops 10X (brackets multiline)
  for(x = 0; x < 10; x++){
    y+=1;
  }
  // Loops 10X (no-brackets, same line);
  for(x = 0; x < 10; x++) y+=1;
  
  // Loops 10X (no-brackets, multiline);
  for(x = 0; x < 10; x++) 
    y+=1;

  // Doesn't loop: (brackets, same line);
  for(x = 10; x < 10; x++){ y+=1; }
  // Doesn't loop: (brackets, multi line);
  for(x = 10; x < 10; x++){
    y+=1;
  }
  // Doesn't loop: (no-brackets, same line);
  for(x = 10; x < 10; x++) y+=1;
  // Doesn't loop: (no-brackets, multiline);
  for(x = 10; x < 10; x++) 
    y+=1;

}