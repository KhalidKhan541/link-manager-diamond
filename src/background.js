chrome.runtime.onMessage.addListener((msg, s, resp) => { if(msg.action === 'getLinks') { chrome.storage.local.get('links', d => resp({links: d.links || []})); return true; } });
