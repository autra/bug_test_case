'use strict';

/*global
renderCacheContract,
Client
*/

function RenderCacheAPI() {
  this.bridge = new Client(renderCacheContract);
  this.bridge.addEventListener('saved', this.onSaved.bind(this));
}

RenderCacheAPI.prototype.save = function(url, markup) {
  // debug('Sending save cache for ' + url);
  return this.bridge.save(url, markup);
};

// Utility method to save the current document
RenderCacheAPI.prototype.saveCurrent = function() {
  var url = document.location.toString();
  var markup = document.documentElement.outerHTML;
  return this.save(url, markup);
};

RenderCacheAPI.prototype.evict = function(url) {
  // debug('Sending evict cache for ' + url);
  return this.bridge.evict(url);
};

RenderCacheAPI.prototype.evictCurrent = function() {
  var url = document.location.toString();
  return this.evict(url);
};

RenderCacheAPI.prototype.onSaved = function() {
  // debug('Cache saved for ' + args.url);
};

window.renderCache = new RenderCacheAPI();
