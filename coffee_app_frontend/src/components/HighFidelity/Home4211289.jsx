import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * Home4211289
 * Renders the high-fidelity Home screen (Screen 421:1289).
 * Notes:
 * - Images referenced via /assets/figmaimages/... are served from public root.
 * - Executes the original screen JS initialization on mount if available.
 */
export default function Home4211289() {
  useEffect(() => {
    // Inject CSS into head (served from /assets)
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/highfidelity-home-421-1289.css';
    document.head.appendChild(link);

    // Dynamically load the original JS to preserve interactions
    const script = document.createElement('script');
    script.src = '/assets/highfidelity-home-421-1289.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove injected assets
      if (link && link.parentNode) link.parentNode.removeChild(link);
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="hf-screen-root hf-home-421-1289" style={{ display: 'flex', justifyContent: 'center' }}>
      <main id="screen-421-1289" className="artboard" role="main" aria-label="High-Fidelity ( Home )" data-testid="screen-artboard">
        <section className="node frame node-421-1366" aria-label="Top" style={{ left: 0, top: 0, width: 375, height: 280 }}>
          <div className="node rect node-421-1367" style={{ left: 0, top: 0, width: 375, height: 280 }} />
          <section className="node frame node-421-1378" aria-label="Location & Profile" style={{ left: 24, top: 68, width: 161, height: 43 }}>
            <div className="node frame node-421-1379" style={{ left: 0, top: 0, width: 161, height: 43 }}>
              <div className="text text-subtle node-421-1380" style={{ left: 0, top: 0, width: 55, height: 14 }}>Location</div>
              <div className="node frame node-421-1381" style={{ left: 0, top: 22, width: 161, height: 21 }}>
                <div className="text text-title node-421-1382" style={{ left: 0, top: 0, width: 143, height: 21 }}>Bilzen, Tanjungbalai</div>
                <div className="icon-arrow-down" aria-hidden="true" style={{ left: 147, top: 3.5, width: 14, height: 14 }} />
              </div>
            </div>
          </section>
          <section className="node frame node-421-1384" aria-label="Search Bar" style={{ left: 24, top: 135, width: 327, height: 52 }}>
            <div className="node frame node-421-1385 pill" style={{ left: 0, top: 0, width: 259, height: 52 }}>
              <div className="icon-search" aria-hidden="true" style={{ left: 16, top: 16, width: 20, height: 20 }} />
              <div className="text text-placeholder node-421-1387" style={{ left: 44, top: 17.5, width: 98, height: 17 }}>Search coffee</div>
            </div>
            <button className="node frame node-421-1388 icon-52" data-testid="btn-filter" aria-label="Filter" style={{ left: 275, top: 0, width: 52, height: 52 }}>
              <div className="icon-filter" aria-hidden="true" style={{ left: 16, top: 16, width: 20, height: 20 }} />
            </button>
          </section>
          <section className="node frame node-421-1368 card" aria-label="Banner" style={{ left: 24, top: 211, width: 327, height: 140 }}>
            <div className="node rect node-421-1369" style={{ left: 0, top: 0, width: 327, height: 140 }} />
            <img className="node node-421-1370" alt="Banner" src="/assets/figmaimages/figma_image_421_1370_f3719577.png" style={{ left: 0, top: 0, width: 327, height: 140, borderRadius: 16 }} />
            <div className="node frame node-421-1371" style={{ left: 24, top: 13, width: 204, height: 114 }}>
              <div className="node frame node-421-1372 promo-pill" style={{ left: 0, top: 0, width: 60, height: 26 }}>
                <div className="text text-promo node-421-1373" style={{ left: 6, top: 4, width: 48, height: 18 }}>Promo</div>
              </div>
              <div className="node group node-421-1374" style={{ left: 0, top: 34, width: 204, height: 80 }}>
                <div className="node rect node-421-1376" aria-hidden="true" style={{ left: 0, top: 15, width: 200, height: 27, opacity: 0 }} />
                <div className="node rect node-421-1375" aria-hidden="true" style={{ left: 0, top: 54, width: 149, height: 23, opacity: 0 }} />
                <div className="text text-banner node-421-1377" style={{ left: 1, top: 0, width: 203, height: 80 }}>
                  Buy one get one FREE
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="node frame node-421-1290" aria-label="Category" style={{ left: 0, top: 375, width: 375, height: 436 }}>
          <div className="node frame node-421-1291" style={{ left: 24, top: 0, width: 327, height: 545 }}>
            <div className="node frame node-421-1292" style={{ left: 0, top: 0, width: 327, height: 29 }}>
              <button className="node frame node-421-1293 tab tab-active" aria-label="All Coffee" data-testid="tab-all" style={{ left: 0, top: 0, width: 87, height: 29 }}>
                <div className="text text-tab-active node-421-1294" style={{ left: 8, top: 4, width: 71, height: 21 }}>All Coffee</div>
              </button>
              <button className="node frame node-421-1295 tab" aria-label="Machiato" data-testid="tab-machiato" style={{ left: 103, top: 0, width: 83, height: 29 }}>
                <div className="text text-tab node-421-1296" style={{ left: 8, top: 4, width: 67, height: 21 }}>Machiato</div>
              </button>
              <button className="node frame node-421-1297 tab" aria-label="Latte" data-testid="tab-latte" style={{ left: 206, top: 0, width: 53, height: 29 }}>
                <div className="text text-tab node-421-1298" style={{ left: 8, top: 4, width: 37, height: 21 }}>Latte</div>
              </button>
              <button className="node frame node-421-1299 tab" aria-label="Americano" data-testid="tab-americano" style={{ left: 273, top: 0, width: 94, height: 29 }}>
                <div className="text text-tab node-421-1300" style={{ left: 8, top: 4, width: 78, height: 21 }}>Americano</div>
              </button>
            </div>

            <div className="node frame node-421-1301" style={{ left: 0, top: 45, width: 327, height: 500 }}>
              <section className="node frame card product node-421-1302" aria-label="Product Caffe Mocha" style={{ left: 0, top: 0, width: 156, height: 238 }}>
                <div className="node frame node-421-1303" style={{ left: 8, top: 8, width: 140, height: 128 }}>
                  <img className="node node-421-1304" alt="Coffee Image 2" src="/assets/figmaimages/figma_image_421_1304_5378fc7a.png" style={{ left: 0, top: 0, width: 140, height: 128, borderRadius: 16 }} />
                  <div className="node frame node-421-1305 rating" style={{ left: 89, top: 0, width: 51, height: 28 }}>
                    <div className="node frame node-421-1306 star" style={{ left: 8, top: 8, width: 12, height: 12 }}>
                      <img alt="star" src="/assets/figmaimages/figma_image_421_1308_37062875.svg" style={{ position: 'absolute', left: 1, top: 1, width: 10, height: 10 }} />
                    </div>
                    <div className="text text-rating node-421-1310" style={{ left: 28, top: 8, width: 13, height: 12 }}>4.8</div>
                  </div>
                </div>
                <div className="node frame node-421-1311" style={{ left: 8, top: 144, width: 140, height: 82 }}>
                  <div className="node frame node-421-1312" style={{ left: 0, top: 0, width: 103, height: 42 }}>
                    <div className="text text-product-title node-421-1313" style={{ left: 0, top: 0, width: 103, height: 24 }}>Caffe Mocha</div>
                    <div className="text text-product-sub node-421-1314" style={{ left: 0, top: 28, width: 69, height: 14 }}>Deep Foam</div>
                  </div>
                  <div className="node frame add-row node-421-1315" style={{ left: 0, top: 50, width: 140, height: 32 }}>
                    <div className="text text-price node-421-1316" style={{ left: 0, top: 2.5, width: 76, height: 27 }}>$ 4.53</div>
                    <button className="node frame icon-btn plus node-421-1317" data-testid="btn-add-1302" aria-label="Add Caffe Mocha" style={{ left: 108, top: 0, width: 32, height: 32 }}>
                      <span className="icon-plus" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </section>

              <section className="node frame card product node-421-1318" aria-label="Product Flat White" style={{ left: 171, top: 0, width: 156, height: 238 }}>
                <div className="node frame node-421-1319" style={{ left: 8, top: 8, width: 140, height: 128 }}>
                  <img className="node node-421-1320" alt="Coffee Image 3" src="/assets/figmaimages/figma_image_421_1320_417_717_56e68464.png" style={{ left: 0, top: 0, width: 140, height: 128, borderRadius: 16 }} />
                  <div className="node frame node-421-1321 rating" style={{ left: 89, top: 0, width: 51, height: 28 }}>
                    <div className="node frame node-421-1322 star" style={{ left: 8, top: 8, width: 12, height: 12 }} />
                    <div className="text text-rating node-421-1326" style={{ left: 28, top: 8, width: 13, height: 12 }}>4.8</div>
                  </div>
                </div>
                <div className="node frame node-421-1327" style={{ left: 8, top: 144, width: 140, height: 82 }}>
                  <div className="node frame node-421-1328" style={{ left: 0, top: 0, width: 83, height: 42 }}>
                    <div className="text text-product-title node-421-1329" style={{ left: 0, top: 0, width: 83, height: 24 }}>Flat White</div>
                    <div className="text text-product-sub node-421-1330" style={{ left: 0, top: 28, width: 55, height: 14 }}>Espresso</div>
                  </div>
                  <div className="node frame add-row node-421-1331" style={{ left: 0, top: 50, width: 140, height: 32 }}>
                    <div className="text text-price node-421-1332" style={{ left: 0, top: 2.5, width: 76, height: 27 }}>$ 3.53</div>
                    <button className="node frame icon-btn plus node-421-1333" data-testid="btn-add-1318" aria-label="Add Flat White" style={{ left: 108, top: 0, width: 32, height: 32 }}>
                      <span className="icon-plus" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </section>

              <section className="node frame card product node-421-1350" aria-label="Product Mocha Fusi" style={{ left: 0, top: 262, width: 156, height: 238 }}>
                <div className="node frame node-421-1351" style={{ left: 8, top: 8, width: 140, height: 128 }}>
                  <img className="node node-421-1352" alt="Coffee Image 5" src="/assets/figmaimages/figma_image_421_1352_417_716_d43ab277.png" style={{ left: 0, top: 0, width: 140, height: 128, borderRadius: 16 }} />
                  <div className="node frame node-421-1353 rating" style={{ left: 89, top: 0, width: 51, height: 28 }}>
                    <div className="node frame node-421-1354 star" style={{ left: 8, top: 8, width: 12, height: 12 }} />
                    <div className="text text-rating node-421-1358" style={{ left: 28, top: 8, width: 13, height: 12 }}>4.8</div>
                  </div>
                </div>
                <div className="node frame node-421-1359" style={{ left: 8, top: 144, width: 140, height: 82 }}>
                  <div className="node frame node-421-1360" style={{ left: 0, top: 0, width: 93, height: 42 }}>
                    <div className="text text-product-title node-421-1361" style={{ left: 0, top: 0, width: 93, height: 24 }}>Mocha Fusi</div>
                    <div className="text text-product-sub node-421-1362" style={{ left: 0, top: 28, width: 46, height: 14 }}>Ice/Hot</div>
                  </div>
                  <div className="node frame add-row node-421-1363" style={{ left: 0, top: 50, width: 140, height: 32 }}>
                    <div className="text text-price node-421-1364" style={{ left: 0, top: 2.5, width: 76, height: 27 }}>$ 7.53</div>
                    <button className="node frame icon-btn plus node-421-1365" data-testid="btn-add-1350" aria-label="Add Mocha Fusi" style={{ left: 108, top: 0, width: 32, height: 32 }}>
                      <span className="icon-plus" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </section>

              <section className="node frame card product node-421-1334" aria-label="Product Caffe Panna" style={{ left: 171, top: 262, width: 156, height: 238 }}>
                <div className="node frame node-421-1335" style={{ left: 8, top: 8, width: 140, height: 128 }}>
                  <img className="node node-421-1336" alt="Coffee Image 4" src="/assets/figmaimages/figma_image_421_1336_417_718_ec6cbc21.png" style={{ left: 0, top: 0, width: 140, height: 128, borderRadius: 16 }} />
                  <div className="node frame node-421-1337 rating" style={{ left: 89, top: 0, width: 51, height: 28 }}>
                    <div className="node frame node-421-1338 star" style={{ left: 8, top: 8, width: 12, height: 12 }} />
                    <div className="text text-rating node-421-1342" style={{ left: 28, top: 8, width: 13, height: 12 }}>4.8</div>
                  </div>
                </div>
                <div className="node frame node-421-1343" style={{ left: 8, top: 144, width: 140, height: 82 }}>
                  <div className="node frame node-421-1344" style={{ left: 0, top: 0, width: 98, height: 42 }}>
                    <div className="text text-product-title node-421-1345" style={{ left: 0, top: 0, width: 98, height: 24 }}>Caffe Panna</div>
                    <div className="text text-product-sub node-421-1346" style={{ left: 0, top: 28, width: 46, height: 14 }}>Ice/Hot</div>
                  </div>
                  <div className="node frame add-row node-421-1347" style={{ left: 0, top: 50, width: 140, height: 32 }}>
                    <div className="text text-price node-421-1348" style={{ left: 0, top: 2.5, width: 76, height: 27 }}>$ 5.53</div>
                    <button className="node frame icon-btn plus node-421-1349" data-testid="btn-add-1334" aria-label="Add Caffe Panna" style={{ left: 108, top: 0, width: 32, height: 32 }}>
                      <span className="icon-plus" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <nav className="node frame node-421-1390" aria-label="Bottom Navigation" style={{ left: 0, top: 713, width: 375, height: 99 }}>
          <div className="node frame node-421-1391" style={{ left: 55.5, top: 24, width: 24, height: 35 }}>
            <div className="node frame node-421-1392" style={{ left: 0, top: 0, width: 24, height: 24 }}>
              <img alt="Home icon" src="/assets/figmaimages/figma_image_421_1394_a42d3a90.svg" style={{ position: 'absolute', left: 2.5, top: 2, width: 19, height: 20 }} />
            </div>
            <img alt="Home dot" src="/assets/figmaimages/figma_image_421_1395_772c3202.svg" style={{ position: 'absolute', left: 7, top: 30, width: 10, height: 5 }} />
          </div>
          <div className="node frame node-421-1396" style={{ left: 135.5, top: 24, width: 24, height: 24 }}>
            <div className="icon-heart" aria-hidden="true" style={{ left: 2, top: 2, width: 20, height: 20 }} />
          </div>
          <div className="node frame node-421-1397" style={{ left: 215.5, top: 24, width: 24, height: 24 }}>
            <div className="icon-bag" aria-hidden="true" style={{ left: 2, top: 2, width: 20, height: 20 }} />
          </div>
          <div className="node frame node-421-1398" style={{ left: 295.5, top: 24, width: 24, height: 24 }}>
            <div className="icon-bell" aria-hidden="true" style={{ left: 2, top: 2, width: 20, height: 20 }} />
          </div>
        </nav>

        <section className="node frame node-421-1399" aria-label="iOS Status Bar" style={{ left: 0, top: 0, width: 375, height: 44 }}>
          <img alt="Time 9:41" src="/assets/figmaimages/figma_image_421_1399_417_348_ef6382ae.svg" style={{ position: 'absolute', left: 24, top: 16, width: 28, height: 12 }} />
          <div className="status-bars" aria-hidden="true">
            <div className="sb-signal" />
            <div className="sb-wifi" />
            <div className="sb-battery" />
          </div>
        </section>

        <section className="node frame node-421-1400" aria-label="Home indicator" style={{ left: 0, top: 778, width: 375, height: 34 }}>
          <div className="home-indicator" style={{ left: 112, top: 21, width: 134, height: 5 }} />
        </section>

        <img className="reference-bg" alt="Artboard reference" src="/assets/figmaimages/figma_image_421_1289_c0b41feb.png" aria-hidden="true" />
      </main>
    </div>
  );
}
