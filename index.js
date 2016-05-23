'use strict';

/**
 * Typed map using string as key and function as value.
 * @type {FunctionMap}
 */
module.exports = class FunctionMap {

  /**
   * @constructor
   */
  constructor() {
    this._map = new Map();
  }

  /**
   * Get size of map.
   * @returns {number}
   */
  get size() {
    return this._map.size;
  }

  /**
   * Setup function by key.
   * @param {string} key
   * @param {function} fn
   * @returns {FunctionMap}
   */
  use(key, fn) {
    if (typeof fn === 'function') this._map.set(key, fn);
    return this;
  }

  /**
   * Get function by key.
   * @param {string} key
   * @returns {function}
   */
  get(key) {
    return this._map.get(key);
  }
  
  /**
   * Create new map.
   * @returns {FunctionMap}
   */
  static create() {
    return new FunctionMap();
  }

};
