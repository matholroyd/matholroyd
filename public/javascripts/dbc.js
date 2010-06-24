/*global DBC: true */               // Assume DBC when running JSLint

"use strict";


DBC = {
    errorMsg: function (type, message) {
        var c,
            msg;
            
        c = arguments.callee.caller;
        msg = 'DBC ' + type + ' Error: ';
        
        if (message !== undefined) {
            msg += ' ' + message + ': ';
        }
        
        msg += 'Trace was ' + c.getName() + '\n' + c.trace();
        
        throw msg;
    },
    require: function (check, message) {
        if (!check) {
            this.errorMsg('Require', message);
        } 
    },
    assert: function (check, message) {
        if (!check) {
            this.errorMsg('Assert', message);
        } 
    },
    ensure: function (check, message) {
        if (!check) {
            this.errorMsg('Ensure', message);
        } 
    }
};


Function.prototype.trace = function ()
{
    var trace,
        current;
        
    trace = [];
    current = this;
    while (current)
    {
        trace.push(current.signature());
        current = current.caller;
    }
    return trace;
};

Function.prototype.signature = function ()
{
    var signature,
        x;
    
    signature = {
        name: this.getName(),
        params: [],
        toString: function ()
        {
            var params;
            params = this.params.length > 0 ?
                "'" + this.params.join("', '") + "'" : "";
            return this.name + "(" + params + ")";
        }
    };
    if (arguments)
    {
        for (x = 0; x < arguments.length; x = x + 1) {
            signature.params.push(arguments[x]);
        }
    }
    return signature;
};

Function.prototype.getName = function ()
{
    var definition,
        exp;
        
    if (this.name) {
        return this.name;
    }
    definition = this.toString().split("\n")[0];
    exp = /^function (\S+?)[\s(]/;
    if (exp.test(definition)) {
        return definition.split("\n")[0].match(exp)[0] || "anonymous";
    }
    return "anonymous";
};
