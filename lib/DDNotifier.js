'use strict';



// modules
const NodeNotifier = require('node-notifier');
const path         = require('path');



// constants
const ASSETS_PATH  = path.join(__dirname, '..', 'assets');
const IMG_PATH     = path.join(ASSETS_PATH, 'img');
const SOUND_PATH   = path.join(ASSETS_PATH, 'sound');
const DEFAULT_TYPE = 'info';
const TYPE_TABLE   = {
  info   : {sound: 'Funk' },
  success: {sound: 'Funk' },
  danger : {sound: 'Basso'},
};



class DDNotifier {



  /**
   * constructor
   */
  constructor(type, opt = {}) {
    let define = TYPE_TABLE[type] || TYPE_TABLE[DEFAULT_TYPE];

    this.title    = opt.title    || type;
    this.subtitle = opt.subtitle || false;
    this.message  = opt.message  || false;
    this.icon     = path.join(IMG_PATH, type + '.png');
    this.sound    = define.sound ? define.sound : false;
    this.instance = NodeNotifier.notify(this);
  }
}



module.exports = DDNotifier;