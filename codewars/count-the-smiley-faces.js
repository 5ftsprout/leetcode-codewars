//Count the Smiley Faces!
function countSmileys(arr) {
    let count = 0
    arr.forEach(face => {
        if ( (face.startsWith(':') || face.startsWith(';')) && (face.endsWith(')') || face.endsWith('D')) ){        //Check for valid eyes and mouth.
            if (face.length == 2){                                                                                  //If length is 2 the face immediately passes all checks!
                return count++
            } else if (face.length == 3 && (face[1] == '-' || face[1] == '~')){                                     //Check that the nose is valid.
                return count++
            }
        } 
    })
    return count
}



//Top Relevant Answer
function countSmileys(arr) {
    var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    var count = 0;
    
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<smileys.length; j++){
        if (arr[i]===smileys[j]){
          count++;
        }
      }
      }
    return count;
    }