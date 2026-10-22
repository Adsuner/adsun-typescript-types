const ad = window.Adsun?.init({ blockId: "YOUR_BLOCK_ID", debug: true });
ad?.show().then((r) => console.log(r.state)).catch((r) => console.log(r.description));
