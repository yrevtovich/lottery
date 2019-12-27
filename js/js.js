function lottery(str) {
    let result = '';
    for( let i = 0; i < str.length; i++ ) {  
        if( isNaN(str[i]) == false ) {
            if( i == 0 ) {
                result += str[i];
            } else if( result.length == 0 ) {
                result += str[i];
            } else {
                let checkRepeats = 0;
                for( let n = 0;  n < result.length; n++ ) {           
                    if( str[i] != result[n] ) {
                        checkRepeats += 1;               
                    }

                    if( checkRepeats == result.length ) {
                        result += str[i];
                    }     
                }
                
            }
        }        
    }
    if( result != '') {
        return result;
    } else {
        return 'One more run!';
    }  
}

123