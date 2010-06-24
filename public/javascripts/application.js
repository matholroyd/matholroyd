/*global jQuery: true, $: true */   // Assume jQuery when running JSLint

"use strict";

$(document).ready(function() {
  $(".datepicker").datepicker({ dateFormat: 'yy-mm-dd' });
});

function filter(selector, query) {  
    query = $.trim(query); //trim white space  
    query = query.replace(/ +/gi, '|'); //add OR for regex query (prefer to add AND but tricky with regex)

    $(selector).each(function () {  
        if ($(this).text().search(new RegExp(query, "i")) < 0) {  
            $(this).hide();
        } else {  
            $(this).show();
        }
    });  
}


jQuery.extend(
    function () {
    
        var ajax_request = function (url, data, callback, type, async, method) {
            if (jQuery.isFunction(data)) {
                callback = data;
                data = {};
            }
            return jQuery.ajax({
                type: method,
                url: url,
                data: data,
                success: callback,
                dataType: type,
                async: async
            });
        };
    
        return {
            put: function (url, data, callback, type, async) {
                return ajax_request(url, data, callback, type, true, 'PUT');
            },
            destroy: function (url, data, callback, type, async) {
                return ajax_request(url, data, callback, type, true, 'DELETE');
            },
            destroySync: function (url, data, callback, type) {
                return ajax_request(url, data, callback, type, false, 'DELETE');
            },
            putSync: function (url, data, callback, type, async) {
                return ajax_request(url, data, callback, type, false, 'PUT');
            }
        };
    
    }()
);
