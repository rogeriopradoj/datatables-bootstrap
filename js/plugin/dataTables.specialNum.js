 jQuery.extend( jQuery.fn.dataTableExt.oSort, {
         
        /***
         * numeric point string
         */
        "numeric-comma-pre": function ( a ) {
        var x = (a == "-") ? 0 : a.replace( /,/, "." );
        return parseFloat( x );
        },
     
        "numeric-comma-asc": function ( a, b ) {
            return ((a < b) ? -1 : ((a > b) ? 1 : 0));
        },
     
        "numeric-comma-desc": function ( a, b ) {
            return ((a < b) ? 1 : ((a > b) ? -1 : 0));
        },
        
        /***
         * numeric point string
         */
         "numeric-point-pre": function ( a ) {
        var x = (a == "-") ? 0 : a.replace( ".", "" );
        return parseFloat( x );
        },
     
        "numeric-point-asc": function ( a, b ) {
            return ((a < b) ? -1 : ((a > b) ? 1 : 0));
        },
     
        "numeric-point-desc": function ( a, b ) {
            return ((a < b) ? 1 : ((a > b) ? -1 : 0));
        },

        /***
         * numeric point and comma string
         */
        "numeric-pointcomma-pre": function ( a ) {
            var x;
            if (a == "-") {
                x = 0;
            } else {
                x = a.replace( /\./g, "" );
                x = x.replace( ",", "." );
            }
            return parseFloat( x );
        },
     
        "numeric-pointcomma-asc": function ( a, b ) {
            return ((a < b) ? -1 : ((a > b) ? 1 : 0));
        },
     
        "numeric-pointcomma-desc": function ( a, b ) {
            return ((a < b) ? 1 : ((a > b) ? -1 : 0));
        }
    }
);