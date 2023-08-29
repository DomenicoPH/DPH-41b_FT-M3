'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
function $Promise(executor){
    if(typeof executor !== "function"){
        throw new TypeError('executor must be a function');
    }

    this._state = 'pending';
    this._value = undefined;
    this._handlerGroups = [];

    executor(this._internalResolve.bind(this),this._internalReject.bind(this));
}

$Promise.prototype._callHandlers = function(value){
    while(this._handlerGroups.length){
        const group = this._handlerGroups.shift();
        //success handler
        if(this._state === 'fulfilled'){
            if(group.successCb){
                try {
                    const newValue = group.successCb(value);
                    if(newValue instanceof $Promise){
                        return newValue.then(
                            (value) => group.downstreamPromise._internalResolve(value),
                            (error) => group.downstreamPromise._internalReject(error)
                        )
                    } else {
                        group.downstreamPromise._internalResolve(newValue)
                    }
                } catch (error) {
                    group.downstreamPromise._internalReject(error)
                }
            } else {
                group.downstreamPromise._internalResolve(value)
            }
        }
        //error handler
        if(this._state === 'rejected'){
            if(group.errorCb){
                try {
                    const newValue = group.errorCb(value);
                    if(newValue instanceof $Promise){
                        return newValue.then(
                            (value) => group.downstreamPromise._internalResolve(value),
                            (error) => group.downstreamPromise._internalReject(error)
                        )
                    } else {
                        group.downstreamPromise._internalResolve(newValue)
                    }
                } catch (error) {
                    group.downstreamPromise._internalReject(error)
                }
            } else {
                group.downstreamPromise._internalReject(value)
            }
        }
    
    }
};

$Promise.prototype._internalResolve = function(value){
    if(this._state === 'pending'){
        this._state = 'fulfilled'
        this._value = value
        this._callHandlers(value)
    }
};

$Promise.prototype._internalReject = function(value){
    if(this._state === 'pending'){
        this._state = 'rejected'
        this._value = value
        this._callHandlers(value)
    }
};

$Promise.prototype.then = function(successCb,errorCb){
    const downstreamPromise = new $Promise(() => {});
    this._handlerGroups.push({
        successCb: typeof successCb === 'function' ? successCb : false,
        errorCb: typeof errorCb === 'function' ? errorCb : false,
        downstreamPromise,
    })

    if(this._state !== 'pending') this._callHandlers(this._value);

    return downstreamPromise;
}

$Promise.prototype.catch = function (errorCb){
    return this.then(null,errorCb);
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
