async function run() {
  const res = await fetch('https://flipgyan.com/login');
  const html = await res.text();
  const regex = /src="(\/_next\/static\/chunks\/[^"]+)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const url = 'https://flipgyan.com' + match[1];
    const js = await (await fetch(url)).text();
    const tryCf = js.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/g);
    const loc = js.match(/http:\/\/localhost:4000/g);
    const api = js.match(/api\/auth\/login/g);
    if (tryCf || loc || api) {
      console.log('Script:', match[1], { tryCf, loc, api });
    }
  }
}
run().catch(console.error);
