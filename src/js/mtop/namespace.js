(function(){
    window.namespace = function(key,value){
       // set value
       if( 2 === arguments.length ){
           var nsArray = key.split('.');
           var tmp = window;
           for (var i = 0; i < nsArray.length; i++)
           {
               var nsKey = nsArray[i];
               if( i === (nsArray.length - 1)){
                   if(tmp[ nsKey]){
                       console.error("namespace aleady exist :" + key +"|"+value +"|"+tmp[ nsKey] );
                   }else{
                       tmp[ nsKey] = value;
                   }
                   break;
               }
               tmp[nsKey] || (tmp[nsKey] = {});
               tmp = tmp[nsKey];
           }
           return tmp;
       }

        //get value
        if( 1 === arguments.length){
           try{
                return eval('window.' + key);
           }catch (e){
               return undefined;
           }
        }
    }
})();