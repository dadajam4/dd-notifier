# dd-notifier
Simple Notifier

It is a thing created to be used very privately.

## Installation

```
$ npm install dd-notifier
```

## How to use
```
const DDNotifier = require('dd-notifier');

new DDNotifier('success', {
  title   : 'This is Title',
  subtitle: 'This is Subtitle',
  message : 'This is Message',
});
```

## Type
- success
- info
- danger