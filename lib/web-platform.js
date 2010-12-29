define("web-platform", ["web-resource", "web-util", "web-sha", "web-aes"], function (resource, util, sha, aes) {
  return {
    Resource: resource.Resource,
		crypto: {
			aes: aes,
			hash: sha,
			base64: {
			  encode: util.encodeBase64,
				decode: util.decodeBase64
		  },
			base32: {
			  encode: util.encodeBase32,
				decode: util.decodeBase32
		  }
		},
		settings: {
			get: function getSetting(key) {
			  return localStorage.getItem(key);
			},
			set: function setSetting(key, value) {
			  localStorage.setItem(key, value);
			}
		},
		notify: {
		  syncStarted: function syncStarted(engines) {},
			syncEnded: function syncEnded(reason) {},
			syncEngineStarted: function syncEngineStarted(engine) {},
			syncEngineEnded: function syncEngineEnded(engine, reason) {}
		}
  };
});
