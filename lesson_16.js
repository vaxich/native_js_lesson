
const store = {
    _subscriber: [],
    dispatch(action) {
        // store changed
        this._subscriber.forEach(rerender => rerender())
    },
    subscribe(subscriber) {
        this._subscriber.push(subscriber)
    }
}

store.subscribe( function subscriber() {}) // стор изменился
promise.then(function subscriber() {}) // промис зарезолвился
setTimeout(function subscriber() {}, 1000) // прошла секунда
button.addEventListener('click', function subscriber() {})// произошёл клик по кнопке

// subscriber === observer === listener === watcher === handler

const button = {
    _subscriber: {
        'click': [],
        'doubleClick': [],
        'onFocus': [],
    },
    click() {
        this._subscriber['click'].forEach( (subscriber) => subscriber())
    },
    doubleClick() {
        this._subscriber['doubleClick'].forEach( (subscriber) => subscriber())
    },
    onFocus() {
        this._subscriber['onFocus'].forEach( (subscriber) => subscriber())
    },
    addEventListener(eventName, subscriber) {
        this._subscriber[eventName].push(subscriber)
    },
    removeEventListener(eventName, subscriber) {
        this._subscriber[eventName] = this._subscriber[eventName].filter( sub => sub != subscriber)
    }
}

